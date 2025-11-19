'use client'

import * as React from 'react'
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type UniqueIdentifier,
} from '@dnd-kit/core'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table'

import {
  ChevronDown,
  Plus,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Loader,
  LayoutDashboard,
  EllipsisVertical,
  CircleCheckBig,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import DraggableRow from '@/components/molecules/admin-dashboard/DraggableRow'
import DragHandle from '@/components/molecules/admin-dashboard/DragHandle'
import TableCellViewer from '@/components/molecules/admin-dashboard/TableCellViewer'
import { Item } from '@/types/types'
import { toast } from 'sonner'
import { useTranslations } from 'next-intl'

/**
 * Build table columns.
 *
 * @param CheckboxComponent - checkbox component used in header/cells
 * @param t - translation function from next-intl
 * @returns Column definitions array
 */
const buildColumns = (
  CheckboxComponent: any,
  t: any,
): ColumnDef<Item, any>[] => [
  // Drag handle
  {
    id: 'drag',
    header: () => null,
    cell: ({ row }) => <DragHandle id={row.original.id} />,
  },

  // Row select checkbox
  {
    id: 'select',
    header: ({ table }) => (
      <div className="flex items-center justify-center">
        <CheckboxComponent
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value: any) =>
            table.toggleAllPageRowsSelected(!!value)
          }
          aria-label={t('selectAll')}
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <CheckboxComponent
          checked={row.getIsSelected()}
          onCheckedChange={(value: any) => row.toggleSelected(!!value)}
          aria-label={t('selectRow')}
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  // Header column (main title)
  {
    accessorKey: 'header',
    header: t('header'),
    cell: ({ row }) => <TableCellViewer item={row.original} />,
    enableHiding: false,
  },

  // Section type
  {
    accessorKey: 'type',
    header: t('sectionType'),
    cell: ({ row }) => (
      <div className="w-32">
        <Badge variant="outline" className="text-muted-foreground px-1.5">
          {row.original.type}
        </Badge>
      </div>
    ),
  },

  // Process (new column)
  {
    accessorKey: 'process',
    header: t('process'),
    cell: ({ row }) => (
      <div className="text-sm">{row.original.process || '-'}</div>
    ),
  },

  // Progress (new column) - shows percentage as badge
  {
    accessorKey: 'progress',
    header: t('progress'),
    cell: ({ row }) => (
      <div>
        <Badge variant="secondary" className="px-2">
          {typeof row.original.progress === 'number'
            ? `${row.original.progress}%`
            : (row.original.progress ?? '-')}
        </Badge>
      </div>
    ),
  },

  // Status
  {
    accessorKey: 'status',
    header: t('status'),
    cell: ({ row }) => (
      <Badge variant="outline" className="text-muted-foreground px-1.5">
        {row.original.status === 'Done' ? (
          <CircleCheckBig className="mr-1 inline-block fill-green-500 dark:fill-green-400" />
        ) : (
          <Loader className="mr-1 inline-block" />
        )}
        {t(row.original.status?.toLowerCase() ?? 'status')}
      </Badge>
    ),
  },

  // Target
  {
    accessorKey: 'target',
    header: () => <div className="w-full text-right">{t('target')}</div>,
    cell: ({ row }) => (
      <form
        onSubmit={(e) => {
          e.preventDefault()
          toast.promise(new Promise((r) => setTimeout(r, 800)), {
            loading: t('saving', { name: row.original.header }),
            success: t('done'),
            error: t('error'),
          })
        }}
      >
        <Label htmlFor={`${row.original.id}-target`} className="sr-only">
          {t('target')}
        </Label>
        <Input
          id={`${row.original.id}-target`}
          defaultValue={row.original.target}
          className="hover:bg-input/30 focus-visible:bg-background h-8 w-16 border-transparent bg-transparent text-right shadow-none"
        />
      </form>
    ),
  },

  // Limit
  {
    accessorKey: 'limit',
    header: () => <div className="w-full text-right">{t('limit')}</div>,
    cell: ({ row }) => (
      <form
        onSubmit={(e) => {
          e.preventDefault()
          toast.promise(new Promise((r) => setTimeout(r, 800)), {
            loading: t('saving', { name: row.original.header }),
            success: t('done'),
            error: t('error'),
          })
        }}
      >
        <Label htmlFor={`${row.original.id}-limit`} className="sr-only">
          {t('limit')}
        </Label>
        <Input
          id={`${row.original.id}-limit`}
          defaultValue={row.original.limit}
          className="hover:bg-input/30 focus-visible:bg-background h-8 w-16 border-transparent bg-transparent text-right shadow-none"
        />
      </form>
    ),
  },

  // Owner (new column)
  {
    accessorKey: 'owner',
    header: t('owner'),
    cell: ({ row }) => (
      <div className="text-sm">{row.original.owner || '-'}</div>
    ),
  },

  // Reviewer (existing)
  {
    accessorKey: 'reviewer',
    header: t('reviewer'),
    cell: ({ row }) => {
      const isAssigned =
        row.original.reviewer && row.original.reviewer !== t('assignReviewer')
      if (isAssigned) return <div>{row.original.reviewer}</div>

      return (
        <>
          <Label htmlFor={`${row.original.id}-reviewer`} className="sr-only">
            {t('reviewer')}
          </Label>
          <Select defaultValue="">
            <SelectTrigger
              size="sm"
              id={`${row.original.id}-reviewer`}
              className="w-38"
            >
              <SelectValue placeholder={t('assignReviewer')} />
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="Eddie Lake">Eddie Lake</SelectItem>
              <SelectItem value="Jamik Tashpulatov">
                Jamik Tashpulatov
              </SelectItem>
            </SelectContent>
          </Select>
        </>
      )
    },
  },

  // Created At (new column)
  {
    accessorKey: 'createdAt',
    header: t('createdAt'),
    cell: ({ row }) =>
      row.original.createdAt ? (
        <div className="text-sm">
          {new Date(row.original.createdAt).toLocaleDateString()}
        </div>
      ) : (
        <div className="text-sm">-</div>
      ),
  },

  // Updated At (new column)
  {
    accessorKey: 'updatedAt',
    header: t('updatedAt'),
    cell: ({ row }) =>
      row.original.updatedAt ? (
        <div className="text-sm">
          {new Date(row.original.updatedAt).toLocaleDateString()}
        </div>
      ) : (
        <div className="text-sm">-</div>
      ),
  },

  // Actions
  {
    id: 'actions',
    cell: () => (
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
              size="icon"
            >
              <EllipsisVertical />
              <span className="sr-only">{t('openMenu')}</span>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-32">
            <DropdownMenuCheckboxItem>{t('edit')}</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>{t('copy')}</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>{t('favorite')}</DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem>{t('delete')}</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    ),
  },
]

export function AdminOverviewTable({ data: initialData }: { data: Item[] }) {
  const t = useTranslations('adminDashboardOverview.adminOverviewTable')

  const [data, setData] = React.useState<Item[]>(() => initialData || [])
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  })

  const sortableId = React.useId()
  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {}),
  )

  const dataIds = React.useMemo<UniqueIdentifier[]>(
    () => data.map((d) => d.id),
    [data],
  )

  const columns = React.useMemo(() => buildColumns(Checkbox, t), [t])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
    },
    getRowId: (row) => row.id.toString(),
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  const handleDragEnd = React.useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event
      if (active && over && active.id !== over.id) {
        setData((prev) => {
          const oldIndex = dataIds.indexOf(active.id as any)
          const newIndex = dataIds.indexOf(over.id as any)
          if (oldIndex === -1 || newIndex === -1) return prev
          return arrayMove(prev, oldIndex, newIndex)
        })
      }
    },
    [dataIds],
  )

  return (
    <Tabs
      defaultValue="outline"
      className="my-10 w-full flex-col justify-start gap-6"
    >
      <div className="flex items-center justify-between px-4 lg:px-6">
        <Label htmlFor="view-selector" className="sr-only">
          {t('view')}
        </Label>
        <Select defaultValue="outline">
          <SelectTrigger
            className="flex w-fit @4xl/main:hidden"
            size="sm"
            id="view-selector"
          >
            <SelectValue placeholder={t('selectView')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="outline">{t('outline')}</SelectItem>
            <SelectItem value="past-performance">
              {t('pastPerformance')}
            </SelectItem>
            <SelectItem value="key-personnel">{t('keyPersonnel')}</SelectItem>
            <SelectItem value="focus-documents">
              {t('focusDocuments')}
            </SelectItem>
          </SelectContent>
        </Select>

        <TabsList className="hidden @4xl/main:flex">
          <TabsTrigger value="outline">{t('outline')}</TabsTrigger>
          <TabsTrigger value="past-performance">
            {t('pastPerformance')} <Badge variant="secondary">3</Badge>
          </TabsTrigger>
          <TabsTrigger value="key-personnel">
            {t('keyPersonnel')} <Badge variant="secondary">2</Badge>
          </TabsTrigger>
          <TabsTrigger value="focus-documents">
            {t('focusDocuments')}
          </TabsTrigger>
        </TabsList>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <LayoutDashboard />
                <span className="hidden lg:inline">
                  {t('customizeColumns')}
                </span>
                <span className="lg:hidden">{t('columns')}</span>
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {table
                .getAllColumns()
                .filter(
                  (column) =>
                    typeof column.accessorFn !== 'undefined' &&
                    column.getCanHide(),
                )
                .map((column) => (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(v) => column.toggleVisibility(!!v)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" size="sm">
            <Plus />
            <span className="hidden lg:inline">{t('addSection')}</span>
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <TabsContent
        value="outline"
        className="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6"
      >
        <div className="overflow-hidden rounded-lg border">
          <DndContext
            collisionDetection={closestCenter}
            modifiers={[restrictToVerticalAxis]}
            onDragEnd={handleDragEnd}
            sensors={sensors}
            id={sortableId}
          >
            <Table className="dark:bg-[#00143473]">
              <TableHeader className="sticky top-0 z-10">
                {table.getHeaderGroups().map((hg) => (
                  <TableRow key={hg.id}>
                    {hg.headers.map((header) => (
                      <TableHead key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>

              <TableBody>
                {table.getRowModel().rows?.length ? (
                  <SortableContext
                    items={dataIds}
                    strategy={verticalListSortingStrategy}
                  >
                    {table.getRowModel().rows.map((row) => (
                      <DraggableRow key={row.id} row={row} />
                    ))}
                  </SortableContext>
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      {t('noResults')}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </DndContext>
        </div>

        {/* Pagination / Footer */}
        <div className="flex items-center justify-between px-4">
          <div className="text-muted-foreground hidden flex-1 text-sm lg:flex">
            {table.getFilteredSelectedRowModel().rows.length}{' '}
            {t('rowsSelected')} {table.getFilteredRowModel().rows.length}
          </div>

          <div className="flex w-full items-center gap-8 lg:w-fit">
            <div className="hidden items-center gap-2 lg:flex">
              <Label htmlFor="rows-per-page" className="text-sm font-medium">
                {t('rowsPerPage')}
              </Label>
              <Select
                value={`${table.getState().pagination.pageSize}`}
                onValueChange={(value) => table.setPageSize(Number(value))}
              >
                <SelectTrigger size="sm" className="w-20" id="rows-per-page">
                  <SelectValue
                    placeholder={table.getState().pagination.pageSize}
                  />
                </SelectTrigger>
                <SelectContent side="top">
                  {[10, 20, 30, 40, 50].map((p) => (
                    <SelectItem key={p} value={`${p}`}>
                      {p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex w-fit items-center justify-center text-sm font-medium">
              {t('page')} {table.getState().pagination.pageIndex + 1} {t('of')}{' '}
              {table.getPageCount()}
            </div>

            <div className="ml-auto flex items-center gap-2 lg:ml-0">
              <Button
                variant="outline"
                className="hidden h-8 w-8 p-0 lg:flex"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">{t('goToFirst')}</span>
                <ChevronsLeft />
              </Button>

              <Button
                variant="outline"
                className="size-8"
                size="icon"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">{t('goToPrev')}</span>
                <ChevronLeft />
              </Button>

              <Button
                variant="outline"
                className="size-8"
                size="icon"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <span className="sr-only">{t('goToNext')}</span>
                <ChevronRight />
              </Button>

              <Button
                variant="outline"
                className="hidden size-8 lg:flex"
                size="icon"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                <span className="sr-only">{t('goToLast')}</span>
                <ChevronsRight />
              </Button>
            </div>
          </div>
        </div>
      </TabsContent>

      {/* Other tabs kept as placeholders */}
      <TabsContent
        value="past-performance"
        className="flex flex-col px-4 lg:px-6"
      >
        <div className="aspect-video w-full flex-1 rounded-lg border border-dashed" />
      </TabsContent>

      <TabsContent value="key-personnel" className="flex flex-col px-4 lg:px-6">
        <div className="aspect-video w-full flex-1 rounded-lg border border-dashed" />
      </TabsContent>

      <TabsContent
        value="focus-documents"
        className="flex flex-col px-4 lg:px-6"
      >
        <div className="aspect-video w-full flex-1 rounded-lg border border-dashed" />
      </TabsContent>
    </Tabs>
  )
}

export default AdminOverviewTable
