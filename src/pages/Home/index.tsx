import * as C from "./styled";
import { useEffect, useState } from "react";
import { Theme } from "../../styles/themes";
import { Card } from "../../components/Card";
import { api } from "../../servers/api";
import { CardType } from "../../types/CardType";
import { useList } from "../../contexts";

export const Home = () => {
  const [data, setData] = useState<CardType[]>([]);
  const { list, setList } = useList();
  const addItem = async (item: CardType) => {
    if (list.length) {
      let newList = await list.filter((movie) => movie.id === item.id);
      if (newList.length) {
        return alert("Filme Ja adicionado");
      }
      return setList([...list, item]);
    }
    return setList([...list, item]);
  };

  useEffect(() => {
    api.get("/movies").then((response) => setData(response.data));
  });
  return (
    <Theme cont={list.length}>
      <C.Container>
        {data?.map((item, index) => {
          return <Card onclick={addItem} item={item} key={index} />;
        })}
      </C.Container>
    </Theme>
  );
};
