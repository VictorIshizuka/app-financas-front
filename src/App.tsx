import { useEffect, useState } from "react";
import styled from "styled-components";
import { items } from "./data/items";
import { Item } from "./types/Item";
import { filterListByMonth, getCurrentMonth } from "./helpers/date";
import { TableArea } from "./components/TableArea";

export const Container = styled.div``;
const Header = styled.div`
  background-color: darkblue;
  height: 150px;
  text-align: center;
`;
export const HeaderText = styled.h1`
  margin: 0;
  padding: 0;
  color: #fff;
  padding-top: 30px;
`;
export const Body = styled.div`
  margin: auto;
  max-width: 980px;
  margin-bottom: 50px;
`;

function App() {
  const [list, setList] = useState<Item[]>(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <Container>
      <Header>
        <HeaderText>Sistema Financeiro</HeaderText>
      </Header>
      <Body>
        <TableArea list={filteredList} />
      </Body>
    </Container>
  );
}

export default App;
