import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { sortOptions } from "../../../shared/constants/filter.consts.ts";

const ListFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectValue, setSelectValue] = useState<string | null>(
    searchParams.get("price")
  );

  const [roomsFilter, setRoomsFilter] = useState<string | null>(
    searchParams.get("rooms")
  );

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <div className="flex flex-row">
      <div className="flex flex-row gap-4">
        <h5>Sort By</h5>
        <select
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            handleSelect(event)
          }
          value={selectValue || ""}
        >
          <option>Default</option>
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-row gap-4">
        <label htmlFor="rooms">Rooms Filter</label>
        <input
          type="text"
          id="rooms"
          placeholder="Rooms"
          onChange={handleRoomsFilter}
          value={roomsFilter || ""}
        />
      </div>
    </div>
  );
};

export default ListFilters;
