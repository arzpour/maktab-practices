import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { ICardData } from "../type/card";

export const Card: React.FC<ICardData> = ({
  name,
  img,
  price,
  quantity,
  addToBill,
  minusFromBill,
}) => {
  return (
    <div className="bg-GreenCard text-white rounded-md p-3">
      <img className="w-32 h-32" src={img} alt={name} />
      <h3 className="font-medium pt-4">{name}</h3>
      <p className="text-Cream font-bold text-lg py-1">{`$${price}`}</p>
      <div className="flex justify-center items-center text-gray-900 mt-1">
        <button className="bg-Cream p-2" onClick={minusFromBill}>
          <FaMinus className="w-3 h-3" />
        </button>
        <button className="bg-white py-[2px] px-2">{quantity}</button>
        <button className="bg-Cream p-2" onClick={addToBill}>
          <FaPlus className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
