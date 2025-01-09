import { useState } from "react";
import Input from "./Input";
import { IInputValues } from "../types/main.d";
import FileInput from "./FileInput";

function Main() {
  const [values, setValues] = useState<IInputValues>({
    CompanyName: "",
    Bussiness: "",
    Address: "",
    Postcode: 0,
    Name: "",
    Phone: 0,
    Email: "",
    Linkedin: "",
    YourIdea: "",
    File: "",
    Checkbox: false,
  });

  const inputChangeHandler = (
    input:
      | "CompanyName"
      | "Bussiness"
      | "Address"
      | "Postcode"
      | "Name"
      | "Phone"
      | "Email"
      | "Linkedin"
      | "YourIdea"
      | "File"
      | "Checkbox",
    value: string | number | boolean
  ) => {
    setValues({
      ...values,
      [input]: value,
    });
  };

  const [errorSubmit, setErrorSubmit] = useState<boolean>(false);

  const submit = () => {
    if (
      values.Name.trim() !== "" &&
      values.Phone &&
      values.Email.trim() !== "" &&
      values.Checkbox === true
    ) {
      console.log(values);
      setErrorSubmit(false);
    } else {
      setErrorSubmit(true);
      console.log("Please enter the required ones");
    }
  };

  return (
    <main className="sm:px-10 md:px-0">
      <div className="max-w-[1400px] m-auto mt-24">
        <h1 className="text-3xl font-bold text-Gray_D">Contact us</h1>
        <p className="text-base text-[#929292] mt-9">
          Need an experienced and skilled hand with custom IT projects?
        </p>
        <p className="text-base text-[#929292] mt-1">
          Fill out the form to get a free consultation.
        </p>
      </div>
      <div className="flex max-w-[1400px] m-auto md:gap-48 flex-col md:flex-row gap-24">
        <div className="w-full md:w-1/2">
          <Input
            type="text"
            placeholder="Your Company Name"
            onChange={(value) => {
              inputChangeHandler("CompanyName", value);
            }}
          />
          <Input
            type="text"
            placeholder="Nature of Bussiness"
            onChange={(value) => {
              inputChangeHandler("Bussiness", value);
            }}
          />
          <div className="flex gap-4 flex-col xl:flex-row">
            <Input
              type="text"
              placeholder="Adress"
              className="xl:!w-[490px]"
              onChange={(value) => {
                inputChangeHandler("Address", value);
              }}
            />
            <Input
              type="number"
              placeholder="Postcode"
              onChange={(value) => {
                inputChangeHandler("Postcode", value);
              }}
              validators={[
                { validator: (value) => value !== "", errorMessage: "Empty!" },
              ]}
            />
          </div>
          <Input
            type="text"
            placeholder="Contact name"
            onChange={(value) => {
              inputChangeHandler("Name", value);
            }}
            validators={[
              { validator: (value) => value !== "", errorMessage: "Empty!" },
            ]}
          />
          <Input
            type="number"
            placeholder="Contact Phone"
            onChange={(value) => {
              inputChangeHandler("Phone", value);
            }}
            validators={[
              {
                validator: (value) => value !== "",
                errorMessage: "Empty!",
              },
            ]}
          />
          <Input
            type="email"
            placeholder="Email"
            validators={[
              {
                validator: (value) =>
                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value),
                errorMessage: "Email is not corroct!",
              },
              {
                validator: (value) => value !== "",
                errorMessage: "Empty!",
              },
            ]}
            onChange={(value) => {
              inputChangeHandler("Email", value);
            }}
          />
          <Input
            type="text"
            placeholder="Linkedin"
            onChange={(value) => {
              inputChangeHandler("Linkedin", value);
            }}
          />
          <Input
            type="text"
            placeholder="Let's talk about your idea"
            onChange={(value) => {
              inputChangeHandler("YourIdea", value);
            }}
          />
          <FileInput
            placeholder="Upload Additional file"
            onChange={(value) => {
              inputChangeHandler("File", value);
            }}
          />
          <button
            className="bg-Green text-white w-full mt-12 py-4 rounded"
            type="submit"
            onClick={submit}
          >
            SUBMIT
          </button>
          <p
            className={`text-red-500 text-sm mt-3 ${
              !errorSubmit ? "hidden" : ""
            }`}
          >
            Please enter the required ones
          </p>
          {/* {errorSubmit && (
            <p className="text-red-500 text-sm"> Please enter the empty ones</p>
          )} */}
          <div className="flex items-baseline gap-2">
            <Input
              type="checkbox"
              onChange={(value) => {
                inputChangeHandler("Checkbox", value);
              }}
              validators={[
                {
                  validator: (value) => !value,
                  errorMessage: "You have to accept!",
                },
              ]}
              required={true}
            />
            <p className="text-Gray text-base">
              I want to protect my data by signing an NDA
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-md font-bold text-Gray_D">Offices</h3>
          <div className="mt-9">
            <p className="text-Gray text-base">United States</p>
            <p className="text-Gray text-base">
              500 5th Avenue Suite 400, NY 10110
            </p>
          </div>
          <div className="mt-7">
            <p className="text-Gray text-base">United Kingdom</p>
            <p className="text-Gray text-base">High St, Bromley BR1 1DN</p>
          </div>
          <div className="mt-7">
            <p className="text-Gray text-base">France</p>
            <p className="text-Gray text-base">
              80 avenue des Terroirs de France, Paris
            </p>
          </div>
          <div className="mt-20">
            <h3 className="text-md font-bold text-Gray_D">
              For Quick Inquiries
            </h3>
            <p className="flex gap-3 mt-9 text-Gray">
              <img
                className="w-7 h-5"
                src="/images/download.jpg"
                alt="United-States"
              />
              +44 7777777777
            </p>
            <p className="flex gap-3 mt-6 text-Gray">
              <img
                className="w-7 h-5"
                src="/images/download.png"
                alt="United-Kingdom"
              />
              +1 3333333330
            </p>
          </div>
          <div className="mt-20">
            <h3 className="text-md font-bold text-Gray_D">
              Would you like to join our newsletter?
            </h3>
            <div className="flex gap-3 items-end">
              <Input
                type="email"
                placeholder="Email"
                validators={[
                  {
                    validator: (value) =>
                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value),
                    errorMessage: "Email is not corroct!",
                  },
                  {
                    validator: (value) => value !== "",
                    errorMessage: "Empty!",
                  },
                ]}
              />
              <button type="button" className="bg-Green py-3 px-4 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill-opacity="0"
                    fill="#dddddd"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
                  </g>
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M41.9375,8.625c-0.66406,0.02344 -1.27344,0.375 -1.625,0.9375l-18.8125,28.78125l-12.1875,-10.53125c-0.52344,-0.54297 -1.30859,-0.74609 -2.03125,-0.51953c-0.71875,0.22266 -1.25391,0.83203 -1.37891,1.57422c-0.125,0.74609 0.17578,1.49609 0.78516,1.94531l13.9375,12.0625c0.4375,0.37109 1.01563,0.53516 1.58203,0.45313c0.57031,-0.08594 1.07422,-0.41016 1.38672,-0.89062l20.09375,-30.6875c0.42969,-0.62891 0.46484,-1.44141 0.09375,-2.10547c-0.37109,-0.66016 -1.08594,-1.05469 -1.84375,-1.01953z"></path>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Main;
