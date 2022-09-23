import React, { useContext, Dispatch, SetStateAction } from "react";
import { ThemeVariant } from "../../styles/theme";

type Context = {
  currentTheme: ThemeVariant;
  setCurrentTheme: Dispatch<SetStateAction<ThemeVariant>>;
};

export const ThemeContext = React.createContext<Context>({
  currentTheme: "light",
  setCurrentTheme: () => {},
});

const useTheme = () => {
  return useContext<Context>(ThemeContext);
};

export default useTheme;
