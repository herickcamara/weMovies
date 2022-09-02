import * as C from "./styled";
import { useState } from "react";
import { CardType } from "../../types/CardType";
import { useList } from "../../contexts";
import { formatMoney } from "../../helpers/function";
import min from "../../styles/assets/Vector.png";
import max from "../../styles/assets/Vector-1.png";
import trash from "../../styles/assets/Vector-2.png";

type Prop = {
  item: CardType;
  fn: (price: number) => void;
};
export const Section = ({ item, fn }: Prop) => {
  const [cont, setCont] = useState(1);
  const [subtotal, setSubtotal] = useState(item.price);
  const { list, setList } = useList();

  const del = () => {
    let newList = list.filter((itemFilter) => itemFilter.id != item.id);
    setList(newList);
  };

  const someMin = () => {
    let newCont = cont - 1;
    if (newCont > 0) {
      if (subtotal && item) {
        let newValue = subtotal - item?.price;
        setSubtotal(newValue);
        setCont(newCont);
        fn(-item.price);
      }
    } else {
      del();
    }
  };

  const someMax = () => {
    if (subtotal && item) {
      let newValue = subtotal + item?.price;
      let newCont = cont + 1;
      setSubtotal(newValue);
      setCont(newCont);
      fn(item.price);
    }
  };

  return (
    <C.Section>
      <div className="areaImg">
        <img src={item?.img} alt="" />
      </div>
      <div className="infoItem">
        <div>
          <div>{item?.title}</div>
          <div>R$:{formatMoney(item.price)}</div>
        </div>
      </div>
      <div className="cont">
        <div onClick={someMin} className="min">
          <img src={min} alt="" />
        </div>
        <input value={cont} />
        <div onClick={someMax} className="max">
          <img src={max} alt="" />
        </div>
      </div>
      <div className="subtotal">
        {subtotal?.toFixed(2).toString().replace(".", ",")}
      </div>
      <div onClick={del} className="trash">
        <img src={trash} alt="" />
      </div>
    </C.Section>
  );
};
