import {Theme} from "theme-ui";

const modal = {
  large: {
    /*  breakpoints: ["360px", "600px", "1440px"], */
    width: ["400px", "450px", "650px"],
    borderRadius: "corner",
    boxShadow: "modal",
    background: "white",
    header: {
      margin: 3,
      fontSize: [1, 2, 3],
    },
    main: {
      margin: 3,
    },
    footer: {
      margin: 3,
      display: "flex",
      justifyContent: "end",
    },
  },
  medium: {
    variant: "modal.large",
    width: ["400px", "450px"],
  },
  small: {
    variant: "modal.large",
    width: "400px",
  },
};

export default modal;
