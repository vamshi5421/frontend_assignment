"use client"

import React from "react"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export interface Column {
  accessor: string
  header: string
}

export interface DataTableProps<T> {
  columns: Column[]
  data: T[]
}

function DataTable<T>({ columns, data }: DataTableProps<T>) {
  return (
    <ScrollArea className="max-h-96 overflow-y-scroll">
      <Table>
        <TableHeader>
          <TableRow className="w-fit">
            {columns?.map((column) => (
              <TableCell key={column.accessor}>{column.header}</TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns?.map((column) => (
                <TableCell key={column.accessor}>
                  {row[column.accessor]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={columns?.length}>
              Total Rows: {data?.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

export default DataTable
