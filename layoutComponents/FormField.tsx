import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useColorMode } from "theme-ui";
import Box from "@/library/Box";
import { FormData, FormFieldProp } from "@/interfaces/compInterfaces";
import Label from "@/library/Label";
import Textarea from "@/library/Textarea";
import Input from "@/library/Input";
import ImageSection from "./FormField/ImageSection";
import Flex from "@/library/Flex";
import Text from "@/library/Text";
import Button from "@/library/Button";
import Select from "@/library/Select";

function FormField({ component }: FormFieldProp) {
  const resetForm = document?.getElementById("formField") as HTMLFormElement;
  const selectTitle = component?.formSelect[0]?.selectTitle;
  const layout = component?.formLayout;
  const subHeadTwo = component?.formSubheadTwo;
  const button = component?.formSubmit;

  const [formData, getFormData] = useState<FormData>({});
  console.log(formData);
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          resetForm?.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const textArea = component?.formTextArea?.map((item: any, i: number) => (
    <Box
      key={i}
      sx={{
        textarea: {
          width: ["260px", "500px"],
          height: "100px",
          color: "text",
          fontFamily: "0",
          fontWeight: "1",
          fontSize: 1,
          lineHeight: 0,
          padding: "20px",
        },
      }}
    >
      <Label variant="default" htmlFor={item.textAreaHtml}>
        {item.textAreaLabel}
      </Label>
      <Textarea
        name={item.textAreaName}
        placeholder={item.textAreaPlaceholder}
        rows={item.textAreaRows}
        mb={item.textAreaMb}
        onChange={(e: any) =>
          getFormData({ ...formData, [item.textAreaName]: e.target.value })
        }
      />
    </Box>
  ));

  const select = component?.formSelect?.map((item: any, i: number) => (
    <option
      style={{
        fontFamily: "inherit",
        fontSize: "inherit",
        fontWeight: "inherit",
        lineHeight: "inherit",
        color: "inherit",
      }}
      key={i}
      value={item.selectOption}
      onClick={(e: any) =>
        getFormData({ ...formData, [selectTitle]: e.target.value })
      }
    >
      {item.selectOption}
    </option>
  ));

  const field = component?.formField.map((item: any, i: number) => {
    const [colorMode] = useColorMode();
    const mode =
      colorMode === "light"
        ? `url(${item?.formIconDark?.data?.attributes?.url})`
        : `url(${item?.formIconLight?.data?.attributes?.url})`;
    return (
      <Box key={i}>
        <Label variant="default" htmlFor={item.fieldLabelHtml}>
          {item.fieldLabel}
        </Label>

        <Box sx={{ width: ["260px", "500px"] }}>
          <Input
            variant="forms.input"
            name={item.fieldName}
            placeholder={item.fieldPlaceholder}
            mb={item.fieldMb}
            value={item.value}
            onChange={(e: any) =>
              getFormData({ ...formData, [item.fieldName]: e.target.value })
            }
            sx={{
              backgroundImage: mode,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "10px",
              padding: "0px 30px",
              backgroundSize: "12px",
            }}
          />
        </Box>
      </Box>
    );
  });
  const imageSection = <ImageSection component={component} />;

  return (
    <Flex
      sx={{
        width: "100%",
        padding: ["50px 0px", "100px 0px"],
        backgroundColor: "services.background",
        justifyContent: "center",
        alignItems: "center",
        gap: "5%",
        flexDirection: ["column", "row"],
      }}
    >
      {layout === "leftForm" && imageSection}
      <Flex sx={{ flexDirection: "column" }}>
        {subHeadTwo && (
          <Text
            variant={subHeadTwo.variant}
            sx={{
              fontFamily: "Quicksand",
              alignSelf: `${subHeadTwo.position}`,
            }}
          >
            {subHeadTwo.body}
          </Text>
        )}
        <Box
          sx={{
            width: ["260px", "500px"],

            input: {
              backgroundColor: "services.formColor",
              border: "none",
              boxShadow: "radio",
              height: "40px",
              color: "services.invert",
              fontFamily: "0",
              fontWeight: "1",
              fontSize: 1,
              lineHeight: 0,
            },
            textArea: {
              backgroundColor: "services.formColor",
              border: "none",
              boxShadow: "radio",
              color: "services.invert",
            },
            select: {
              backgroundColor: "services.formColor",
              border: "none",
              boxShadow: "radio",
              height: "40px",

              option: {
                color: "services.invert",
                fontFamily: "0",
                fontWeight: "1",
                fontSize: 1,
                lineHeight: 0,
              },
            },
            color: "services.invert",
          }}
        >
          <Box onSubmit={sendEmail} as="form" id="formField">
            {field && field}

            {selectTitle && <Label variant="default">{selectTitle}</Label>}
            {select && (
              <Box
                sx={{
                  svg: {
                    fill: "services.invert",
                  },
                }}
              >
                <Select
                  defaultValue={"default"}
                  name="service"
                  sx={{
                    color: "services.invert",
                    fontFamily: "0",
                    fontWeight: "1",
                    fontSize: 1,
                    lineHeight: 0,
                    padding: "0px 20px",
                  }}
                  mb={5}
                  mt={5}
                >
                  <option value={"default"} disabled>
                    Choose
                  </option>
                  {select}
                </Select>
              </Box>
            )}
            {textArea && textArea}
            {button && (
              <Button
                type="submit"
                disabled={!formData.Email}
                color={button.color}
                variant={button.variant}
                size={button.size}
                mb={5}
                mt={5}
              >
                {button.text}
              </Button>
            )}
          </Box>
        </Box>
      </Flex>
      {layout === "rightForm" && imageSection}
    </Flex>
  );
}
export default FormField;
