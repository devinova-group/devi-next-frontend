import { buttonVariant, buttonColors, buttonSize, textVariants } from "./types";

type imageProp = {
  data: { attributes: { url: string | undefined | null } };
};
export interface TestimonialsV2Props {
  component: {
    __typename: string;
    quote: boolean;
    titleV2: {
      body: string;
      position: "center" | "end" | "start";
      variant: string;
    };

    paragraphV2: {
      body: string;
      position: "center" | "end" | "start";
      variant: string;
    };
    imgV2: {
      width: string;
      height: string;
      imagesPosition: string;
      altText: string;
      mobileImage: imageProp;
      image: imageProp;
    };
  };
}
export interface TestimonialsV1Props {
  component: {
    __typename: string;
    titleV1: {
      body: string;
      position: "center" | "end" | "start";
      variant: string;
    };
    subheadV1: {
      body: string;
      position: "center" | "end" | "start";
      variant: string;
    };
    paragraphV1: {
      body: string;
      position: "center" | "end" | "start";
      variant: string;
    };
    imgV1: {
      width: string;
      height: string;
      imagesPosition: string;
      altText: string;
      mobileImage: imageProp;
      image: imageProp;
    };
  };
}
export interface TextBannerProps {
  component: {
    __typename: string;
    gradientTextBanner: string;
    imgTextBanner: {
      width: string;
      height: string;
      imagesPosition: string;
      altText: string;
      image: imageProp;
      mobileImage: imageProp;
    };
    titleTextBanner: {
      body: string;
      position: "center" | "end" | "start";
      variant: string;
    };
  };
}
export interface TextSectionProps {
  component: {
    __typename: string;
    titleTextSection: {
      body: string;
      position: "center" | "end" | "start";
      variant: string;
    };
    paragraphTextSection: {
      body: string;
      position: "center" | "end" | "start";
      variant: string;
    };
    imgTextSection: {
      width: string;
      height: string;
      imagesPosition: string;
      altText: string;
      mobileImage: imageProp;
      image: imageProp;
    };
    bgTextSection: {
      lightBackground: imageProp;
      darkBackground: imageProp;
    };
  };
}

export interface HeroBannerProps {
  component: {
    __typename: string;
    titleHeroBanner: {
      body: string;
      position: "center" | "end" | "start";
      variant: textVariants;
    };
    paragraphHeroBanner: {
      body: string;
      position: "center" | "end" | "start";
      variant: string;
    };
    imgHeroBanner: {
      width: string;
      height: string;
      imagesPosition: string;
      altText: string;
      mobileImage: imageProp;
      image: imageProp;
    };
    buttonHeroBanner: {
      text: string;
      variant: buttonVariant;
      color: buttonColors;
      size: buttonSize;
      destination: string;
    };
    layoutHeroBanner: string;
    gradientHeroBanner: boolean;
    bgHeroBanner: {
      lightBackground: imageProp;
      darkBackground: imageProp;
    };
  };
}
