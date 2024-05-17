import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { sortOptions } from "../../../shared/constants/filter.consts.ts";
import { numbersRegex } from "../../../shared/utils/validation/regex.ts";

const ListFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectValue, setSelectValue] = useState<string | null>(
    searchParams.get("price")
  );

  const [roomsFilter, setRoomsFilter] = useState<string | null>(
    searchParams.get("rooms")
  );

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    setSelectValue(value);

    if (value === "") {
      searchParams.delete("price");
      setSearchParams(searchParams);
      return;
    }

    searchParams.set("price", value);
    setSearchParams(searchParams);
  };

  const handleRoomsFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setRoomsFilter(value);

    if (value === "") {
      searchParams.delete("rooms");
      setSearchParams(searchParams);
      return;
    }

    searchParams.set("rooms", value);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex flex-row gap-[24px]">
      <div className="flex flex-row gap-4 items-center">
        <h5>Sort By:</h5>
        <select
          onChange={handleSelect}
          value={selectValue || ""}
          className="border border-gray-300 rounded-md px-2 py-1"
        >
          {sortOptions.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <label htmlFor="rooms">Rooms Filter:</label>
        <input
          type="text"
          id="rooms"
          placeholder="Rooms"
          onChange={(e) => {
            const { value } = e.target;
            if (value === "" || (value !== "0" && numbersRegex.test(value))) {
              handleRoomsFilter(e);
            }
          }}
          value={roomsFilter || ""}
          className="border border-gray-300 rounded-md px-2 py-1 w-[70px]"
        />
      </div>
    </div>
  );
};

export default ListFilters;
