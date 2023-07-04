import { useColorMode } from "theme-ui";
import { gql, useQuery } from "@apollo/client";
import Text from "../library/Text";
import Button from "@/library/Button";
import { useRouter } from "next/router";
import { buttonComponent } from "@/interfaces/sectionTypes";
import Loading from "@/library/Loading";
import { getPages } from "@/interfaces/graphql/Query";
import Flex from "@/library/Flex";
import Image from "@/library/Image";

const NotFound = () => {
  const { data, loading, error } = useQuery(getPages);
  const router = useRouter();
  const [mode] = useColorMode();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    console.error(error.graphQLErrors);
    return null;
  }

  let notfound = data?.notfound.data.attributes;
  console.log(data);

  return (
    <Flex
      sx={{
        background: "notFound.notFoundBgr",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "6rem",
          /*  width: "auto", */
          /*      "@media screen and (max-width: 645px)": {
            marginLeft: "2rem",
            marginRight: "2rem",
          }, */
        }}
      >
        <Image
          sx={{ width: ["300px", "600px"] }}
          src={
            mode === "dark"
              ? notfound?.image.data.attributes.url
              : notfound?.imageLight.data.attributes.url
          }
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
          }}
        >
          {notfound?.warningHeader}
        </Text>
        <Text
          variant="Body1"
          sx={{
            color: "text",
            width: "29rem",
            textAlign: "center",
            marginTop: "1rem",
          }}
        >
          {notfound?.warningInfo}
        </Text>
      </Flex>
      <Flex
        sx={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
          marginBottom: "5rem",
          gap: "1rem",
          /*    "@media screen and (max-width: 700px)": {
            flexDirection: "column",
          }, */
        }}
      >
        {notfound?.button ? (
          <Flex
            sx={{
              gap: "1rem",
              /*    "@media screen and (max-width: 700px)": {
                flexDirection: "column",
              }, */
            }}
          >
            {notfound.button.map((button: buttonComponent, i: number) => {
              return (
                <Button
                  key={i}
                  variant={button.variant}
                  size={button.size}
                  color={button.color}
                  onClick={() => {
                    router.push(button.destination ?? "/");
                  }}
                >
                  {button.text}
                </Button>
              );
            })}
          </Flex>
        ) : (
          <></>
        )}
      </Flex>
    </Flex>
  );
};

export default NotFound;
