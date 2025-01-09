export interface ICardData {
  name: string;
  img: string;
  price: number;
  quantity: number;
  addToBill?: () => void;
  minusFromBill?: () => void;
}
