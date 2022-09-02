import { ReactNode } from "react";
import { Header } from "../../components/Header";
import * as C from "./styled";

type Props = {
  children: ReactNode;
  cont: number;
};

export const Theme = ({ children, cont }: Props) => {
  return (
    <C.Container>
      <C.SubContainer>
        <Header cont={cont} />
        {children}
      </C.SubContainer>
    </C.Container>
  );
};
