import styled from "styled-components";
import { CategoryProp } from "..";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 20%;
  padding: 5px;
`;
const Label = styled.label`
  font-size: 13px;
  font-weight: bold;
`;
const Input = styled.input`
  border-radius: 5px;
  border: 2px solid #ccc;
  margin-top: 2px;
`;

const Select = styled.select`
  border-radius: 5px;
  border: 2px solid #ccc;
  margin-top: 2px;
`;

type Props = {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  value: string;
  type?: string;
  label?: string;
  options?: CategoryProp[];
};
export const InputItem = ({ onChange, type, value, label }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input onChange={onChange} value={value} type={type} />
    </Container>
  );
};

export const SelectItem = ({
  onChange,
  type,
  value,
  label,
  options,
}: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Select onChange={onChange} value={value} type={type}>
        <option></option>
        {options?.map((item, index) => {
          return (
            <option key={index} value={item.item   }>
              {item.item}
            </option>
          );
        })}
      </Select>
    </Container>
  );
};
