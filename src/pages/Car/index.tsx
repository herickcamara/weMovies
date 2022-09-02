import * as C from "./styled";
import { useState } from "react";
import { Theme } from "../../styles/themes";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { useList } from "../../contexts";
import { formatMoney, NewPrice } from "../../helpers/function";
import { useNavigate } from "react-router-dom";
import img from "../../styles/assets/illustration.svg";

export const Car = () => {
  const { list, setList } = useList();
  const [total, setTotal] = useState(NewPrice(list));
  const navigate = useNavigate();

  const finish = () => {
    setList([]);
    navigate("/purchasemade");
  };
  const backToBack = () => navigate(-1);
  const newPrice = (price: number) => {
    setTotal(total + price);
  };
  return (
    <Theme cont={list.length}>
      {!list.length && (
        <C.Container>
          <div className="infor">
            <p>Parece que não há nada por aqui :(</p>
            <div className="areaImg">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="areaButton">
            <Button onclick={backToBack} label="Voltar" />
          </div>
        </C.Container>
      )}
      {list.length && (
        <C.Container auto>
          <C.SubContainer>
            <div className="infoTable">
              <p>PRODUTO</p>
              <p>QTD</p>
              <p>SUBTOTAL</p>
            </div>

            {list.map((item, index) => {
              return <Section fn={newPrice} item={item} key={index} />;
            })}

            <div className="menuTotal">
              <Button onclick={finish} label="FINALIZAR PEDIDO" />

              <div className="total">
                <small>total:</small>
                <h2>{formatMoney(total)}</h2>
              </div>
            </div>
          </C.SubContainer>
        </C.Container>
      )}
    </Theme>
  );
};
