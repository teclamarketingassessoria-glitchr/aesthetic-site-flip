import { ImageIcon } from "lucide-react";

type Props = {
  label?: string;
  ratio?: string; // e.g. "4/5", "16/9"
  className?: string;
};

/**
 * Placeholder elegante para fotos reais que serão enviadas pelo cliente.
 * Substitua por <img src={...} /> quando as imagens chegarem.
 */
export function ImagePlaceholder({ label, ratio = "4/5", className = "" }: Props) {
  return (
    <div
      className={`relative overflow-hidden bg-stone ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_oklch(0.88_0.01_60),_oklch(0.92_0.005_70))]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground/60">
        <ImageIcon size={28} strokeWidth={1.2} />
        {label && (
          <p className="text-[10px] tracking-[0.25em] uppercase px-4 text-center">
            {label}
          </p>
        )}
      </div>
    </div>
  );
}
