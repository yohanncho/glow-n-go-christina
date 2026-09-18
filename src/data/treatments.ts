import { site } from "@/config/site";

export interface Treatment {
  /** Short display name. */
  name: string;
  /** Plain-English description of what the treatment does. */
  description: string;
  /** Typical unit count, e.g. "10\u201320 units". */
  typicalUnits: string;
  /** Numeric low/high used to compute price estimates at site.pricePerUnit. */
  unitsLow: number;
  unitsHigh: number;
  /** Approximate in-chair time. */
  duration: string;
  /** Lucide icon name key (resolved in components). */
  icon: string;
}

export const treatments: Treatment[] = [
  {
    name: "Forehead Lines",
    description:
      "Smooths the horizontal lines that form across the forehead from raised brows and everyday expression.",
    typicalUnits: "10\u201320 units",
    unitsLow: 10,
    unitsHigh: 20,
    duration: "15\u201320 min",
    icon: "sparkles",
  },
  {
    name: "Frown Lines (11s)",
    description:
      "Softens the vertical lines between the brows that can make you look tired or tense even when you're not.",
    typicalUnits: "15\u201325 units",
    unitsLow: 15,
    unitsHigh: 25,
    duration: "15\u201320 min",
    icon: "smile",
  },
  {
    name: "Crow's Feet",
    description:
      "Smooths the fine smile lines at the outer corners of the eyes for a rested, bright-eyed look.",
    typicalUnits: "6\u201315 units per side",
    unitsLow: 12,
    unitsHigh: 30,
    duration: "15\u201320 min",
    icon: "eye",
  },
  {
    name: "Brow Lift",
    description:
      "A subtle lift of the brow tail for a more open, awake appearance \u2014 no surgery, no downtime.",
    typicalUnits: "2\u20136 units",
    unitsLow: 2,
    unitsHigh: 6,
    duration: "15 min",
    icon: "arrow-up",
  },
  {
    name: "Bunny Lines",
    description:
      "Softens the small scrunch lines on the sides of the nose that appear when you smile or laugh.",
    typicalUnits: "5\u201310 units",
    unitsLow: 5,
    unitsHigh: 10,
    duration: "15 min",
    icon: "rabbit",
  },
  {
    name: "Lip Flip",
    description:
      "Relaxes the upper lip so it gently rolls outward, creating a fuller appearance without filler.",
    typicalUnits: "4\u20136 units",
    unitsLow: 4,
    unitsHigh: 6,
    duration: "15 min",
    icon: "heart",
  },
  {
    name: "Chin Smoothing",
    description:
      "Softens chin dimpling and pebbly texture for a smoother lower-face contour.",
    typicalUnits: "4\u20138 units",
    unitsLow: 4,
    unitsHigh: 8,
    duration: "15 min",
    icon: "circle-dot",
  },
  {
    name: "Jaw Slimming & TMJ Relief",
    description:
      "Relaxes the masseter muscles to slim a wide jawline and ease jaw clenching, grinding, and tension headaches.",
    typicalUnits: "20\u201330 units per side",
    unitsLow: 40,
    unitsHigh: 60,
    duration: "20\u201330 min",
    icon: "shield",
  },
  {
    name: "Neck Bands",
    description:
      "Smooths vertical platysma bands on the neck for a longer, more refined neckline.",
    typicalUnits: "25\u201350 units",
    unitsLow: 25,
    unitsHigh: 50,
    duration: "20\u201330 min",
    icon: "move-vertical",
  },
  {
    name: "Underarm Sweating",
    description:
      "Dramatically reduces excessive underarm sweating for months at a time \u2014 stay dry and confident.",
    typicalUnits: "50 units per side",
    unitsLow: 100,
    unitsHigh: 100,
    duration: "20\u201330 min",
    icon: "droplets",
  },
];

/** Estimated price range string for a treatment at the configured per-unit price. */
export function priceRange(t: Treatment): string {
  const low = t.unitsLow * site.pricePerUnit;
  const high = t.unitsHigh * site.pricePerUnit;
  if (low === high) return `$${low}`;
  return `$${low}\u2013$${high}`;
}
