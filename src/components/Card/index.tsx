import * as C from "./styled";
import { CardType } from "../../types/CardType";
import img from "../../styles/assets/add.svg";
type Prop = {
  item: CardType;
  onclick: (item: CardType) => void;
};

export const Card = ({ item, onclick }: Prop) => {
  return (
    <C.Container>
      <div className="areaThamb">
        <img src={item.img} alt="" />
      </div>
      <div className="areaTitle">
        <span>{item.title}</span>
      </div>
      <div className="areaPrice">
        <span>{item.price}</span>
      </div>
      <C.AddMovie onClick={() => onclick(item)}>
        <div className="areaImg">
          <img src={img} alt="" />
        </div>
        <small>1</small>
        <span>ADICIONAR AO CARRINHO</span>
      </C.AddMovie>
    </C.Container>
  );
};
