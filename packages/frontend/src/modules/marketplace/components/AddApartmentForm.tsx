import { Field, Form } from "react-final-form";
import { FormApi } from "final-form";
import { IAddForm } from "../../../shared/types/add-form.types.ts";
import {
  floatingNumbers,
  numbersRegex,
} from "../../../shared/utils/validation/regex.ts";
import { ICreateApartment } from "../../../shared/types/apartment.types.ts";
import addApartmentValidation from "../../../shared/utils/validation/add-form.validation.ts";
import validateFormValues from "../../../shared/utils/validation/validate-form-values.ts";

interface IAddApartmentFormProps {
  handleApartmentCreate: (newApartment: ICreateApartment) => void;
}

const AddApartmentForm = ({
  handleApartmentCreate,
}: IAddApartmentFormProps) => {
  const handleFormSubmit = (formValues: IAddForm, form: FormApi<any>) => {
    const apartmentObj = {
      name: formValues.name,
      rooms: Number(formValues.rooms) || null,
      price: Number(formValues.price) || null,
      description: formValues.description || null,
    };

    handleApartmentCreate(apartmentObj);

    form.reset();
  };

  const validate = validateFormValues<IAddForm>(addApartmentValidation);

  return (
    <div className="flex flex-col gap-2 w-4/5">
      <h2 className="text-3xl text-dark-grey-100">Create new rent</h2>
      <Form<IAddForm>
        onSubmit={handleFormSubmit}
        validate={validate}
      >
        {({ handleSubmit, dirty, hasValidationErrors }) => (
          <form
            className="flex flex-col border bg-light-grey-10 p-[36px] gap-4 rounded-md"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-row gap-2">
              <div className="flex flex-col gap-1 w-3/5">
                <label htmlFor="name">Title</label>
                <Field
                  name="name"
                  id="name"
                  component="input"
                  type="text"
                  placeholder="Ex. Flat in the city center"
                  className="py-1 px-2 rounded-md border border-light-grey-30"
                  maxLength={99}
                />
              </div>
              <div className="flex flex-col gap-1 w-1/5">
                <label htmlFor="rooms">Beds</label>
                <Field
                  name="rooms"
                  id="rooms"
                  component="input"
                  type="text"
                  placeholder="3"
                  className="py-1 px-2 rounded-md border border-light-grey-30"
                  parse={(value) => value === "" || (value !== 0 && numbersRegex.test(value))
                      ? value
                      : undefined
                  }
                />
              </div>
              <div className="flex flex-col gap-1 w-1/5">
                <label htmlFor="price">Price</label>
                <Field
                  name="price"
                  id="price"
                  component="input"
                  type="text"
                  placeholder="99.00"
                  className="py-1 px-2 rounded-md border border-light-grey-30"
                  parse={(value) => value === "" || (value !== 0 && floatingNumbers.test(value))
                      ? value
                      : undefined
                  }
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="description">Description</label>
              <Field
                name="description"
                id="description"
                component="input"
                type="text"
                className="py-1 px-2 rounded-md border border-light-grey-30"
                placeholder="Ex. Beautiful flat in the city center with a view of the park."
                maxLength={999}
              />
            </div>
            <button
              type="submit"
              className="py-[8px] px-[16px] bg-primary text-white rounded-md hover:bg-dark-primary transition-colors duration-200 ease-in-out disabled:bg-light-grey-30 disabled:text-light-grey-100 disabled:cursor-not-allowed"
              disabled={!dirty || hasValidationErrors}
            >
              Submit rent
            </button>
          </form>
        )}
      </Form>
    </div>
  );
};

export default AddApartmentForm;
