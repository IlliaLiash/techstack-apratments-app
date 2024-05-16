import { useFormik } from "formik";
import { IAddForm } from "../../../shared/types/add-form.types.ts";
import addApartmentValidation from "../../../shared/utils/validation/add-form.validation.ts";

const AddApartmentForm = () => {
  const handleFormSubmit = (values: IAddForm) => {
    console.log(values);
  };

  const { resetForm, values, handleSubmit, isValid, dirty } = useFormik({
    initialValues: {
      name: "",
      rooms: 0,
      price: 0,
      description: "",
    } as IAddForm,
    onSubmit: handleFormSubmit,
    validationSchema: addApartmentValidation,
  });

  return (
    <div className="flex flex-col gap-2 w-4/5">
      <h2 className="text-3xl text-dark-grey-100">Create new rent</h2>
      <form
        className="flex flex-col border
      bg-light-grey-10 p-[36px] gap-4 rounded-md"
      >
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-1 w-3/5">
            <label htmlFor="name">Title</label>
            <input
              type="text"
              id="name"
              placeholder="Ex. Flat in the city center"
              className="py-1 px-2 rounded-md border border-light-grey-30"
            />
          </div>
          <div className="flex flex-col gap-1 w-1/5">
            <label htmlFor="rooms">Beds</label>
            <input
              type="text"
              id="rooms"
              placeholder="3"
              className="py-1 px-2 rounded-md border border-light-grey-30"
            />
          </div>
          <div className="flex flex-col gap-1 w-1/5">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              placeholder="99.00"
              className="py-1 px-2 rounded-md border border-light-grey-30"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            className="py-1 px-2 rounded-md border border-light-grey-30"
          />
        </div>
        <button
          type="submit"
          className="py-[8px] px-[16px] bg-primary text-white rounded-md
        hover:bg-dark-primary transition-colors duration-200 ease-in-out"
        >
          Submit rent
        </button>
      </form>
    </div>
  );
};

export default AddApartmentForm;
