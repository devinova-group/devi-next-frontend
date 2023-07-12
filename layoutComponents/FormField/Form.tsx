import Box from "@/library/Box";
import Button from "@/library/Button";
import Flex from "@/library/Flex";
import Label from "@/library/Label";
import Select from "@/library/Select";
import Text from "@/library/Text";
import React from "react";

function Form({
  field,
  selectTitle,
  select,
  formData,
  component,
  textArea,
}: any) {
  const button = component?.formSubmit;
  return (
    <Box>
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
    </Box>
  );
}

export default Form;
