import { useContext } from "react";
import { ThemeContext } from "../contexts/toggleTheme";

function useToggleTheme() {
  const context = useContext(ThemeContext);

  return context;
}

export default useToggleTheme;