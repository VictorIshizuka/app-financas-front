import styled from "styled-components";
import { formatCurrentMonth } from "../../helpers/date";
import { ResumeItem } from "./ResumeItem";

const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  padding: 20px;
  border-radius: 10px;
  margin-top: -40px;
  display: flex;
  align-items: center;
`;

const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const ResumeArea = styled.div`
  flex: 2;
  display: flex;
`;
const MonthArrow = styled.div`
  width: 40px;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
`;
const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
`;

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  expense: number;
  income: number;
};

export const InfoArea = ({
  currentMonth,
  onMonthChange,
  income,
  expense,
}: Props) => {
  const handlePrevMonth = () => {
    const [year, month] = currentMonth.split("-");
    const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    const [year, month] = currentMonth.split("-");
    const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <Container>
      <MonthArea>
        <MonthArrow onClick={handlePrevMonth}>◀ </MonthArrow>
        <MonthTitle>{formatCurrentMonth(currentMonth)}</MonthTitle>
        <MonthArrow onClick={handleNextMonth}> ▶ </MonthArrow>
      </MonthArea>
      <ResumeArea>
        <ResumeItem title="Receita" value={income} />
        <ResumeItem title="Despesas" value={expense} />
        <ResumeItem
          color={income - expense < 0 ? "red" : "green"}
          title="Balanço"
          value={income - expense}
        />
      </ResumeArea>
    </Container>
  );
};
