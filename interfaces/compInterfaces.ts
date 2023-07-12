import {
  buttonVariant,
  buttonColors,
  buttonSize,
  textVariants,
  textProp,
  imageProp,
} from "./types";

/* Navigation */
export interface NavProps {
  children: React.ReactNode;
}
export interface LinkProps {
  children: React.ReactNode;
  href: string;
}
export interface NavbarProps {
  children: React.ReactNode;
}
export interface BrandProps {
  href?: string;
  logoDesktopLight?: string;
  logoDesktopDark?: string;
  logoMobileLight?: string;
  logoMobileDark?: string;
  imgAltText?: string;
  children?: React.ReactNode;
}
export interface CollapseProps {
  children: React.ReactNode;
}

/* Form Field */
export interface FormFieldProp {
  component: {
    formTitle?: textProp;
    formSubhead?: textProp;
    formSubheadTwo?: textProp;
    formParagraph?: textProp;
    formSelect?: any;
    formLayout?: string;
    formSubmit?: any;
    formImage?: { image?: imageProp };
    formTextArea?: Array<object>;
    formField?: any;
  };
}
/* Form Data */
export interface FormData {
  [item: string]: any;
}
/* List Section */
export interface ListSectionProp {
  component?: {
    listTitle?: textProp;
    listSubhead?: textProp;
    listSubheadTwo?: textProp;
    listBody?: textProp;
    listItem?: Array<object>;
  };
  item?: {
    listTitle: string;
    listparagraph: string;
    listImage: { data: { attributes: { url: string | undefined } } };
  };
}
/* Title Links */
export interface TitleLinksProp {
  component: {
    gallery?: Array<object>;
    galleryTitle?: string;
    itemPostition?: string;
    itemBackground?: boolean;
    itemsLayout?: string;
    galleryBG?: {
      lightBackground?: imageProp;
      darkBackground?: imageProp;
    };
  };
  imgSrc?: {
    galleryImg?: imageProp;
  };
}
/* Text Banner */
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
/* Text Section */
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
/* Hero Banner */
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

/* Testimonials V2 */
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
/* Testimonials V1 */
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
