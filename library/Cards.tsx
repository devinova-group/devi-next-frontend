import {Card as ThemeUiCard} from "theme-ui";

interface CardProps {
  variant?: "default" | "expandable";
  size?: "large" | "small";
  children?: React.ReactNode;
}

const Card = ({children, variant, size}: CardProps) => {
  let cardSize = {};
  switch (size) {
    case "large":
      cardSize = {height: 350, width: 415};
      break;

    case "small":
      cardSize = {height: 250, width: 315};
      break;

    default:
      cardSize = {height: 350, width: 415};
      break;
  }

  let card = {
    gap: "32px",
    padding: "32px",
    background: "services.serviceBackground",
    boxShadow: "0px 6px 21px var(--theme-ui-colors-services-bordershadow)",
    borderRadius: "12px",
  };

  let cardStyling = {
    ...cardSize,
    ...card,
  };
  return (
    <ThemeUiCard variant={`${variant ?? "default"}`} sx={cardStyling}>
      {children}
    </ThemeUiCard>
  );
};

export default Card;
