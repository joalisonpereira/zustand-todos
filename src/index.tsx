import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import Entry from "./components/Entry";
import { GlobalStyles } from "./styles";
import theme from "./styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Entry />
  </ThemeProvider>
);
