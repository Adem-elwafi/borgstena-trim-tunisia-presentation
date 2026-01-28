import wallpaperImage from '../assets/wp2754931.jpg';

/**
 * FixedBackground
 * 
 * Renders the Windows XP wallpaper as a fixed background layer.
 * This component NEVER moves or animates - it provides the visual foundation
 * that all slides appear above.
 * 
 * Visual treatment:
 * - Full screen fixed positioning
 * - Dark overlay (60-70% opacity)
 * - Slight contrast reduction
 * - Subtle blur effect
 */
export default function FixedBackground() {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Wallpaper image with visual effects */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-[0.72] contrast-[0.9] blur-sm"
        style={{
          backgroundImage: `url(${wallpaperImage})`,
          backgroundSize: '110%',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />
    </div>
  );
}
