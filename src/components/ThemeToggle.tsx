"use client";

import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
      className="p-2 sm:p-2.5 rounded-full border border-[var(--border-subtle)]/40 bg-[var(--bg-card)]/80 text-[var(--text-main)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200 cursor-pointer shadow-2xs"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-amber-300 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-[#0A0A0A] transition-transform duration-300 rotate-0 hover:-rotate-12" />
      )}
    </button>
  );
}

export default ThemeToggle;
