import { useState } from "react";

function Navbar() {
  const [activePage, setActivePage] = useState("");

  const activePageHandler = (page: string) => {
    setActivePage(page);
  };

  return (
    <div className="max-w-[1400px] m-auto flex justify-between items-center flex-col md:flex-row gap-y-6">
      <h3 className="text-2xl font-medium text-[#9A9A9A]">LOGO</h3>
      <ul className="flex md:gap-8 gap-6 flex-wrap md:flex-nowrap justify-center md:justify-normal">
        <li
          className={`pb-1 ${
            activePage === "Company" ? " border-b-2 border-b-Green" : ""
          }`}
          onClick={() => activePageHandler("Company")}
        >
          <a className="text-Gray" href="#">
            Company
          </a>
        </li>
        <li
          className={`pb-1 ${
            activePage === "Services" ? " border-b-2 border-b-Green" : ""
          }`}
          onClick={() => activePageHandler("Services")}
        >
          <a className="text-Gray" href="#">
            Services
          </a>
        </li>
        <li
          className={`pb-1 ${
            activePage === "FinTech Solutions"
              ? " border-b-2 border-b-Green"
              : ""
          }`}
          onClick={() => activePageHandler("FinTech Solutions")}
        >
          <a className="text-Gray" href="#">
            FinTech Solutions
          </a>
        </li>
        <li
          className={`pb-1 ${
            activePage === "Products" ? " border-b-2 border-b-Green" : ""
          }`}
          onClick={() => activePageHandler("Products")}
        >
          <a className="text-Gray" href="#">
            Products
          </a>
        </li>
        <li
          className={`pb-1 ${
            activePage === "Portfolio" ? " border-b-2 border-b-Green" : ""
          }`}
          onClick={() => activePageHandler("Portfolio")}
        >
          <a className="text-Gray" href="#">
            Portfolio
          </a>
        </li>
        <li
          className={`pb-1 ${
            activePage === "Contact us" ? " border-b-2 border-b-Green" : ""
          }`}
          onClick={() => activePageHandler("Contact us")}
        >
          <a className="text-Gray" href="#">
            Contact us
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
