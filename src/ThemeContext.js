import { createContext } from "react";

const ThemeContext = createContext(["blue", () => {}]); // initial context (data as a useState pattern)

export default ThemeContext;
