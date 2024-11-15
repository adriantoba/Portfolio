import { Moon, Sun } from "lucide-react";
import { useTheme } from "../utils/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-[var(--bg-opaque)] backdrop-blur-lg"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Sun className="h-10 w-10 text-black" />
      ) : (
        <Moon className="h-10 w-10 text-[var(--brand)]" />
      )}
    </button>
  );
}
