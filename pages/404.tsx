import { useColorMode } from "theme-ui";
import { useRouter } from "next/router";
/* Library */
import Text from "../library/Text";
import Button from "@/library/Button";
import Flex from "@/library/Flex";
import Image from "@/library/Image";
import Box from "@/library/Box";
/* Img */
import homeLight from "../assets/404/homeWhite.png";
import homeDark from "../assets/404/HomeDark.png";
import arrowLight from "../assets/404/arrowWhite.png";
import arrowDark from "../assets/404/arrowDark.png";
import ImgDark from "../assets/404/404-dark.png";
import ImgLight from "../assets/404/404-light.png";

const NotFound = () => {
  const router = useRouter();
  const [mode] = useColorMode();

  return (
    <Flex
      sx={{
        background: "notFound.notFoundBgr",
        width: "100%",
        height: "70vh",
        flexDirection: "column",
      }}
    >
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "6rem",
        }}
      >
        <Image
          sx={{ width: ["350px", "600px"] }}
          src={mode === "dark" ? ImgLight.src : ImgDark.src}
          alt="404"
        />
      </Flex>
      <Flex
        sx={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "3rem",
          flexDirection: "column",
        }}
      >
        <Text
          variant="H4"
          sx={{
            color: "text",
            width: ["350px", "803px"],
          }}
        >
          It looks like something went wrong.
        </Text>
        <Text
          variant="Body1"
          sx={{
            color: "text",
            width: ["260px", "620px"],
            textAlign: ["left", "center"],
            marginTop: "2rem",
          }}
        >
          Don’t worry, you’re not going anywhere. We apologize for the
          inconvenience and are working to resolve the issue as soon as
          possible. In the meantime, please stay on this page and try again
          later. Thank you for your patience and understanding.
        </Text>
      </Flex>
      <Flex
        sx={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
          marginBottom: "5rem",
          gap: "1rem",
        }}
      >
        <Flex
          sx={{
            flexDirection: ["column", "row"],
            gap: "1rem",
          }}
        >
          <Button
            size="large"
            variant="outlined"
            color="primary"
            onClick={() => router.back()}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Previous Page
              <Image
                paddingLeft="10px"
                width="25px"
                src={mode === "light" ? arrowLight.src : arrowDark.src}
                alt="Arrow icon"
              />
            </Box>
          </Button>
          <Button
            size="large"
            variant="default"
            color="primary"
            onClick={() => {
              router.push("/");
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Go To Home
              <Image
                paddingLeft="10px"
                width="33px"
                src={mode === "light" ? homeLight.src : homeDark.src}
                alt="Home icon"
              />
            </Box>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NotFound;
