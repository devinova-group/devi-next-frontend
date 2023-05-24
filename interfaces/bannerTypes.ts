import {
  imagePosition,
  buttonVariant,
  buttonColors,
  buttonSize,
  textVariants,
} from "./types";

type imageProp = {
  data: { attributes: { url: string | undefined } };
};

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
    };
    layoutHeroBanner: string;
    gradientHeroBanner: boolean;
    bgHeroBanner: {
      lightBackground: imageProp;
      darkBackground: imageProp;
    };
  };
}
