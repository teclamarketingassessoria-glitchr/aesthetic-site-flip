import { motion } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

/**
 * Background animado para o hero: zoom lento contínuo (Ken Burns)
 * + leve drift, criando sensação cinematográfica sem peso de vídeo.
 */
export function KenBurnsHero({ src, alt, className = "" }: Props) {
  return (
    <div className={`absolute inset-0 overflow-hidden bg-ink ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        initial={{ scale: 1.15, x: -10, y: -10 }}
        animate={{ scale: 1.28, x: 10, y: 10 }}
        transition={{
          duration: 18,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
