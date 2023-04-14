const grids = {
  default: {
    width: [350, 600, 1200],
    gap: "30px",
    margin: "16px",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridTemplateRows: "auto",
    "div:nth-of-type(1)": {
      width: ["3.75em", "4.375em", "65%"],
      height: "64px",
      gridColumn: [1 / 3, 1 / 3, 1 / 3],
      background: "#000",
    },
    "div:nth-of-type(2)": {
      "@media (max-width: 601px)": {},
      width: ["3.75em", "30em", "170%"],
      height: "64px",
      gridColumn: "3/5",
      justifySelf: "end",
      bg: "#3333",
    },
    "div:nth-of-type(3)": {
      height: "64px",
      gridColumn: "1/5",
      bg: "#3333",
    },
    "div:nth-of-type(4)": {
      height: "64px",
      gridColumn: "1/3",
      bg: "#3333",
    },
    "div:nth-of-type(5)": {
      height: "64px",
      gridColumn: "3/5",
      bg: "#3333",
    },
    "div:nth-of-type(6)": {
      height: "64px",
      gridColumn: "1/5",
      bg: "#3333",
    },
    "div:nth-of-type(7)": {
      "@media (min-width: 830px)": {
        height: "335px",
        gridColumn: "1/3",
        bg: "#3333",
        gridRow: "5 / 7",
      },
      height: "335px",
      gridColumn: "1/5",
      bg: "#3333",
      gridRow: "5 / 7",
    },
    "div:nth-of-type(8)": {
      "@media (min-width: 830px)": {
        display: "flex",
        height: "335px",
        gridColumn: "3/5",
        bg: "#3333",
      },
      display: "none",
      height: "64px",
      gridColumn: "1/3",
      bg: "#3333",
    },
    "div:nth-of-type(9)": {
      "@media (min-width: 830px)": {
        gridColumn: "1/5",
        bg: "#3333",
      },
      height: "64px",
      gridColumn: "1/3",
      bg: "#3333",
    },
    "div:nth-of-type(10)": {
      "@media (min-width: 830px)": {
        display: "none",
      },
      height: "64px",
      gridColumn: "3/5",
      bg: "#3333",
    },

    "div:nth-of-type(11)": {
      "@media (min-width: 830px)": {
        gridColumn: "1/2",
      },
      height: "64px",
      gridColumn: "1/5",
      bg: "#3333",
    },
    "div:nth-of-type(12)": {
      "@media (min-width: 830px)": {
        gridColumn: "2/3",
        display: "flex",
      },
      height: "64px",
      gridColumn: "1/5",
      bg: "#3333",

      display: "none",
    },
    "div:nth-of-type(13)": {
      "@media (min-width: 830px)": {
        gridColumn: "3/4",
        display: "flex",
      },
      display: "none",
      height: "64px",
      gridColumn: "1/5",
      bg: "#3333",
    },
    "div:nth-of-type(14)": {
      "@media (min-width: 830px)": {
        display: "flex",
        gridColumn: "4/5",
      },
      display: "none",
      height: "64px",
      gridColumn: "1/5",
      bg: "#3333",
    },
  },
  gallery: {
    width: "100%",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
    gridTemplateRows: "auto",
    overflow: "hidden",
    gap: 0,
    "@media (max-width: 1640px)": {
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
    },
    "@media (max-width: 890px)": {
      gridTemplateColumns: "1fr",
    },
    "img:nth-of-type(1)": {
      gridColumn: "1/4",
      "@media (max-width: 1640px)": {
        width: "100%",
        gridColumn: "1/5",
      },
      "@media (max-width: 890px)": {
        gridColumn: "1",
      },
    },
    "img:nth-of-type(2)": {
      gridColumn: "4/7",
      "@media (max-width: 1640px)": {
        gridColumn: "1/3",
      },
      "@media (max-width: 890px)": {
        gridColumn: "1",
      },
    },
    "img:nth-of-type(3)": {
      height: "100%",
      gridColumn: "1/3",
      "@media (max-width: 1640px)": {
        gridColumn: "3/5",
      },
      "@media (max-width: 890px)": {
        gridColumn: "1",
      },
    },
    "img:nth-of-type(4)": {
      height: "100%",
      gridColumn: "3/5",
      "@media (max-width: 1640px)": {
        gridColumn: "1/3",
      },
      "@media (max-width: 890px)": {
        gridColumn: "1",
      },
    },
    "img:nth-of-type(5)": {
      height: "100%",
      gridColumn: "5/7",
      "@media (max-width: 1640px)": {
        gridColumn: "3/5",
      },
      "@media (max-width: 890px)": {
        gridColumn: "1",
      },
    },
  },
  two: {
    display: "grid",
    width: "100%",
    height: "50%",
    borderBottom: "1px solid",
    borderColor: "black",
    gap: 0,
    color: "otherColors.darkGreyShades.1",
    span: {
      margin: "10px",
    },
    a: {
      color: "otherColors.darkGreyShades.1",
      margin: "5px",
    },
    gridTemplateColumns: "1fr 1fr",
    "@media (max-width: 1640px)": {
      gridTemplateColumns: "1fr",
    },
    "div:ntn-of-type(1)": {
      "@media (max-width: 1640px)": {
        width: "100%",
        height: "80%",
        gridColumn: "1",
        background: "background",
        color: "otherColors.darkGreyShades.1",
      },
    },
    img: {
      width: "100%",
      height: "100%",
      "@media (max-width: 1640px)": {
        gridColumn: "1",
      },
    },
  },
  cards: {
    width: "100%",
    backgroundColor: "white",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    div: {
      alignSelf: "center",
      justifySelf: "center",
    },
    "@media (max-width: 1640px)": {
      gridTemplateColumns: "1fr 1fr",
    },
    "@media (max-width: 890px)": {
      gridTemplateColumns: "1fr",
    },
  },
  centered: {
    placeContent: "center",
    overflow: "hidden",
  },
  content: {
    // Add media query for mobile version, maybe add max/min-width, strapi hold width for image and such?
    main: {
      right: {
        gridTemplateAreas: `"h i" 
                          "sh i"
                          "b i"`,
        "@media screen and (max-width: 40em)": {
          gridTemplateAreas: `"i"
                          "h"
                          "sh"
                          "b"`,
        },
      },
      left: {
        gridTemplateAreas: `"i h"
                          "i sh" 
                          "i b"`,
      },
      top: {
        gridTemplateAreas: `"i"
                          "h"
                          "sh"
                          "b"`,
      },
      bottom: {
        gridTemplateAreas: `"h"
                          "sh" 
                          "b"
                          "i"`,
      },
    },
    contact: {},
    services: {
      gridTemplateAreas: `"h h"
                          "b b"
                          "b b"`,
      placeContent: "space-evenly",
      backgroundColor: "services.background",
      minWidth: "1440px",
    },
    service: {
      gridTemplateAreas: `"m"
                          "s"`,
    },
    section: {
      right: {
        top: {
          gridTemplateAreas: `"img"
                              "left"`,
          width: "100%",
          gridGap: 0,
          "@media screen and (min-width: 40em)": {
            gridTemplateAreas: `"left img"`,
            gridTemplateColumns: "50% 50%",
            maxWidth: "1440px",
            height: "660px",
          },
        },
        bottom: {
          gridTemplateAreas: `"left"
                              "img"`,
          width: "100%",
          gridGap: 0,
          "@media screen and (min-width: 40em)": {
            gridTemplateAreas: `"left img"`,
            gridTemplateColumns: "50% 50%",
            width: "1440px",
            height: "660px",
          },
        },
      },
      left: {
        top: {
          gridTemplateAreas: `"img"
          "left"`,
          width: "100%",
          gridGap: 0,
          "@media screen and (min-width: 40em)": {
            gridTemplateAreas: `"img left"`,
            gridTemplateColumns: "50% 50%",
            maxWidth: "1440px",
            height: "660px",
          },
        },
        bottom: {
          gridTemplateAreas: `"left"
          "img"`,
          width: "100%",
          gridGap: 0,
          "@media screen and (min-width: 40em)": {
            gridTemplateAreas: `"img left"`,
            gridTemplateColumns: "50% 50%",
            width: "1440px",
            height: "660px",
          },
        },
      },
    },
  },
};
export default grids;
