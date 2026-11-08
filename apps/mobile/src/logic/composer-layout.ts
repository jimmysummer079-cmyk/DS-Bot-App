// Keep one scaled line and its padding visible even when the placeholder wraps.
export function composerInputBounds(fontScale: number) {
  const scale = Number.isFinite(fontScale) && fontScale > 0 ? fontScale : 1;
  const minHeight = Math.max(44, Math.ceil(24 * scale) + 20);
  return { minHeight, maxHeight: Math.max(150, minHeight) };
}
