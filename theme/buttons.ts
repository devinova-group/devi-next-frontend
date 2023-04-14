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
    margin: 2,
    padding: 0,
    "&:hover": {},
    "&:disabled": {},
    "&:focus": {},
  },
  default: {
    variant: "buttons.primary",
  },
  outlined: {
    variant: "buttons.primary",
  },
  text: {
    variant: "buttons.primary",
  },
};
export default buttons;
