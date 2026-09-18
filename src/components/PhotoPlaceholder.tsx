import { Camera } from "lucide-react";
import { site } from "@/config/site";

/**
 * Elegant placeholder for Christina's real photo.
 * Swap this component for a next/image portrait when the photo is ready.
 */
export function PhotoPlaceholder({
  label = "Photo of Christina coming soon",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex aspect-[4/5] flex-col items-center justify-center gap-4 rounded-2xl border border-linen bg-sand p-8 text-center ${className}`}
      role="img"
      aria-label={label}
    >
      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gold font-display text-4xl font-semibold text-cream">
        {site.brandMark}
      </span>
      <div className="flex items-center gap-2 text-taupe">
        <Camera className="h-4 w-4" aria-hidden="true" />
        <p className="text-sm font-medium">{label}</p>
      </div>
    </div>
  );
}
