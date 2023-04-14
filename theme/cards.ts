import {Theme} from "theme-ui";

const cards: Theme["cards"] = {
  primary: {
    width: "353px",
    height: "642px",
    display: "flex",
    flexDirection: "column",
    gap: 3,
    backgroundColor: "neutral.0",
    textAlign: "left",
    boxShadow: "card",
    borderRadius: "20px",
    margin: 10,
    color: "neutral.7",
    img: {
      width: "353px",
      height: "316px",
      borderRadius: "20px 20px 0px 0px",
      margin: 0,
      padding: 0,
    },
    span: {
      marginLeft: 8,
    },
    h2: {
      marginLeft: 8,
      fontWeight: 700,
    },
    p: {
      width: "300px",
      marginLeft: 8,
      marginBottom: 2,
      lineHeight: "26.4px",
    },

    button: {
      marginLeft: 8,
    },
  },

  expandable: {
    variant: "cards.primary",
    height: "",
    padding: 0,
    "div.arrowDown": {
      width: "25px",
      height: "20px",
      background: "card.arrowDown",
      marginTop: 0,
      marginRight: 12,
    },
    "div.arrowUp": {
      width: "25px",
      height: "30px",
      background: "card.arrowUp",
      position: "absolute",
      top: 0,
      marginTop: 0,
    },
    ".toggle": {
      width: "70px",
      position: "relative",
      alignSelf: "center",
    },
    ".hide": {
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
      maxWidth: "280px",
    },
    ".bodyText": {
      width: "450px",
    },
    ".footerCard": {
      width: "300px",
      display: "grid",
      gridTemplateColumns: "0.01fr 1fr",
      gridTemplateRows: "1fr 1fr",
      alignItems: "center",

      margin: 8,
      "p:nth-of-type(1)": {
        gridRow: 1,
      },
      "p:nth-of-type(2)": {
        gridRow: 2,
      },
      "svg:nth-of-type(1)": {
        gridRow: 1,
      },
      "svg:nth-of-type(2)": {
        gridRow: 2,
        marginTop: 3,
        marginLeft: 1,
      },
      "svg > path": {
        fill: "card.icon",
      },
    },
  },

  onlyText: {
    variant: "cards.primary",
    height: "",
    paddingBottom: 8,
    paddingTop: 8,
    img: {
      display: "none",
    },
  },
  p: {
    width: "300px",
  },
  noImg: {
    variant: "cards.onlyText",
  },
};

export default cards;
