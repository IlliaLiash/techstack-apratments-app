import { createColumnHelper } from "@tanstack/react-table";
import { IApartment } from "../../../shared/types/apartment.types";

const columnHelper = createColumnHelper<IApartment>();

const apartmentListCols = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("rooms", {
    cell: (info) => <p className="text-center">{info.getValue()}</p>,
  }),
  columnHelper.accessor("price", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("description", {
    cell: (info) => info.getValue(),
  }),
];

export default apartmentListCols;
