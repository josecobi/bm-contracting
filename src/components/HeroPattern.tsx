import type { CSSProperties } from 'react'

/**
 * Background texture for the dark-green hero and CTA sections.
 *
 * Replaces the old repeating "+" tile. Two things make this read as designed
 * rather than as wallpaper:
 *  1. the motif means something for a remodeling contractor (drafting grid,
 *     parquet, twill) instead of a stock decorative glyph
 *  2. every variant is masked so the texture dissolves across the section
 *     instead of tiling at flat opacity edge to edge
 *
 * Grid/weave variants are pure CSS gradients — crisper on hi-dpi than an SVG
 * data URI and cheap enough to leave on for mobile.
 */

export type HeroPatternVariant =
  | 'blueprint'   // draftsman's grid — plans, precision, licensed work
  | 'herringbone' // parquet lay pattern — flooring and tile
  | 'twill'       // fine diagonal hairlines — quiet, material, no literal motif
  | 'plaster'     // no motif; troweled light and grain

const svg = (markup: string) =>
  `url("data:image/svg+xml,${encodeURIComponent(markup)}")`

// Fades the texture from upper-left into nothing at lower-right, so the
// section never shows a uniform tiled field.
const DIAGONAL_FALLOFF =
  'linear-gradient(115deg, #000 0%, rgba(0,0,0,0.55) 42%, transparent 78%)'

const VARIANTS: Record<HeroPatternVariant, CSSProperties> = {
  blueprint: {
    // Minor 24px rule under a major 120px rule, both hairline.
    backgroundImage: [
      'repeating-linear-gradient(to right, rgba(255,255,255,0.55) 0 1px, transparent 1px 24px)',
      'repeating-linear-gradient(to bottom, rgba(255,255,255,0.55) 0 1px, transparent 1px 24px)',
      'repeating-linear-gradient(to right, rgba(255,255,255,0.9) 0 1px, transparent 1px 120px)',
      'repeating-linear-gradient(to bottom, rgba(255,255,255,0.9) 0 1px, transparent 1px 120px)',
    ].join(','),
  },
  herringbone: {
    backgroundImage: svg(
      `<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'>
        <g fill='none' stroke='#fff' stroke-width='1.15' stroke-linecap='square'>
          <path d='M0 16 L16 0 M16 32 L32 16 M32 48 L48 32 M48 64 L64 48'/>
          <path d='M32 16 L48 0 M48 32 L64 16 M0 48 L16 32 M16 64 L32 48'/>
        </g>
      </svg>`
    ),
    backgroundSize: '64px 64px',
  },
  twill: {
    backgroundImage:
      'repeating-linear-gradient(45deg, rgba(255,255,255,0.7) 0 1px, transparent 1px 9px)',
  },
  plaster: {
    backgroundImage: svg(
      `<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'>
        <filter id='g'>
          <feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/>
          <feColorMatrix type='saturate' values='0'/>
        </filter>
        <rect width='180' height='180' filter='url(#g)' opacity='0.55'/>
      </svg>`
    ),
    backgroundSize: '180px 180px',
  },
}

// Per-variant opacity: hairline grids need more presence than a noise field.
const OPACITY: Record<HeroPatternVariant, number> = {
  blueprint: 0.09,
  herringbone: 0.08,
  twill: 0.07,
  plaster: 0.14,
}

export default function HeroPattern({
  variant = 'blueprint',
  className = '',
}: {
  variant?: HeroPatternVariant
  className?: string
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          ...VARIANTS[variant],
          opacity: OPACITY[variant],
          maskImage: DIAGONAL_FALLOFF,
          WebkitMaskImage: DIAGONAL_FALLOFF,
        }}
      />

      {/* Warm gold bloom picking up the site's accent, and a cool depth pocket
          opposite it — gives the flat gradient somewhere to recede to. */}
      <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-yellow-300/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-24 h-[32rem] w-[32rem] rounded-full bg-emerald-950/40 blur-3xl" />
    </div>
  )
}
