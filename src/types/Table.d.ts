import { ColumnDef } from "@tanstack/react-table";

export type Data = Record<string, unknown>[];

export type Columns = ColumnDef<Record<string, unknown>, unknown>[];
