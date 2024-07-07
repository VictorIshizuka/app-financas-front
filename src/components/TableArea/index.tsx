import styled from "styled-components";
import { Item } from "../../types/Item";
import { TableItem } from "./TableItem";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  margin-top: 20px;
`;
const TableHeaderColumn = styled.th<{ width?: number }>`
  width: ${props => (props.width ? `${props.width}px` : "auto")};
  padding: 10px 0;
  text-align: left;
`;

type Props = {
  list: Item[];
};

export const TableArea = ({ list }: Props) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeaderColumn width={100}>Data</TableHeaderColumn>
          <TableHeaderColumn width={130}>Categoria</TableHeaderColumn>
          <TableHeaderColumn>Título</TableHeaderColumn>
          <TableHeaderColumn width={150}>Valor</TableHeaderColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => {
          return <TableItem key={index} item={item} />;
        })}
      </tbody>
    </Table>
  );
};
