"use client";

import { useEffect, useRef } from "react";

export default function ThreatRadar() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 340;
    const H = 340;
    const CX = W / 2;
    const CY = H / 2;
    const MAX_R = 150;

    let angle = 0;
    let lastTime: number | null = null;
    let animId: number;

    interface Dot {
      x: number;
      y: number;
      isFraud: boolean;
      opacity: number;
      detected: boolean;
      detectedAt: number | null;
      zapProgress: number;
      alive: boolean;
      age: number;
      maxAge: number;
    }

    const randomDot = (): Dot => {
      const r = 30 + Math.random() * (MAX_R - 30);
      const a = Math.random() * Math.PI * 2;

      return {
        x: CX + Math.cos(a) * r,
        y: CY + Math.sin(a) * r,
        isFraud: Math.random() < 0.32,
        opacity: 0,
        detected: false,
        detectedAt: null,
        zapProgress: 0,
        alive: true,
        age: 0,
        maxAge: 3200 + Math.random() * 3200,
      };
    };

    let dots: Dot[] = Array.from({ length: 12 }, randomDot);

    const draw = (ts: number) => {
      if (!lastTime) lastTime = ts;

      const dt = ts - lastTime;
      lastTime = ts;

      ctx.clearRect(0, 0, W, H);

      const gradient = ctx.createRadialGradient(CX, CY, 0, CX, CY, MAX_R);
      gradient.addColorStop(0, "rgba(229,229,255,0.45)");
      gradient.addColorStop(0.72, "rgba(229,229,255,0.18)");
      gradient.addColorStop(1, "rgba(229,229,255,0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, W, H);

      ctx.save();
      ctx.translate(CX, CY);

      for (let i = 1; i <= 4; i++) {
        const r = (MAX_R / 4) * i;

        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(103,59,246,${i === 4 ? 0.2 : 0.08})`;
        ctx.lineWidth = i === 4 ? 1.2 : 0.8;
        ctx.stroke();
      }

      ctx.strokeStyle = "rgba(103,59,246,0.07)";
      ctx.lineWidth = 0.75;

      for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI * 2;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(a) * MAX_R, Math.sin(a) * MAX_R);
        ctx.stroke();
      }

      ctx.save();
      ctx.rotate(angle);

      const sweepAngle = Math.PI * 0.55;

      for (let i = 0; i < 48; i++) {
        const t = i / 48;
        const a = -sweepAngle * t;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, MAX_R, a - sweepAngle / 48, a);
        ctx.closePath();
        ctx.fillStyle = `rgba(103,59,246,${0.15 * (1 - t) ** 2})`;
        ctx.fill();
      }

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(MAX_R, 0);
      ctx.strokeStyle = "rgba(103,59,246,0.9)";
      ctx.lineWidth = 2;
      ctx.shadowColor = "rgba(103,59,246,0.45)";
      ctx.shadowBlur = 10;
      ctx.stroke();

      ctx.restore();
      ctx.restore();

      angle += dt * 0.0017;

      dots = dots.filter((d) => d.alive);

      for (const d of dots) {
        d.age += dt;

        const dotAngle = Math.atan2(d.y - CY, d.x - CX);
        const diff =
          (((angle - dotAngle) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);

        if (diff < 0.13 && !d.detected) d.opacity = 1;

        if (d.opacity > 0 && !d.detected) {
          d.opacity = Math.max(0, d.opacity - dt * 0.00035);
        }

        if (!d.detected && d.opacity > 0) {
          ctx.save();

          ctx.beginPath();
          ctx.arc(d.x, d.y, d.isFraud ? 4.8 : 4, 0, Math.PI * 2);
          ctx.fillStyle = d.isFraud
            ? `rgba(239,68,68,${d.opacity})`
            : `rgba(91,97,209,${d.opacity * 0.85})`;

          ctx.shadowColor = d.isFraud
            ? "rgba(239,68,68,0.45)"
            : "rgba(91,97,209,0.35)";
          ctx.shadowBlur = 8;
          ctx.fill();

          if (d.isFraud) {
            ctx.beginPath();
            ctx.arc(d.x, d.y, 8 + (1 - d.opacity) * 10, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(239,68,68,${d.opacity * 0.42})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }

          ctx.restore();
        }

        if (d.isFraud && d.opacity > 0.65 && !d.detectedAt) {
          d.detectedAt = ts + 250 + Math.random() * 450;
        }

        if (d.detectedAt && ts > d.detectedAt && !d.detected) {
          d.detected = true;
        }

        if (d.detected) {
          d.zapProgress = Math.min(1, d.zapProgress + dt * 0.0032);

          ctx.save();

          ctx.beginPath();
          ctx.arc(d.x, d.y, 4.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(239,68,68,${1 - d.zapProgress * 0.45})`;
          // ctx.shadowColor = "rgba(239,68,68,0.6)";
          ctx.shadowBlur = 10;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(d.x, d.y, 7 + d.zapProgress * 20, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(239,68,68,${(1 - d.zapProgress) * 0.7})`;
          ctx.lineWidth = 1.3;
          ctx.stroke();

          ctx.strokeStyle = `rgba(239,68,68,${Math.min(1, d.zapProgress * 3)})`;
          ctx.lineWidth = 1.5;

          ctx.beginPath();
          ctx.moveTo(d.x - 4.5, d.y - 4.5);
          ctx.lineTo(d.x + 4.5, d.y + 4.5);
          ctx.moveTo(d.x + 4.5, d.y - 4.5);
          ctx.lineTo(d.x - 4.5, d.y + 4.5);
          ctx.stroke();

          ctx.font = "600 8px Inter, sans-serif";
          ctx.textAlign = "center";
          ctx.fillStyle = `rgba(220,38,38,${Math.min(1, d.zapProgress * 2)})`;
          ctx.fillText("BLOCKED", d.x, d.y - 13);

          ctx.restore();

          if (d.zapProgress >= 1) d.alive = false;
        }

        if (d.age > d.maxAge && !d.isFraud) d.alive = false;
      }

      while (dots.length < 12) dots.push(randomDot());

      ctx.save();
      ctx.translate(CX, CY);

      ctx.beginPath();
      ctx.arc(0, 0, 11, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(103,59,246,0.12)";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(0, 0, 5.5, 0, Math.PI * 2);
      ctx.fillStyle = "#673bf6";
      ctx.shadowColor = "rgba(103,59,246,0.65)";
      ctx.shadowBlur = 12;
      ctx.fill();

      ctx.restore();

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative flex h-full min-h-105 w-full items-center justify-center overflow-hidden">
      <div className="relative flex h-[400px] w-full max-w-[430px] items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
        <div className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
          Active
        </div>

        <canvas
          ref={canvasRef}
          width={340}
          height={340}
          className="relative z-0 block"
        />
      </div>
    </div>
  );
}
