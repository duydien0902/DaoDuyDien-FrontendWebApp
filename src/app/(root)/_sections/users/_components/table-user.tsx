"use client";

import { useState, useEffect } from "react";

import { InfoUser } from "@/types/user";

import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  PaginationState,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SkeletonTable } from "@/components/ui/loading";

import { createColumns } from "@/app/(root)/_sections/users/_components/columns";

interface TableUserProps {
  data: InfoUser[];
  total: number;
  pagination: PaginationState;
  setPagination: (v: any) => void;
  isLoading: boolean;
  showComfirmDelete: () => void;
  showFormUpdate: (user: InfoUser) => void;
  setRowSelection: (v: any) => void;
  rowSelection: any;
  setCurrentIdsToDelete: (ids: string[]) => void;
  currentIndex: number;
  onCurrentIndex: (v: number) => void;
}

export const TableUser = ({
  data,
  total,
  pagination,
  setPagination,
  isLoading,
  showComfirmDelete,
  showFormUpdate,
  setRowSelection,
  rowSelection,
  setCurrentIdsToDelete,
  currentIndex,
  onCurrentIndex,
}: TableUserProps) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const columns = createColumns(
    showComfirmDelete,
    showFormUpdate,
    setCurrentIdsToDelete
  );

  const handlePagination = (newPagination: any) => {
    if (currentIndex > 0 && currentIndex === pagination.pageIndex) {
      setPagination((old: PaginationState) => {
        return {
          ...old,
          pageIndex: pagination.pageIndex,
        };
      });
      onCurrentIndex(0);
    } else {
      setPagination(newPagination);
    }
  };

  const table = useReactTable({
    data,
    columns,
    pageCount: Math.ceil(total / pagination.pageSize),
    onPaginationChange: handlePagination,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: (newSelection) => {
      setRowSelection(newSelection);
      if (Object.keys(newSelection).length === 0) {
        setCurrentIdsToDelete([]);
      }
    },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
  });

  useEffect(() => {
    const selectedRows = table
      .getSelectedRowModel()
      .rows.map((row) => row.original);
    if (selectedRows?.length > 0) {
      const idsCheckbox = selectedRows.map((item) => item.id);
      setCurrentIdsToDelete(idsCheckbox);
    }
  }, [rowSelection]);

  return (
    <div className="w-full">
      {!isLoading ? (
        <>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-end space-x-2 py-4">
            <div className="flex-1 text-sm text-muted-foreground">
              <div>
                {pagination.pageIndex + 1}
                {"/"}
                {table.getPageCount()} total page
              </div>
            </div>
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          </div>
        </>
      ) : (
        <SkeletonTable row={8} col={5} />
      )}
    </div>
  );
};
