import { Moon, Sun } from "lucide-react";
import * as React from "react";

type ModeToggleProps = {
  className?: string;
};

const ModeToggle: React.FC<ModeToggleProps> = ({ className }) => {
  const [theme, setThemeState] = React.useState<"theme-light" | "dark">(
    "theme-light",
  );

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  React.useEffect(() => {
    document.documentElement.classList[theme === "dark" ? "add" : "remove"](
      "dark",
    );
  }, [theme]);

  return (
    <button
      type="button"
      className={className}
      onClick={() =>
        setThemeState(theme === "theme-light" ? "dark" : "theme-light")
      }
    >
      {theme === "theme-light" ? (
        <Sun className="h-6 w-6 fill-current" />
      ) : (
        <Moon className="h-6 w-6 fill-current" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ModeToggle;
