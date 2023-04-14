const box = {
  header: {
    height: "4rem",
    display: "flex",
    justifyContent: "space-between",
  },
  footer: {
    height: "15rem",
  },
  content: {
    servicetitleimage: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "29px 13px",
      gap: "32px",
      background: "services.serviceBackground",
      boxShadow: "0px 6px 5px var(--theme-ui-colors-services-bordershadow)",
      borderRadius: "11px",
      height: "348px",
    },
    service: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: "0px",
      gap: "36px",
      width: "413px",
      height: "546px",
    },
  },
  section: {
    imgContainer: {
      maxWidth: "50%",
    },
  },
};

export default box;
