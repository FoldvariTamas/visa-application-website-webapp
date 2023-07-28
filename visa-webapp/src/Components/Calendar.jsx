import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

//type ValuePiece = Date | null;

//type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarApp() {
  const [value, setValue] = useState(new Date());

  function onChange(val) {
    setValue(val);
    console.log(val.getDate());
  }

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}