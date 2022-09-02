import { CardType } from "../types/CardType";

export const NewPrice = (list: CardType[]): number => {
  let resut: number = 0;

  for (let i = 0; i < list.length; i++) {
    resut = list[i].price + resut;
  }

  return resut;
};

export const formatMoney = (price: number) => {
  return price.toFixed(2).toString().replace(".", ",");
};
