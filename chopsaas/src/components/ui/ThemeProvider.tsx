"use client";
import { useEffect } from "react";

interface ThemeProviderProps {
  primaryColor?: string;
  accentColor?: string;
  fontFamily?: string;
  children: React.ReactNode;
}

export default function ThemeProvider({ primaryColor = "#e85d24", accentColor = "#1a1a1a", fontFamily = "Inter", children }: ThemeProviderProps) {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--brand-primary", primaryColor);
    root.style.setProperty("--brand-accent", accentColor);
    root.style.setProperty("--brand-font", fontFamily);
  }, [primaryColor, accentColor, fontFamily]);

  return <>{children}</>;
}
