import React from "react";
import { Button, Flex, Grid, Table } from "@radix-ui/themes";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  ColumnDef,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { Data } from "../types/Table";
import Pagination from "./Pagination";
// import "../styles/Table.css";

interface TurboTableProps {
  data: Data;
  columns: ColumnDef<Record<string, unknown>, unknown>[];
  fetchData: () => Promise<void>;
  pageCount: number;
}

const TurboTable: React.FC<TurboTableProps> = ({ data, columns }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  console.log("Table", table.getState());
  const pageIndex = table.getState().pagination.pageIndex;
  const pageSize = table.getState().pagination.pageSize;
  const pageCount = data.length / pageSize;

  return (
    <Grid gap="3">
      <Table.Root>
        <Table.Header>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Row key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Table.ColumnHeaderCell
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </Table.ColumnHeaderCell>
              ))}
            </Table.Row>
          ))}
        </Table.Header>
        <Table.Body>
          {table.getRowModel().rows.map((row) => (
            <Table.Row key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Table.Cell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <Flex gap="3">
        <Pagination
          handleFirstPage={table.firstPage}
          handlePreviousPage={table.previousPage}
          handleNextPage={table.nextPage}
          handleLastPage={table.lastPage}
          canPreviousPage={table.getCanPreviousPage}
          canNextPage={table.getCanNextPage}
          currentPage={pageIndex}
          pageCount={pageCount}
        />
        <Button onClick={() => table.setPageSize(10)}>Show 10</Button>
        <Button onClick={() => table.setPageSize(20)}>Show 20</Button>
      </Flex>
    </Grid>
  );
};

export default TurboTable;
