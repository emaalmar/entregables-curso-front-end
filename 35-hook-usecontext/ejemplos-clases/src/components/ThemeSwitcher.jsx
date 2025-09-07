import { useTheme } from "../context/ThemeContext.jsx";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Cambiar a {theme === "light" ? "oscuro" : "claro"}
    </button>
  );
};

export default ThemeSwitcher;