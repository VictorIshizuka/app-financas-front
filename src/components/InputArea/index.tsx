import styled from "styled-components";
import { Item } from "../../types/Item";
import { InputItem, SelectItem } from "./InputItem";
import { useState } from "react";

const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin-left: 10px;
    border-radius: 5px;
    font-size: 12px;
    background-color: darkblue;
    color: #fff;
    border: none;
    height: 25px;
    margin-bottom: -20px;
  }
`;

type Props = {
  onAdd: (item: Item) => void;
};
export type CategoryProp = {
  item: string;
};

export const InputArea = ({ onAdd }: Props) => {
  const categoriesItems: CategoryProp[] = [
    { item: "food" },
    { item: "rent" },
    { item: "salary" },
  ];

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");

  const handleAddEvent = e => {
    e.preventDefault();
    console.log(date, title, category, value);
    onAdd({ date: new Date(date), title, category, value: Number(value) });
  };
  //   const newItem: Item = {
  //     date: new Date(2024, 6, 7),
  //     category: "food",
  //     title: "item de teste",
  //     value: 250.25,
  //   };
  //   onAdd(newItem);
  // };

  function handleChangeTitle(e: React.FormEvent<HTMLInputElement>) {
    setTitle(e.currentTarget.value);
  }
  function handleChangeDate(e: React.FormEvent<HTMLInputElement>) {
    setDate(e.currentTarget.value);
  }
  function handleChangeCategory(e: React.FormEvent<HTMLInputElement>) {
    setCategory(e.currentTarget.value);
  }
  function handleChangeValue(e: React.FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }

  return (
    <Container>
      <Form onSubmit={handleAddEvent}>
        <InputItem
          label="Data"
          type="date"
          value={date}
          onChange={handleChangeDate}
        />
        <SelectItem
          label="Categoria"
          options={categoriesItems}
          value={category}
          onChange={handleChangeCategory}
        />
        <InputItem
          label="Titulo"
          type="text"
          value={title}
          onChange={handleChangeTitle}
        />
        <InputItem
          label="Valor"
          type="text"
          value={value}
          onChange={handleChangeValue}
        />
        <button onClick={handleAddEvent}>Adiconar</button>
      </Form>
    </Container>
  );
};
