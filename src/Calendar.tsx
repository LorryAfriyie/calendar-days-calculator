import { useState, useEffect, type Dispatch, type SetStateAction } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface Props {
  setDate: Dispatch<SetStateAction<Date>>;
}

export default function CalendarComponent({ ...props }: Props) {
  const [value, setValue] = useState<Value>(new Date());
  const { setDate } = props;
  useEffect(() => {
    console.log(value);
    setDate(value);
  }, [setDate, value]);

  return <Calendar onChange={setValue} value={value} selectRange={true} />;
}
