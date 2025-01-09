import React from "react";
import { ICardData } from "../type/card";

export const CardBil: React.FC<ICardData> = ({
  name,
  img,
  price,
  quantity,
}) => {
  return (
    <div className="bg-GreenCard text-white rounded-md p-3">
      <img className="w-32 h-32" src={img} alt={name} />
      <h3 className="font-medium pt-4">{name}</h3>
      <p className="text-Cream font-bold text-lg py-1">{`$${price}`}</p>
      <p>Qty: {quantity}</p>
    </div>
  );
};
