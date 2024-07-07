import styled from "styled-components";
import { Item } from "../../../types/Item";
import { formatDate } from "../../../helpers/date";
import { categories } from "../../../data/category";

const TableLine = styled.tr``;
const TableColumn = styled.td`
  padding: 10px 0;
`;

const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 5px;
  border-radius: 5px;
  color: #fff;
  background-color: ${props => props.color};
`;

const Value = styled.div<{ color: string }>`
  color: ${props => props.color};
`;

type Props = {
  item: Item;
};

export const TableItem = ({ item }: Props) => {
  return (
    <TableLine>
      <TableColumn>{formatDate(item.date)}</TableColumn>
      <TableColumn>
        <Category color={categories[item.category].color}>
          {categories[item.category].title}
        </Category>
      </TableColumn>
      <TableColumn>{item.title}</TableColumn>
      <TableColumn>
        <Value color={categories[item.category].expense ? "red" : "green"}>
          R$ {item.value}
        </Value>
      </TableColumn>
    </TableLine>
  );
};
