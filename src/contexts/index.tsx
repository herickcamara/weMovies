import React from "react";

interface List {
  id: number;
  img: string;
  title: string;
  price: number;
}

interface ListContextValue {
  list: List[];
  setList: (data: List[]) => void;
}

interface Props {
  children: React.ReactNode;
}

const listInitial: ListContextValue = {
  list: [
    {
      id: 0,
      img: "",
      price: 0,
      title: "",
    },
  ],
  setList: (data) => {},
};

const ListContext = React.createContext<ListContextValue>(listInitial);

export const MoviProvider = ({ children }: Props) => {
  const [list, setList] = React.useState<List[]>([]);

  return (
    <ListContext.Provider value={{ list, setList }}>
      {children}
    </ListContext.Provider>
  );
};

export function useList() {
  const context = React.useContext(ListContext);
  const { list, setList } = context;
  return { list, setList };
}
