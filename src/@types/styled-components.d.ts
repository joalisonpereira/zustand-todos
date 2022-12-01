import theme from "src/styles/theme";
import "styled-components";

type Theme = typeof theme;

declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}
