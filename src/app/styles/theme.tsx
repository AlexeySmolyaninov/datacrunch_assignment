export const theme = {
  colors: {
    common: {
      white: "#FFF",
      black: "",
    },
    primary: {
      main: "#4B7A8A",
      dark: "#245866",
      surface: "#F5F9F9",
    },
    grey: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#DDDDDD",
      400: "#C2C2C2",
      500: "#909090",
      600: "#707070",
      800: "#454545",
    },
  },
  margin: "40px",
  paddings: {
    xs: "2px",
    s: "4px",
    m: "8px",
    l: "16px",
    xl: "40px",
  },
  border_radius: {
    s: "2px",
    m: "4px",
    l: "8px",
  },
  gap: {
    m: "8px",
    l: "16px",
    xl: "24px",
    xxl: "32px",
  },
};

export type ThemeType = typeof theme;
