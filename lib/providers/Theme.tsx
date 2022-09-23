import React, { ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../hooks/useTheme";
import { themes, ThemeVariant } from "../../styles/theme";
import Store from "store2";

type Props = {
  children: ReactNode;
};

function Theme({ children }: Props) {
  const [currentTheme, setCurrentTheme] = useState<ThemeVariant>("light");

  useEffect(() => {
    const localTheme = Store("current-theme");
    if (localTheme) setCurrentTheme(localTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ThemeProvider theme={themes[currentTheme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default Theme;
