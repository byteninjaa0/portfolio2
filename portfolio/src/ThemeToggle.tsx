import { useTheme } from "./ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`ml-4 text-[20px] cursor-pointer bg-transparent border-none ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}

export default ThemeToggle;
