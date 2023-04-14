import {Theme} from "theme-ui";

const tooltip: Theme["buttons"] = {
  primary: {
    backgroundColor: "primary.0",
    px: 3,
    py: 2,
    zIndex: 5,
    borderRadius: 5,
    maxWidth: "10rem",
    maxHeight: "10rem",
    color: "white",
    overflow: "visible",
    "::After": {
      content: '" "',
      position: "absolute",
      borderStyle: "solid",
      borderWidth: "5px",
      borderColor: "transparent",
    },
  },
  top: {
    primary: {
      variant: "tooltip.primary",
    },
    arrow: {
      variant: "tooltip.primary",
      "::after": {
        top: "100%",
        left: "50%",
        marginLeft: "-5px",
        borderTopColor: "primary.0",
      },
    },
  },
  bottom: {
    primary: {
      variant: "tooltip.primary",
    },
    arrow: {
      variant: "tooltip.primary",
      "::after": {
        bottom: "100%",
        left: "50%",
        marginLeft: "-5px",
        borderBottomColor: "primary.0",
      },
    },
  },
  right: {
    primary: {
      variant: "tooltip.primary",
    },
    arrow: {
      variant: "tooltip.primary",
      "::after": {
        right: "100%",
        top: "50%",
        marginTop: "-5px",
        borderRightColor: "primary.0",
      },
    },
  },
  left: {
    primary: {
      variant: "tooltip.primary",
    },
    arrow: {
      variant: "tooltip.primary",
      "::after": {
        top: "50%",
        left: "100%",
        marginTop: "-5px",
        borderLeftColor: "primary.0",
      },
    },
  },
  // dark: {
  //   primary: {
  //     variant: "tooltip.primary",
  //   },
  //   arrow: {
  //     variant: "tooltip.arrow",
  //   },
  // },
};

export default tooltip;
