import React from "react";
import { Flex, Table } from "@radix-ui/themes";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  ColumnDef,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { Data } from "../types/Table";
import Pagination from "./Pagination";
import PageSizeSelect from "./PageSizeSelect";
import { Responsive } from "@radix-ui/themes/props";
import "../styles/Table.css";

interface TurboTableProps {
  data: Data;
  columns: ColumnDef<Record<string, unknown>, unknown>[];
  height?: Responsive<string>;
  width?: Responsive<string>;
  maxHeight?: Responsive<string>;
}

const TurboTable: React.FC<TurboTableProps> = ({
  data,
  columns,
  height,
  width,
  maxHeight,
}) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const pageIndex = table.getState().pagination.pageIndex;
  const pageSize = table.getState().pagination.pageSize;
  const pageCount = Math.ceil(data.length / pageSize);

  return (
    <Flex
      direction="column"
      gap="5"
      height={height}
      width={width}
      maxHeight={maxHeight}
    >
      <Table.Root className="table-root">
        <Table.Header className="table-header">
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
        <Table.Body className="table-body">
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
      <Flex gap="3" justify={"end"}>
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
        <PageSizeSelect pageSize={pageSize} setPageSize={table.setPageSize} />
      </Flex>
    </Flex>
  );
};

export default TurboTable;
