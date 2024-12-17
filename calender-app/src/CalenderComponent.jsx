import React,{useState} from "react";
import Calender from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalenderComponent = () => {
    const [date,setDate]=useState(new Date())

    const handleDateChange = (newDate) => {
        setDate(newDate);
        console.log("Selected date:", newDate);
      };

  return (
    <div className="calenderComponent">
        <Calender
        onChange={handleDateChange}
        value={date} />
    </div>
  )
}

export default CalenderComponent

