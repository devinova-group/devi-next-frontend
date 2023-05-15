import {Card as ThemeUiCard} from "theme-ui";

interface FeatureCardProps {
  variant?: "default" | "expandable";
  size?: "large" | "small";
  children?: React.ReactNode;
}

const FeatureCard = ({children, variant, size}: FeatureCardProps) => {
  let cardSize = {};
  switch (size) {
    case "large":
      cardSize = {height: 350, maxWidth: 415};
      break;

    case "small":
      cardSize = {height: 250, maxWidth: 315};
      break;

    default:
      cardSize = {height: 350, maxWidth: 415};
      break;
  }

  let card = {
    gap: 11,
    padding: 11,
    background: "services.serviceBackground",
    boxShadow: "0px 6px 21px var(--theme-ui-colors-services-bordershadow)",
    borderRadius: 12,
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

export default FeatureCard;
