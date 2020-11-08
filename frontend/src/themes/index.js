import { theme } from "./default";
import { createMuiTheme } from "@material-ui/core/styles";

const overrides = {
  typography: {
    h1: {
      fontSize: "3rem",
      fontFamily: "Helvetica Neue LT Std",
    },
    h2: {
      fontSize: "1.1rem",
      fontFamily: "Helvetica Neue LT Std",
       "@media (min-width:1008px)": {
        fontSize: "1.5rem",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "1.3rem",
      },
    },
    h3: {
      fontSize: "1.64rem",
      fontFamily: "Helvetica Neue LT Std",
    },
    h4: {
      fontSize: "1.5rem",
      fontFamily: "Helvetica Neue LT Std",
    },
    h5: {
      fontSize: "1.285rem",
      fontFamily: "Helvetica Neue LT Std",
    },
    h6: {
      fontSize: "1.142rem",
      fontFamily: "Helvetica Neue LT Std",
    },
  },
};

const myTheme = createMuiTheme({ ...theme, ...overrides });

export default myTheme;
