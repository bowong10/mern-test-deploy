import React, { useState } from 'react'
// import styled from 'styled-components'
import {
  DatePicker,
  DatePickerProvider,
  useDatePickGetter,
  useDatePickReset,
} from '@bcad1591/react-date-picker';


// const StyleDatePicker = styled.DatePicker`
// border:2px solid black;
// `;

function DatepickerCalender() {
    
  // const [stime, setstime] = useState("noon");
  // const [etime, setetime] = useState("noon");
  const [show, setdisplay] = useState(true);

  const { pickedDates } = useDatePickGetter();
  const resetFunc = useDatePickReset
  function handleClick()
  {
    setdisplay(!show);
  }

  return (
    <div>
        <DatePicker disablePreviousDays />
        <hr />
        <div>{pickedDates.firstPickedDate?.toString()}</div>
        <div>{pickedDates.secondPickedDate?.toString()}</div>
        <button type="button" onClick={resetFunc}>
        Reset
        </button>
    </div>
  )
}

export default DatepickerCalender