import CalendarComponent from "./Calendar.tsx";
import { useState } from "react";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function App() {
  const [date, setDate] = useState<string | Value>("");

  return (
    <div className="">
      <div className="grid grid-col-1 place-items-center">
        <p>Calendar Days Calculator</p>
        <CalendarComponent setDate={setDate} />
        <p>{date && date.toString()}</p>
      </div>
    </div>
  );
}

export default App;
