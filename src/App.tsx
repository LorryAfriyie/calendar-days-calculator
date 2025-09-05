import CalendarComponent from "./Calendar.tsx";
import { useState } from "react";

function App() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="">
      <div className="grid grid-col-1 place-items-center">
        <p>Calendar Days Calculator</p>
        <CalendarComponent setDate={setDate} />
        <p>{date}</p>
      </div>
    </div>
  );
}

export default App;
