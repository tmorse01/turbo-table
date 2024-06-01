import React from "react";
import TurboTable from "./components/TurboTable";
import useTableData from "./hooks/useTableData";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import "@radix-ui/themes/styles.css";
import { Box, Container, Heading } from "@radix-ui/themes";
const App: React.FC = () => {
  const { data, fetchData, pageCount } = useTableData(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log("Data", data);

  const columnHelper = createColumnHelper<User>();

  const columns = [
    columnHelper.accessor("id", {
      header: "ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("username", {
      header: "Username",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("email", {
      header: "Email",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor(
      (row) => `${row.address.street}, ${row.address.city}`,
      {
        id: "address",
        header: "Address",
        cell: (info) => info.getValue(),
      }
    ),
    columnHelper.accessor("phone", {
      header: "Phone",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("website", {
      header: "Website",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.company.name, {
      id: "company",
      header: "Company",
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
