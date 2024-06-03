import React from "react";
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
import "../styles/Table.css";

interface TurboTableProps {
  data: Data;
  columns: ColumnDef<Record<string, unknown>, unknown>[];
  stickyHeader?: boolean;
  height?: string;
  width?: string;
  maxHeight?: string;
  scroll?: { x: string | number; y: string | number };
}

const TurboTable: React.FC<TurboTableProps> = ({
  data,
  columns,
  stickyHeader = false,
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
    <div className="table-container" style={{ height, width, maxHeight }}>
      <div className="table-wrapper">
        <table className="table-root">
          <thead className={`table-header ${stickyHeader ? "sticky" : ""}`}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="table-header-row">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="table-header-cell"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="table-body">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination-controls">
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
      </div>
    </div>
  );
};

export default TurboTable;
