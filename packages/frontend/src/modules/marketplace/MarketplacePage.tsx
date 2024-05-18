import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import AddApartmentForm from "./components/AddApartmentForm.tsx";
import ApartmentsList from "./components/ApartmentList.component.tsx";
import {
  IApartment,
  IApatmentQueryParams,
  ICreateApartment,
  IPriceOrderDirectionType,
} from "../../shared/types/apartment.types.ts";
import {
  createApartment,
  deleteApartment,
  getListApartment,
} from "../../api/apartment.api.ts";

const MarketplacePage = () => {
  const [searchParams, _setSearchParams] = useSearchParams();

  const [data, setData] = useState<IApartment[]>(() => []);

  const { refetch } = useQuery({
    queryKey: [`list`],
    queryFn: async () => {
      try {
        const queryParams: IApatmentQueryParams = {};

        if (searchParams.has("price")) {
          queryParams.price = searchParams.get(
            "price"
          ) as IPriceOrderDirectionType;
        }

        if (searchParams.has("rooms")) {
          queryParams.rooms = Number(searchParams.get("rooms"));
        }

        const response = await getListApartment(queryParams);
        setData(response.data);
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    keepPreviousData: true,
    enabled: true,
  });

  const handleApartmentCreate = async (newApartment: ICreateApartment) => {
    try {
      await createApartment(newApartment);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const handleApartmentDelete = async (id: string) => {
    try {
      await deleteApartment(id);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refetch();
  }, [searchParams]);

  return (
    <div className="flex flex-col gap-8 items-center py-[24px]">
      <AddApartmentForm handleApartmentCreate={handleApartmentCreate} />
      <ApartmentsList
        data={data}
        handleDelete={handleApartmentDelete}
      />
    </div>
  );
};

export default MarketplacePage;
