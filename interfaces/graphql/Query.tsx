import { gql } from "@apollo/client";
const getPages = gql`
  query GetAllData {
    notfound {
      data {
        attributes {
          warningHeader
          warningInfo
          image {
            data {
              attributes {
                url
              }
            }
          }
          imageLight {
            data {
              attributes {
                url
              }
            }
          }
          button {
            text
            color
            size
            variant
          }
        }
      }
    }
    footer {
      data {
        attributes {
          email
          adress
          location
          number
          twitter {
            data {
              attributes {
                url
              }
            }
          }
          instagram {
            data {
              attributes {
                url
              }
            }
          }
          linkedin {
            data {
              attributes {
                url
              }
            }
          }
          instaDark {
            data {
              attributes {
                url
              }
            }
          }
          twitterDark {
            data {
              attributes {
                url
              }
            }
          }
          linkedinDark {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
    navigation {
      data {
        attributes {
          logo {
            link
            logoDesktopLight {
              data {
                attributes {
                  url
                }
              }
            }
            logoMobileLight {
              data {
                attributes {
                  url
                }
              }
            }
            logoDesktopDark {
              data {
                attributes {
                  url
                }
              }
            }
            logoMobileDark {
              data {
                attributes {
                  url
                }
              }
            }
          }
          navbar {
            __typename
            ... on ComponentComponentLink {
              label
              href
            }
            ... on ComponentComponentDropDown {
              labeldropdown
              link {
                label
                href
              }
            }
          }
        }
      }
    }
    pages {
      data {
        attributes {
          pagename
          comps {
            __typename
            ... on ComponentBlocksFormField {
              formLayout
              formSubheadTwo {
                body
                position
                variant
              }
              formRadio {
                __typename
                radioLabel
                radioName
                radioValue
                defaultChecked
                radioTitle
              }
              formCheckbox {
                __typename
                checkboxLabel
                checkboxName
                checkDefault
                checkboxTitle
              }
              formTextArea {
                __typename
                textAreaName
                textAreaPlaceholder
                textAreaRows
                textAreaMb
                textAreaLabel
                textAreaHtml
              }
              formSelect {
                __typename
                selectOption
                selectDefault
                selectTitle
              }
              formSubmit {
                text
                color
                size
                variant
                destination
              }
              formTitle {
                body
                position
                variant
              }
              formSubhead {
                body
                position
                variant
              }
              formParagraph {
                body
                position
                variant
              }
              formImage {
                width
                height
                imagesPosition
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
              formField {
                __typename
                fieldLabel
                fieldName
                fieldLabelHtml
                fieldPlaceholder
                fieldMb
                fieldType
                formIconLight {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                formIconDark {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
            ... on ComponentBlocksFeatures {
              cards {
                variant
                size
                header
                body
                img {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
            ... on ComponentBlocksSection {
              text {
                body
                position
                variant
              }
              objectFit
              imgPosition
              mobileImgPosition
              gap
              img {
                data {
                  attributes {
                    url
                  }
                }
              }
              backgroundImg {
                data {
                  attributes {
                    url
                  }
                }
              }
              darkBackgroundImg {
                data {
                  attributes {
                    url
                  }
                }
              }
              buttons {
                text
                color
                size
                variant
                destination
              }
            }
            ... on ComponentBlocksTextHeader {
              bgTextSection {
                lightBackground {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                darkBackground {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
              titleTextSection {
                body
                position
                variant
              }
              paragraphTextSection {
                body
                position
                variant
              }
              imgTextSection {
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                mobileImage {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                imagesPosition
                height
                width
                altText
              }
            }
            ... on ComponentBlocksHeroBanner {
              layoutHeroBanner
              gradientHeroBanner
              titleHeroBanner {
                body
                position
                variant
              }
              paragraphHeroBanner {
                body
                position
                variant
              }
              titleHeroBanner {
                body
                position
                variant
              }
              buttonHeroBanner {
                text
                color
                size
                variant
                destination
              }
              imgHeroBanner {
                mobileImage {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                altText
                width
                height
                imagesPosition
              }
              bgHeroBanner {
                lightBackground {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                darkBackground {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
            ... on ComponentBlocksBanner {
              gradientTextBanner
              imgTextBanner {
                mobileImage {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                width
                height
                imagesPosition
                altText
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
              titleTextBanner {
                body
                position
                variant
              }
              bgTextBanner {
                darkBackground {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                lightBackground {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
            ... on ComponentBlocksTestimonialCompV1 {
              subheadV1 {
                body
                position
                variant
              }
              titleV1 {
                body
                position
                variant
              }
              paragraphV1 {
                body
                position
                variant
              }
              imgV1 {
                width
                height
                imagesPosition
                altText
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
            ... on ComponentBlocksTestimonialV2 {
              quote
              titleV2 {
                body
                position
                variant
              }
              paragraphV2 {
                body
                position
                variant
              }
              imgV2 {
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                height
                imagesPosition
                width
                altText
              }
            }
          }
        }
      }
    }
  }
`;
export { getPages };
