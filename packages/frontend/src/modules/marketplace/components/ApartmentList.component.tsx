import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import apartmentListCols from "./ApartmentTableCols.tsx";
import { IApartment } from "../../../shared/types/apartment.types.ts";
import ListFilters from "./ListFilters.tsx";

interface IApartmentsListProps {
  data: IApartment[];
}

const ApartmentsList = ({ data }: IApartmentsListProps) => {
  const table = useReactTable({
    data,
    columns: apartmentListCols,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col gap-2 w-4/5">
      <h3 className="text-3xl text-dark-grey-100">Available rents</h3>
      <ListFilters />
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="border-b text-gray-800 uppercase bg-light-grey-10"
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 pr-2 py-4 font-medium text-left"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="border-b"
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-4 pt-[14px] pb-[18px]"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApartmentsList;
