import React from "react";
import TurboTable from "./components/TurboTable";
import useTableData from "./hooks/useTableData";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Box, Container, Heading } from "@radix-ui/themes";
import "./App.css";
import "@radix-ui/themes/styles.css";

const App: React.FC = () => {
  const { data, pageCount } = useTableData(
    "https://api.openbrewerydb.org/v1/breweries"
  );
  console.log("Data", data, pageCount);

  const columnHelper = createColumnHelper<Brewery>();

  const columns = [
    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("brewery_type", {
      header: "Brewery Type",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("address_1", {
      header: "Address 1",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("city", {
      header: "City",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("state_province", {
      header: "State/Province",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("postal_code", {
      header: "Postal Code",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("country", {
      header: "Country",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("longitude", {
      header: "Longitude",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("latitude", {
      header: "Latitude",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("phone", {
      header: "Phone",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("website_url", {
      header: "Website URL",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("state", {
      header: "State",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("street", {
      header: "Street",
      cell: (info) => info.getValue(),
    }),
  ];

  return (
    <Box p={"4"}>
      <Container size="4">
        <Heading>Turbo Table</Heading>
        <TurboTable
          data={data}
          columns={columns as ColumnDef<Record<string, unknown>, unknown>[]}
          height={"500px"}
          width={"100%"}
        />
      </Container>
    </Box>
  );
};

export default App;
