"use client";

import * as React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TableRow, TableCell } from "@/components/ui/table";
import { Item } from "@/types/types";
import { Row } from "@tanstack/react-table";

type Props = {
  row: Row<Item>;
};

export default function DraggableRow({ row }: Props) {
  const { transform, transition, setNodeRef, isDragging } = useSortable({
    id: row.original.id,
  });

  return (
    <TableRow
      data-state={row.getIsSelected() && "selected"}
      data-dragging={isDragging}
      ref={setNodeRef}
      className="relative z-0 data-[dragging=true]:z-10 data-[dragging=true]:opacity-80"
      style={{
        transform: CSS.Transform.toString(transform),
        transition: transition,
      }}
    >
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id}>
          {cell.column.columnDef.cell
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (cell.column.columnDef.cell as any)(cell.getContext())
            : null}
        </TableCell>
      ))}
    </TableRow>
  );
}
