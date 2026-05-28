"use client";

import { useEffect, useRef } from "react";

export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const ctx = context;

    const W = 340,
      H = 400;

    const LAYERS = [
      { x: 52, nodes: 3, label: "Input" },
      { x: 130, nodes: 5, label: "" },
      { x: 208, nodes: 4, label: "" },
      { x: 286, nodes: 2, label: "Output" },
    ];

    const NODE_R = 10;

    interface NodeState {
      [key: string]: "idle" | "active" | "fraud" | "out_ok" | "out_bad";
    }
    interface EdgeState {
      [key: string]: { progress: number; fraud: boolean };
    }
    interface Particle {
      fromLayer: number;
      toLayer: number;
      fromNode: number;
      toNode: number;
      t: number;
      fraud: boolean;
    }
    interface State {
      nodes: NodeState;
      edges: EdgeState;
      particle: Particle | null;
    }

    const COLORS = {
      idle: { fill: "#f4f4f8", stroke: "#d0d0dd" },
      active: { fill: "#ede9fe", stroke: "#7c3aed" },
      fraud: { fill: "#fef2f2", stroke: "#ef4444" },
      out_ok: { fill: "#dcfce7", stroke: "#16a34a" },
      out_bad: { fill: "#fee2e2", stroke: "#dc2626" },
    };

    function nodeY(layerIdx: number, nodeIdx: number) {
      const count = LAYERS[layerIdx].nodes;
      const spacing = Math.min(64, (H - 80) / (count - 1 || 1));
      const total = spacing * (count - 1);
      return (H - total) / 2 + nodeIdx * spacing;
    }

    function resetState(): State {
      const nodes: NodeState = {};
      const edges: EdgeState = {};
      for (let li = 0; li < LAYERS.length; li++)
        for (let ni = 0; ni < LAYERS[li].nodes; ni++)
          nodes[`${li}-${ni}`] = "idle";
      return { nodes, edges, particle: null };
    }

    function drawNet(state: State) {
      ctx.clearRect(0, 0, W, H);

      // edges
      for (let li = 0; li < LAYERS.length - 1; li++) {
        const la = LAYERS[li],
          lb = LAYERS[li + 1];
        for (let a = 0; a < la.nodes; a++) {
          for (let b = 0; b < lb.nodes; b++) {
            const key = `${li}-${a}-${b}`;
            const info = state.edges[key];
            ctx.beginPath();
            ctx.moveTo(la.x, nodeY(li, a));
            ctx.lineTo(lb.x, nodeY(li + 1, b));
            if (info && info.progress > 0) {
              ctx.strokeStyle = info.fraud ? "#fca5a5" : "#c4b5fd";
              ctx.lineWidth = info.progress > 0.5 ? 1.5 : 0.8;
              ctx.globalAlpha = 0.4 + info.progress * 0.6;
            } else {
              ctx.strokeStyle = "#e5e5ee";
              ctx.lineWidth = 0.8;
              ctx.globalAlpha = 1;
            }
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      // nodes
      for (let li = 0; li < LAYERS.length; li++) {
        for (let ni = 0; ni < LAYERS[li].nodes; ni++) {
          const x = LAYERS[li].x;
          const y = nodeY(li, ni);
          const nstate = state.nodes[`${li}-${ni}`] ?? "idle";
          const c = COLORS[nstate];

          // outer ring glow
          if (nstate === "active" || nstate === "fraud") {
            ctx.beginPath();
            ctx.arc(x, y, NODE_R + 5, 0, Math.PI * 2);
            ctx.strokeStyle =
              nstate === "fraud"
                ? "rgba(239,68,68,0.18)"
                : "rgba(124,58,237,0.18)";
            ctx.lineWidth = 1;
            ctx.stroke();
          }

          ctx.beginPath();
          ctx.arc(x, y, NODE_R, 0, Math.PI * 2);
          ctx.fillStyle = c.fill;
          ctx.strokeStyle = c.stroke;
          ctx.lineWidth = nstate === "idle" ? 1 : 1.5;
          ctx.fill();
          ctx.stroke();
        }
      }

      // labels
      for (let li = 0; li < LAYERS.length; li++) {
        if (!LAYERS[li].label) continue;
        ctx.fillStyle = "#b0b0be";
        ctx.font = "10px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(LAYERS[li].label, LAYERS[li].x, H - 14);
      }

      // travelling particle
      if (state.particle) {
        const p = state.particle;
        const la = LAYERS[p.fromLayer],
          lb = LAYERS[p.toLayer];
        const x1 = la.x,
          y1 = nodeY(p.fromLayer, p.fromNode);
        const x2 = lb.x,
          y2 = nodeY(p.toLayer, p.toNode);
        const px = x1 + (x2 - x1) * p.t;
        const py = y1 + (y2 - y1) * p.t;

        // trail
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fillStyle = p.fraud
          ? "rgba(239,68,68,0.15)"
          : "rgba(124,58,237,0.15)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fillStyle = p.fraud ? "#ef4444" : "#7c3aed";
        ctx.fill();
      }

      // verdict label
      if (
        state.nodes[`${LAYERS.length - 1}-0`] === "out_ok" ||
        state.nodes[`${LAYERS.length - 1}-0`] === "out_bad"
      ) {
        const isFraud = state.nodes[`${LAYERS.length - 1}-0`] === "out_bad";
        ctx.font = "500 10px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.fillStyle = isFraud ? "#dc2626" : "#16a34a";
        ctx.fillText(
          isFraud ? "Fraud blocked" : "Transaction approved",
          W / 2,
          H - 28,
        );
      }
    }

    function sleep(ms: number) {
      return new Promise<void>((r) => setTimeout(r, ms));
    }

    let running = true;

    async function runSignal(isFraud: boolean) {
      const state = resetState();
      const chosen: number[] = [];

      for (let li = 0; li < LAYERS.length; li++)
        chosen.push(Math.floor(Math.random() * LAYERS[li].nodes));

      for (let li = 0; li < LAYERS.length; li++) {
        if (!running) return;
        const ni = chosen[li];

        if (li > 0) {
          const prevNi = chosen[li - 1];
          const eKey = `${li - 1}-${prevNi}-${ni}`;

          for (let t = 0; t <= 1; t += 0.045) {
            if (!running) return;
            state.edges[eKey] = { progress: t, fraud: isFraud };
            state.particle = {
              fromLayer: li - 1,
              toLayer: li,
              fromNode: prevNi,
              toNode: ni,
              t,
              fraud: isFraud,
            };
            drawNet(state);
            await sleep(16);
          }
          state.particle = null;
        }

        state.nodes[`${li}-${ni}`] = isFraud && li >= 1 ? "fraud" : "active";
        drawNet(state);
        await sleep(60);

        // ripple neighbours
        const neighbours = Array.from({ length: LAYERS[li].nodes }, (_, i) => i)
          .filter((i) => i !== ni)
          .slice(0, 2);

        for (const rni of neighbours) {
          if (!running) return;
          state.nodes[`${li}-${rni}`] = isFraud ? "fraud" : "active";
          drawNet(state);
          await sleep(40);
        }
      }

      // resolve output
      const outNi = chosen[LAYERS.length - 1];
      state.nodes[`${LAYERS.length - 1}-${outNi}`] = isFraud
        ? "out_bad"
        : "out_ok";
      drawNet(state);
      await sleep(1200);

      // fade out
      for (let li = 0; li < LAYERS.length; li++)
        for (let ni = 0; ni < LAYERS[li].nodes; ni++)
          state.nodes[`${li}-${ni}`] = "idle";
      drawNet(state);
      await sleep(600);
    }

    async function loop() {
      const sequence = [true, false, false, true, false];
      let i = 0;
      while (running) {
        await runSignal(sequence[i % sequence.length]);
        i++;
        await sleep(300);
      }
    }

    drawNet(resetState());
    loop();

    return () => {
      running = false;
    };
  }, []);

  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl overflow-hidden  min-h-[400px]">
      {/* Right — neural net canvas */}
      <div className="relative bg-gray-50 flex items-center justify-center overflow-hidden">
        <canvas ref={canvasRef} width={340} height={400} />
      </div>
    </div>
  );
}
