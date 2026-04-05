// Merge restaurant theme into CSS custom properties
export function buildThemeVars(config: {
  primaryColor?: string | null;
  accentColor?: string | null;
  fontFamily?: string | null;
}): Record<string, string> {
  return {
    "--brand-primary": config.primaryColor ?? "#e85d24",
    "--brand-accent":  config.accentColor  ?? "#1a1a1a",
    "--brand-font":    config.fontFamily   ?? "Inter",
  };
}
