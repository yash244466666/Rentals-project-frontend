import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function DateRange() {
//   const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <div className="select-container">
      <DatePicker
        selectsStart
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        startDate={startDate}
      />
      <DatePicker
        selectsEnd
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        endDate={endDate}
        startDate={startDate}
        minDate={startDate}
      />
    </div>
  );
}