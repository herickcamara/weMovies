import * as C from "./styled";
import { useNavigate } from "react-router-dom";
import { Theme } from "../../styles/themes";
import { Button } from "../../components/Button";
import { useList } from "../../contexts";
import img from "../../styles/assets/illustration2.svg";

export const PurchaseMade = () => {
  const { list } = useList();
  const navigate = useNavigate();

  const backToBack = () => navigate("/");

  return (
    <Theme cont={list.length}>
      <C.Container>
        <div className="infor">
          <p>Compra realizada com sucesso!</p>
          <div className="areaImg">
            <img src={img} alt="" />
          </div>
          <div className="areaButton">
            <Button onclick={backToBack} label="Voltar" />
          </div>
        </div>
      </C.Container>
    </Theme>
  );
};
