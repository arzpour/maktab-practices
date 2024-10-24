import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { InputForm } from "./components/input";
import { inputValidation } from "./validations/input.validation";
import { TForm } from "./types/form.type";

function App() {
  const { handleSubmit, control } = useForm<TForm>({
    mode: "all",
    resolver: zodResolver(inputValidation),
  });

  const onSubmit: SubmitHandler<TForm> = (data) => console.log(data);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-blue-700 font-semibold text-2xl">
          PERSONAL INFORMATION
        </h2>
        <Controller
          control={control}
          name="fullName"
          render={({ field, fieldState }) => {
            return (
              <InputForm
                type="text"
                label="Full Name"
                error={fieldState.error?.message}
                {...field}
              />
            );
          }}
        />
        <div className="flex gap-6 items-start">
          <h4 className="text-gray-700 font-medium mt-9">Gender:</h4>
          <Controller
            control={control}
            name="gender"
            render={({ field, fieldState }) => {
              return (
                <>
                  <div>
                    <InputForm
                      type="radio"
                      label="Female"
                      error={fieldState.error?.message}
                      {...field}
                      value="Female"
                    />
                  </div>
                  <div>
                    <InputForm
                      type="radio"
                      label="Male"
                      error={fieldState.error?.message}
                      {...field}
                      value="Male"
                    />
                  </div>
                </>
              );
            }}
          />
        </div>
        <div className="flex gap-4">
          <div>
            <Controller
              control={control}
              name="birthDate"
              render={({ field, fieldState }) => {
                return (
                  <InputForm
                    type="text"
                    label="DATE OF BIRTH"
                    error={fieldState.error?.message}
                    {...field}
                  />
                );
              }}
            />
          </div>
          <Controller
            control={control}
            name="birthPlace"
            render={({ field, fieldState }) => {
              return (
                <InputForm
                  type="text"
                  label="PLACE OF BIRTH"
                  error={fieldState.error?.message}
                  {...field}
                />
              );
            }}
          />
        </div>
        <div className="flex gap-4">
          <Controller
            control={control}
            name="nationality"
            render={({ field, fieldState }) => {
              return (
                <InputForm
                  type="text"
                  label="NATIONALITY"
                  error={fieldState.error?.message}
                  {...field}
                />
              );
            }}
          />
          <Controller
            control={control}
            name="religion"
            render={({ field, fieldState }) => {
              return (
                <InputForm
                  type="text"
                  label="RELIGION"
                  error={fieldState.error?.message}
                  {...field}
                />
              );
            }}
          />
        </div>
        <div className="flex gap-6 items-start">
          <h4 className="text-gray-700 font-medium mt-9">RESIDENCE STATUS:</h4>
          <Controller
            control={control}
            name="residenceStatus"
            render={({ field, fieldState }) => {
              return (
                <>
                  <div>
                    <InputForm
                      type="radio"
                      label="Residence"
                      error={fieldState.error?.message}
                      {...field}
                      value="Residence"
                    />
                  </div>
                  <div>
                    <InputForm
                      type="radio"
                      label="Non Residence"
                      error={fieldState.error?.message}
                      {...field}
                      value="Non Residence"
                    />
                  </div>
                </>
              );
            }}
          />
        </div>
        <div className="flex gap-6 items-start">
          <h4 className="text-gray-700 font-medium mt-9">MARITAL STATUS:</h4>
          <Controller
            control={control}
            name="maritalStatus"
            render={({ field, fieldState }) => {
              return (
                <>
                  <div>
                    <InputForm
                      type="radio"
                      label="Single"
                      error={fieldState.error?.message}
                      {...field}
                      value="Single"
                    />
                  </div>
                  <div>
                    <InputForm
                      type="radio"
                      label="Married"
                      error={fieldState.error?.message}
                      {...field}
                      value="Married"
                    />
                  </div>
                  <div>
                    <InputForm
                      type="radio"
                      label="Widowed"
                      error={fieldState.error?.message}
                      {...field}
                      value="Widowed"
                    />
                  </div>
                </>
              );
            }}
          />
        </div>
        <div className="flex gap-4 pb-24 border-b border-gray-400">
          <Controller
            control={control}
            name="nationalIdNo"
            render={({ field, fieldState }) => {
              return (
                <InputForm
                  type="text"
                  label="NATIONAL ID NO"
                  error={fieldState.error?.message}
                  {...field}
                />
              );
            }}
          />
          <Controller
            control={control}
            name="tinNo"
            render={({ field, fieldState }) => {
              return (
                <InputForm
                  type="text"
                  label="TIN NO"
                  error={fieldState.error?.message}
                  {...field}
                />
              );
            }}
          />
        </div>
        <h2 className="text-blue-700 font-semibold text-2xl mt-10">
          CONTACT INFORMATION
        </h2>
        <Controller
          control={control}
          name="address"
          render={({ field, fieldState }) => {
            return (
              <InputForm
                type="text"
                label="ADDRESS"
                error={fieldState.error?.message}
                {...field}
              />
            );
          }}
        />

        <div className="flex gap-4">
          <div>
            <Controller
              control={control}
              name="city"
              render={({ field, fieldState }) => {
                return (
                  <InputForm
                    type="text"
                    label="CITY"
                    error={fieldState.error?.message}
                    {...field}
                  />
                );
              }}
            />
          </div>
          <Controller
            control={control}
            name="state"
            render={({ field, fieldState }) => {
              return (
                <InputForm
                  type="text"
                  label="STATE"
                  error={fieldState.error?.message}
                  {...field}
                />
              );
            }}
          />
        </div>

        <div className="flex gap-4">
          <div>
            <Controller
              control={control}
              name="zipCode"
              render={({ field, fieldState }) => {
                return (
                  <InputForm
                    type="text"
                    label="ZIP CODE"
                    error={fieldState.error?.message}
                    {...field}
                  />
                );
              }}
            />
          </div>
          <Controller
            control={control}
            name="country"
            render={({ field, fieldState }) => {
              return (
                <InputForm
                  type="text"
                  label="COUNTRY"
                  error={fieldState.error?.message}
                  {...field}
                />
              );
            }}
          />
        </div>

        <div className="flex gap-4 pb-24 border-b border-gray-400">
          <div>
            <Controller
              control={control}
              name="phone"
              render={({ field, fieldState }) => {
                return (
                  <InputForm
                    type="text"
                    label="PHONE"
                    error={fieldState.error?.message}
                    {...field}
                  />
                );
              }}
            />
          </div>
          <div>
            <Controller
              control={control}
              name="email"
              render={({ field, fieldState }) => {
                return (
                  <InputForm
                    type="text"
                    label="EMAIL"
                    error={fieldState.error?.message}
                    {...field}
                  />
                );
              }}
            />
          </div>
        </div>

        <h2 className="text-blue-700 font-semibold text-2xl mt-10">
          SERVICE INFORMATION
        </h2>

        <Controller
          control={control}
          name="serviceName"
          render={({ field, fieldState }) => {
            return (
              <InputForm
                type="text"
                label="SERVICE NAME"
                error={fieldState.error?.message}
                {...field}
              />
            );
          }}
        />

        <div className="flex gap-6 items-start">
          <h4 className="text-gray-700 font-medium mt-9">PAYMENT DETAIL:</h4>
          <Controller
            control={control}
            name="payment"
            render={({ field, fieldState }) => {
              return (
                <>
                  <div>
                    <InputForm
                      type="radio"
                      label="Cash"
                      error={fieldState.error?.message}
                      {...field}
                      value="Cash"
                    />
                  </div>
                  <div>
                    <InputForm
                      type="radio"
                      label="Debit Card"
                      error={fieldState.error?.message}
                      {...field}
                      value="Debit Card"
                    />
                  </div>
                  <div>
                    <InputForm
                      type="radio"
                      label="Credit Card"
                      error={fieldState.error?.message}
                      {...field}
                      value="Credit Card"
                    />
                  </div>
                </>
              );
            }}
          />
        </div>
        <Controller
          control={control}
          name="comment"
          render={({ field, fieldState }) => {
            return (
              <InputForm
                type="text"
                label="COMMENTS"
                error={fieldState.error?.message}
                {...field}
              />
            );
          }}
        />

        <button
          className="bg-gray-800 text-white mt-10 font-semibold py-2 px-6 rounded-md"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
