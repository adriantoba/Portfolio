import { useEffect, useState } from "react";
import { useTheme } from "../components/utils/ThemeProvider";

export const useCurrentTheme = () => {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return currentTheme;
};
