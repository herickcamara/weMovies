import * as C from "./styled";
import carImg from "../../styles/assets/Vector.svg";
import { Link } from "react-router-dom";
type Props = {
  cont: number;
};

export const Header = ({ cont }: Props) => {
  return (
    <C.Container>
      <Link to="/">
        <h1>WeMovies</h1>
      </Link>
      <Link to="/car">
        <div className="areaCar">
          <div className="labelCar">
            <p>Meu Carrinho</p>
            <p>{cont} items</p>
          </div>

          <div className="imgCar">
            <img src={carImg} alt="" />
          </div>
        </div>
      </Link>
    </C.Container>
  );
};
