import {Theme} from "theme-ui";

const buttons: Theme["buttons"] = {
  primary: {
    fontFamily: "1",
    fontWeight: "3",
    lineHeight: 1,
    cursor: "pointer",
    borderRadius: "8px",
    border: `solid 2px`,
    color: "buttonText",
    margin: 0,
    padding: 0,
    "&:hover": {},
    "&:disabled": {},
    "&:focus": {},
  },
  default: {
    variant: "buttons.primary",
    "@media screen and (max-width: 430px)": {
      maxWidth: "400px",
    },
  },
  outlined: {
    variant: "buttons.primary",
    "@media screen and (max-width: 430px)": {
      maxWidth: "400px",
    },
  },
  text: {
    variant: "buttons.primary",
    "@media screen and (max-width: 430px)": {
      maxWidth: "400px",
    },
  },
};
export default buttons;
