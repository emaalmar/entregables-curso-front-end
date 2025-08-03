import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./App.css"; // Crea este archivo para tus estilos

function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

// Extrae el contenido para usar el contexto aquí
import { useTheme } from "./context/ThemeContext";

function Content() {
  const { theme } = useTheme();

  return (
    <div className={`app-container ${theme}`}>
      <h1>Ejemplo de useContext</h1>
      <ThemeSwitcher />
    </div>
  );
}

export default App;