import { Theme } from "theme-ui";

const colors: Theme["colors"] = {
  text: "#2B303A",
  buttonText: "#EDF0F7",
  background: "white",
  neutral: [
    "#5B5F70",
    "#4F5462",
    "#4D5160",
    "#3A3E48",
    "#373944",
    "#2B303A",
    "#1F2228",
    "#121418",
  ],
  primary: ["#6044B5", "#4D3691", "#43307F", "#3A296D", "#271C4A"],
  secondary: ["#019393", "#018383", "#006666", "#005252", "#003D3D"],
  success: ["#5A9D39", "#1EA338", "#17802D", "#0E7248", "#164B21"],
  error: ["#ED0C12", "#DD0915", "#BC0B11", "#A3040C", "#460205"],
  warning: ["#F68F0E", "#E07D00", "#CC7100", "#B86600", "#5C3C14"],
  notification: ["#3183C8", "#2769A0", "#1D4F78", "#194264", "#0F2B43"],
  information: ["#6B798A", "#5F6B7A", "#555B68", "#414244", "#28282A"],
  services: {
    bordershadow: "#CACFD9",
    serviceBackground: "#EDF0F7",
    background: "#F1F3F9",
    invert: "#1F2228",
  },
  button: {
    error: "#C12945",
    errorDisabled: "#E094A2",
    positive: "#26962B",
    positiveDisabled: "#93CB95",
  },
  otherColors: {
    redShades: ["#F03738", "#FFC5C5"],
    greenShades: ["#26962B", "#B4E7B4"],
    orangeShades: ["#CC9428", "#FCE2B0"],
    blueShades: ["#3C6DA6", "#D4E1F2"],
    darkGreyShades: ["#5F5F5F", "#CECFD0"],
  },
  shadow: {
    default: "#00000040",
    field: "#4C3A8040",
  },
  footer: {
    footerBackground: "#E2DEF2"
  },
  notFound: {
    notFoundBgr: "#EDF0F7"
  },
  border: {},
  modes: {
    dark: {
      text: "#EDF0F7",
      buttonText: "#EDF0F7",
      background: "black",
      neutral: [
        "#AEB6C5",
        "#CACFD9",
        "#D3D7DF",
        "#DADEE5",
        "#E1E6EF",
        "#EDF0F7",
        "#F1F3F9",
        "#F8F9FC",
      ],
      primary: ["#9E8BEB", "#AB9BEE", "#B6A8F0", "#D2C9F8", "#E2DEF2"],
      secondary: ["#42CDC1", "#67CEC5", "#97DED8", "#BDEAE6", "#E3F6F4"],
      success: ["#1DE76E", "#75F0A6", "#9EF4C1", "#B6F7D0", "#CDF9DF"],
      error: ["#FF464A", "#FF6B6E", "#FF8587", "#FF9EA0", "#FFC2C3"],
      warning: ["#FFB65C", "#FFC375", "#FFCC8A", "#FBDEA7", "#FDEDCE"],
      notification: ["#64B8FF", "#84C1F5", "#9ACCF4", "#B0DAFC", "#D1EAFF"],
      information: ["#8E9FB4", "#AAB7C6", "#B6C1CE", "#C8D0DA", "#DBE0E7"],
      services: {
        bordershadow: "#161719",
        serviceBackground: "#2B303A",
        background: "#1F2228",
        invert: "#F1F3F9",
      },
      button: {
        error: "#C12945",
        errorDisabled: "#9A4454",
        positive: "#26962B",
        positiveDisabled: "#93CB95",
      },
      otherColors: {
        redShades: ["#F03738", "#A14C56"],
        greenShades: ["#3CC13B", "#37853D"],
        orangeShades: ["#FFC34E", "#AC8649"],
        blueShades: ["#B2C3FF", "#7E86B3"],
        darkGreyShades: ["#A8A1B8", "#5B596D"],
      },
      shadow: {
        default: "#00000040",
        field: "#00000040",
      },
      footer: {
        footerBackground: "#271C4A"
      },
      notFound: {
        notFoundBgr: "#2B303A"
      },
      link: {
        test: "#FFF",
      },
    },
  },
};

export default colors;
