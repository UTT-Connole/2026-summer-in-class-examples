import { createContext, useContext, useState } from "react";

const ColorContext = createContext({
  color: "green",
  setColor: (color: string) => {},
});

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("green");
  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  return useContext(ColorContext);
};
