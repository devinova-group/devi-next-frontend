import React, { useRef, useState } from "react";
/* import { Form, Formik, Field } from "formik"; */
import Text from "@/library/Text";
import emailjs from "@emailjs/browser";
import Flex from "@/library/Flex";
import Button from "@/library/Button";
import { Input, Label, Select, Slider, Textarea, useColorMode } from "theme-ui";
import Box from "@/library/Box";
import Image from "@/library/Image";
import Checkbox from "@/library/Checksbox";
import Radio from "@/library/Radio";
import Arrow from "../assets/arrowDown.svg";

function FormField({ component }: any) {
  const resetForm = document?.getElementById("formField");

  const title = component?.formTitle;
  const subHead = component?.formSubhead;
  const subHeadTwo = component?.formSubheadTwo;
  const paragraph = component?.formParagraph;
  const checkBoxTitle = component?.formCheckbox[0]?.checkboxTitle;
  const radioTitle = component?.formRadio[0]?.radioTitle;
  const selectTitle = component?.formSelect[0]?.selectTitle;
  const layout = component?.formLayout;
  const button = component?.formSubmit;
  const imageUrl = component.formImage?.image?.data?.attributes.url;

  interface FormData {
    [item: string]: any;
  }
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
  /*   console.log(formData); */
  const checkBox = component?.formCheckbox?.map((item: any, i: number) => (
    <Label key={i}>
      <Checkbox
        defaultChecked={item.checkDefault}
        name={item.checkboxName}
        value={item.checkboxName}
        onClick={(e: any) =>
          getFormData({ ...formData, [checkBoxTitle]: e.target.value })
        }
      />
      {item.checkboxLabel}
    </Label>
  ));

  const radio = component?.formRadio?.map((item: any, i: number) => (
    <Label key={i}>
      <Radio
        defaultChecked={item.defaultChecked}
        name={item.radioName}
        value={item.radioValue}
        onChange={(e: any) =>
          getFormData({
            ...formData,
            radioTitle: e.target.value,
          })
        }
      />
      {item.radioLabel}
    </Label>
  ));

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
        ? `url(${item.formIconDark.data.attributes.url})`
        : `url(${item.formIconLight.data.attributes.url})`;
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
  const imageSection = (
    <Flex
      sx={{
        width: ["260px", "500px"],
        flexDirection: "column",
        gap: "20px",
        color: "services.invert",
        alignItems: "center",
        /*  justifyContent: "center", */
      }}
    >
      {title && (
        <Text
          variant={title.variant}
          sx={{
            fontFamily: "Quicksand",
            alignSelf: `${title.position}`,
          }}
        >
          {title.body}
        </Text>
      )}
      {subHead && (
        <Text
          variant={subHead.variant}
          sx={{
            fontFamily: "Quicksand",
            alignSelf: `${subHead.position}`,
          }}
        >
          {subHead.body}
        </Text>
      )}
      {paragraph && (
        <Text
          variant={paragraph.variant}
          sx={{
            width: ["260px", "500px"],
            fontFamily: "Quicksand",
            alignSelf: `${paragraph.position}`,
          }}
        >
          {paragraph.body}
        </Text>
      )}
      {imageUrl && (
        <Box sx={{ width: ["260px", "500px"] }}>
          <Image src={imageUrl} />
        </Box>
      )}
    </Flex>
  );

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
          <Box
            onSubmit={sendEmail}
            as="form"
            id="formField"
            /*  onSubmit={sendEmail}  */
          >
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

            {radioTitle && <Label variant="default">{radioTitle}</Label>}
            {radio && radio}

            {checkBoxTitle && <Label variant="default">{checkBoxTitle}</Label>}
            {checkBox && checkBox}
            {textArea && textArea}
            {button && (
              <Button
                type="submit"
                /*   onSubmit={(e: any) => sendEmail(e, formData)} */
                disabled={!formData.email}
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

/* const form = useRef(); */
/*   console.log(component); */
/* const sendEmail = (e: any, form: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }; */
/*  const initialValues = {
    name: "",
    company: "",
    email: "",
    service: "",
    message: "",
  }; */

/* const contactSubmit = (values: any, { resetForm, setSubmitting }: any) => {
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      "form",
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    );

    setSubmitting(false);
    resetForm();
  }; */
