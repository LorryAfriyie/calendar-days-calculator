import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarComponent() {
  const [value, setValue] = useState<Value>(new Date());

  useEffect(() => {
    console.log(value);
  }, [value]);

  return <Calendar onChange={setValue} value={value} selectRange={true} />;
}
