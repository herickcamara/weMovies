import * as C from "./styled";

type Props = {
  label: string;
  onclick?: () => void;
};

export const Button = ({ label, onclick }: Props) => {
  return <C.Button onClick={onclick}>{label}</C.Button>;
};
