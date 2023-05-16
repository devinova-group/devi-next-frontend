import React from "react";
import { BoxProps as TableThemeUI } from "theme-ui";
import { useSearch } from "../hooks/useSearch";
import useSortableData from "../hooks/useSortableData";
import Button from "./Button";
import Checkbox from "./Checksbox";
import Field from "./Field";
import Text from "./Text";
import Box from "./Box";
import Grid from "./Grid";
import Label from "./Label";
import Accordion from "./Accordion";
import useAccordion from "../hooks/useAccordion";

interface TableProps extends TableThemeUI {
  rows?: object[];
  columns?: object[];
  expandableContent?: (row: any) => JSX.Element;
}

const Table = (props: TableProps) => {
  const { rows, columns, expandableContent } = props;
  const { items, requestSort, sortConfig } = useSortableData(rows!, {
    key: "name",
    direction: "ascending",
  });

  const { search, filtered, onChange } = useSearch(["name", "email"], items);

  interface Column {
    key?: string;
    title?: string;
    render?: (
      x: string | any | Array<string>
    ) => JSX.Element | string | Array<string> | any;
    style?: object;
    sx?: object;
    grids?: string;
  }

  const renderHeader = columns!.map((column: Column) => (
    <Box
      sx={{ cursor: "pointer", m: 3, ...column.sx }}
      style={column.style}
      onClick={() => requestSort(`${column.key!.toLowerCase()}`)}
      key={column.key}
    >
      {column.title}
      {sortConfig.direction === "ascending" ? "⬇️" : "⬆️"}
    </Box>
  ));

  function createStringOfArray(arr: string[]) {
    return `${arr.join().replaceAll(",", " ")}`;
  }
  interface Row {
    id?: number | string;
    name?: string;
    email?: string;
    phone?: string;
    status?: string[];
    description?: string;
  }

  const RenderRow = ({
    expandableContent,
    columns,
    createStringOfArray,
    row,
  }: any) => {
    const { onClick, toggleAccordion } = useAccordion();
    return (
      <div key={row.id}>
        <Grid
          sx={{
            gridTemplateColumns: "0.5fr repeat(5, 1fr)",
            alignItems: "center",
            borderBottom: "1px solid #C7BED7",
          }}
          gap="0"
          columns={createStringOfArray(
            columns!.map((column: Column) => column.grids!)
          )}
        >
          <Label sx={{ justifySelf: "center", cursor: "pointer" }}>
            <Checkbox />
          </Label>
          {columns!.map((column: Column) => (
            <Box key={column.key} onClick={onClick} sx={{ cursor: "pointer" }}>
              {column.render!(row[column.key as keyof Row])}
            </Box>
          ))}
        </Grid>
        <Accordion toggleAccordion={toggleAccordion}>
          {expandableContent!(row)}
        </Accordion>
      </div>
    );
  };
  const renderRows = filtered.map((row: any) => (
    <RenderRow
      key={row.id}
      columns={columns}
      row={row}
      expandableContent={expandableContent}
      createStringOfArray={createStringOfArray}
    />
  ));
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "50%",
          borderRadius: "20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="primary"
            size="medium"
            sx={{
              background: "white",
              color: "#6044b5",
              border: "2px solid #6044b5",
            }}
          >
            Filter
          </Button>
          <Field
            variant="search"
            type="search"
            style={{
              width: "650px",
            }}
            value={search}
            onChange={onChange}
            placeholder="Search name"
          />
          <Button variant="primary" size="medium">
            + Add User
          </Button>
        </Box>
        <Grid
          sx={{
            height: "63px",
            backgroundColor: "#e7e3f4",
            gridTemplateColumns: "0.5fr repeat(5, 1fr)",
            alignItems: "center",
            justifyItems: "center",
          }}
          gap="0"
          columns={createStringOfArray(
            columns!.map((column: Column) => column.grids!)
          )}
        >
          <Label sx={{ justifySelf: "center" }}>
            <Checkbox />
          </Label>
          {renderHeader}
        </Grid>
        {renderRows}
        <Box
          sx={{
            width: "100%",
            height: "63px",
            backgroundColor: "#C5C5C5",
            borderRadius: "0px 0px 20px 20px",
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            color: "#6e6893",
          }}
        >
          <Text variant="quicksand" size="body3">
            Rows per page: 10
          </Text>
          <Text variant="quicksand" size="body3" sx={{ marginRight: "20px" }}>
            1-10 of 276
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default Table;
