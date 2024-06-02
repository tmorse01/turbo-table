import React from "react";
import TurboTable from "./components/TurboTable";
import useTableData from "./hooks/useTableData";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import "@radix-ui/themes/styles.css";
import { Box, Container, Heading } from "@radix-ui/themes";
const App: React.FC = () => {
  const { data, fetchData, pageCount } = useTableData(
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
    columnHelper.accessor("address_2", {
      header: "Address 2",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("address_3", {
      header: "Address 3",
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
    <Box>
      <Container size="4">
        <Heading>Turbo Table</Heading>
        <TurboTable
          data={data}
          columns={columns as ColumnDef<Record<string, unknown>, unknown>[]}
          fetchData={fetchData}
          pageCount={pageCount}
        />
      </Container>
    </Box>
  );
};

export default App;
