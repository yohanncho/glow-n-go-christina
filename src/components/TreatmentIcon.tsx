import {
  ArrowUp,
  CircleDot,
  Droplets,
  Eye,
  Heart,
  MoveVertical,
  Rabbit,
  Shield,
  Smile,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/** Maps the `icon` keys in src/data/treatments.ts to lucide icons. */
const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  smile: Smile,
  eye: Eye,
  "arrow-up": ArrowUp,
  rabbit: Rabbit,
  heart: Heart,
  "circle-dot": CircleDot,
  shield: Shield,
  "move-vertical": MoveVertical,
  droplets: Droplets,
};

export function TreatmentIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] ?? Sparkles;
  return <Icon className={className} aria-hidden="true" />;
}
