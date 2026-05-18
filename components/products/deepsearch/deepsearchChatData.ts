export type ResponsePhaseType = "text" | "table" | "insight" | "summary";

export type ResponsePhase = {
  type: ResponsePhaseType;
  content: string;
};

export type DeepSearchDataItem = {
  question: string;
  responsePhases: ResponsePhase[];
};

export const deepSearchData = [
  {
    question: "Show transaction volume trend for the last 7 days",
    responsePhases: [
      {
        type: "text",
        content:
          "Here is a summary of transaction activity over the last 7 days:",
      },
      {
        type: "table",
        content: `Date        Total   Successful   Non-Successful   Approval Rate
2026-05-10  100     76           24               76.00%
2026-05-11  3,686   2,762        924              74.93%
2026-05-12  3,798   3,163        635              83.28%
2026-05-13  5,598   4,562        1,036            81.49%
2026-05-14  5,091   4,225        866              82.99%
2026-05-15  5,115   4,174        941              81.60%
2026-05-16  4,794   3,998        796              83.40%`,
      },
      {
        type: "insight",
        content:
          "Volume ramped sharply from 10 May with 100 transactions, likely a partial day, to a peak of 5,598 on 13 May. It then stabilised in the 4,794 to 5,115 range for the remaining days.",
      },
      {
        type: "insight",
        content:
          "Approval rate dipped to its lowest on 11 May at 74.93% before recovering strongly. From 12 May onward, it stayed consistently above 81%, reaching a 7-day high of 83.40% on 16 May.",
      },
      {
        type: "insight",
        content:
          "Non-successful transactions peaked at 1,036 on 13 May in line with the volume spike, but the failure rate remained controlled.",
      },
      {
        type: "summary",
        content:
          "The overall trend shows healthy transaction growth with improving approval performance after the early dip.",
      },
    ],
  },
  {
    question: "Which decline codes increased compared to last week?",
    responsePhases: [
      {
        type: "text",
        content:
          "3 decline codes increased this week, from Mon 11 May to today, compared to last week from Mon 4 May to Sun 10 May.",
      },
      {
        type: "insight",
        content:
          "Note that all three codes are issuer-specific or gateway-internal and are not registered in the standard card network code registry. You may want to verify their exact meanings with your payment provider.",
      },
      {
        type: "table",
        content: `Decline Code   Last Week   This Week   Change
EDGE_TEST      0           19          +19 (new)
20             2           11          +9 (+450%)
RE_BLOCKED     1           2           +1 (+100%)`,
      },
      {
        type: "text",
        content: "Context — overall decline rate:",
      },
      {
        type: "table",
        content: `Period      Attempts   Declines   Decline Rate
Last week   14,305     3,037      21.23%
This week   28,093     5,200      18.51%`,
      },
      {
        type: "insight",
        content:
          "The overall decline rate has actually improved this week despite the higher absolute decline count. This is largely explained by the higher transaction volume this week.",
      },
      {
        type: "insight",
        content:
          "The three increased decline codes account for 32 declines, which is only a small share of the 5,200 total declines this week.",
      },
      {
        type: "insight",
        content:
          "However, the sudden appearance of EDGE_TEST with 19 occurrences from zero, and the sharp rise in code 20, are worth investigating with your payment provider to confirm the root cause.",
      },
      {
        type: "summary",
        content:
          "Overall decline performance improved, but EDGE_TEST and code 20 should be reviewed because their week-over-week movement is unusual.",
      },
    ],
  },
  {
    question: "Show fraud trend over the last 30 days",
    responsePhases: [
      {
        type: "text",
        content:
          "The fraud-flagged transactions in your dataset all fall between September and December 2025. None occurred in the last 30 days, from 17 Apr to 16 May 2026.",
      },
      {
        type: "text",
        content: "Fraud Activity — Last 30 Days (17 Apr – 16 May 2026)",
      },
      {
        type: "table",
        content: `Metric                         Value
Total Transactions             ~69,000+ across 27 active days
Fraud-Flagged Transactions      0
Fraud Rate                     0.00%
Fraud Engine Decisions          No rejections recorded`,
      },
      {
        type: "insight",
        content:
          "Zero fraud notifications were recorded in the last 30 days. The fraud-flagged signal, fraud_notification, is entirely absent from recent data.",
      },
      {
        type: "insight",
        content:
          "Across all historical data, 689 transactions carry a fraud notification, but the most recent was on 15 December 2025, over 5 months ago.",
      },
      {
        type: "insight",
        content:
          "74 transactions have a non-zero fraud_score, but none fall within the last 30 days.",
      },
      {
        type: "insight",
        content:
          "The fraud_engine_decision column has no populated values across any time period, suggesting that field is not currently in use.",
      },
      {
        type: "summary",
        content:
          "In short, there is no fraud activity to trend over the last 30 days. Historical fraud incidents did occur between September and December 2025 and can be reviewed separately by reason, card type, or channel.",
      },
    ],
  },
  {
    question: "Are there any unusual spikes or anomalies today?",
    responsePhases: [
      {
        type: "text",
        content: "Three anomalies stand out today. Here is a summary:",
      },
      {
        type: "insight",
        content:
          "Anomaly 1 — Volume Spike at 06:00: The 06:00 hour saw 510 transactions, the highest of the day and about 56% above the per-hour average of ~265. Volume then dropped sharply to 332 at 07:00 and 231 at 08:00.",
      },
      {
        type: "insight",
        content:
          "This kind of sudden surge may warrant checking whether a batch job, a marketing campaign, or an automated retry cycle fired at that time.",
      },
      {
        type: "insight",
        content:
          "Anomaly 2 — Decline Rate Spike at 02:00: At 02:00, the decline rate jumped to 25.00% against a steady baseline of ~16–17% across most other hours.",
      },
      {
        type: "insight",
        content:
          "This was roughly 8 percentage points above the day's norm and coincided with elevated volume of 356 transactions, the second-busiest hour. 89 of those transactions failed.",
      },
      {
        type: "insight",
        content:
          "This combination of high volume and high declines is worth investigating. Possible causes include a batch of low-quality card data, an issuer outage, or fraudulent activity.",
      },
      {
        type: "insight",
        content:
          "Anomaly 3 — Elevated Decline Rate at 07:00: The 07:00 hour recorded a 21.39% decline rate, with 71 failures out of 332 attempts. This is materially above the normal baseline.",
      },
      {
        type: "insight",
        content:
          "This may be a continuation of the 02:00 issue, or it could be a separate event.",
      },
      {
        type: "insight",
        content:
          "Anomaly 4 — Near-Zero Volume at 09:00: Only 7 transactions were processed at 09:00, an extreme drop from 231 at 08:00 and 346 at 10:00.",
      },
      {
        type: "insight",
        content:
          "This could indicate a brief connectivity or processing outage, or simply very low organic traffic during that slot.",
      },
      {
        type: "text",
        content: "No disputes were recorded today.",
      },
      {
        type: "summary",
        content:
          "Recommended next steps: drill into the 02:00 and 07:00 decline codes, confirm whether the 09:00 volume dip maps to a known system event, and review the 06:00 spike to rule out automated or fraudulent activity.",
      },
      {
        type: "text",
        content:
          "Would you like to investigate any of these anomalies in more detail?",
      },
    ],
  },
] satisfies DeepSearchDataItem[];
