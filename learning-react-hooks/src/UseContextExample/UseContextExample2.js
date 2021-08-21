import FunctionContextComponent2 from "./FunctionContextComponent2";
import { ThemeProvider } from "./ThemeContext";

export const UseContextExample2 = () => {
  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent2 />
      </ThemeProvider>
    </>
  );
};
