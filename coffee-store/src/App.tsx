import { Card } from "./components/Card";
import { data } from "./assets/data";
import { CardBil } from "./components/CardBill";
import { useEffect, useState } from "react";

function App() {
  const [dataNew, setDataNew] = useState(data);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [disable, setDisable] = useState<boolean>(true);

  const addToBill = (id: number) => {
    setDataNew((prevData) =>
      prevData.map((el) =>
        el.id === id ? { ...el, quantity: el.quantity + 1 } : el
      )
    );
  };

  const minusFromBill = (id: number) => {
    setDataNew((prevData) =>
      prevData.map((el) =>
        el.id === id && el.quantity > 0
          ? { ...el, quantity: el.quantity - 1 }
          : el
      )
    );
  };
  const calcTotalPrice = () => {
    const totalPrice = dataNew.reduce((total, currentValue) => {
      return total + currentValue.price * currentValue.quantity;
    }, 0);
    setTotalPrice(totalPrice);
  };
  useEffect(() => {
    calcTotalPrice();
    setDisable(!dataNew.some((el) => el.quantity > 0));
  }, [dataNew]);

  return (
    <>
      <div className="bg-Grey py-10 min-h-screen">
        <div className="max-w-[850px] mx-auto flex flex-col items-center p-2">
          <div className="flex gap-3 items-center">
            <img src="src/assets/logo.png" alt="logo" className="w-14 h-14" />
            <h2 className="font-extrabold text-4xl">Starbucks</h2>
          </div>
          <h4 className="font-bold text-GreenDark text-lg mt-3">
            Starbucks Online Coffee Order
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-6">
            {dataNew.map((el) => (
              <Card
                key={el.id}
                name={el.name}
                img={el.img}
                price={el.price}
                quantity={el.quantity}
                addToBill={() => addToBill(el.id)}
                minusFromBill={() => minusFromBill(el.id)}
              />
            ))}
          </div>
          <h4 className="mt-4 font-bold text-GreenDark text-xl">Bill</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-2">
            {dataNew.map((el) => (
              <CardBil
                key={el.id}
                name={el.name}
                img={el.img}
                price={el.price}
                quantity={el.quantity}
              />
            ))}
          </div>
          <h4 className="mt-4 font-bold text-GreenDark text-xl">
            Total:${totalPrice}
          </h4>
          <button
            disabled={disable}
            className={`${
              disable ? "bg-CreamLight" : "bg-Cream"
            } text-white font-bold text-xl w-full mt-3 py-2 rounded-md cursor-pointer`}
          >
            Submit Order
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
