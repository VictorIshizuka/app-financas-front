import styled from "styled-components";
import { Item } from "../../types/Item";

const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
`;

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const handleAddEvent = () => {
    const newItem: Item = {
      date: new Date(2024, 6, 7),
      category: "food",
      title: "item de teste",
      value: 250.25,
    };
    onAdd(newItem);
  };

  return (
    <Container>
      <button onClick={handleAddEvent}>Adiconar</button>
    </Container>
  );
};
