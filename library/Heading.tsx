import { Heading as HeadingThemeUi } from "theme-ui";
import { HeadingProps as HeadingPropsThemeUi } from "theme-ui";

export interface HeadingProps extends HeadingPropsThemeUi {
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "neucha" | "quicksand";
}

const Heading = (props: HeadingProps) => (
  <HeadingThemeUi
    {...props}
    variant={`heading.${props.size}.${props.variant}`}
  ></HeadingThemeUi>
);

export default Heading;
