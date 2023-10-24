import React, { useState } from 'react'
import {MdDateRange} from 'react-icons/md'
import {LuClock2} from 'react-icons/lu'


const CustomField= ({icon, txt, val}) => {

  const [stime, setstime] = useState("noon");
  const [etime, setetime] = useState("noon");
  const [show, setdisplay] = useState(true);


  function handleClick()
  {
    setdisplay(!show);
  }
  const timelist = [
    {
      id: "6",
      val: "06:00"
    },{
      id: "7",
      val: "07:00"
    },{
      id: "8",
      val: "08:00"
    },{
      id: "9",
      val: "09:00"
    },{
      id: "10",
      val: "10:00"
    }
  ]

  return (
    <div className={icon=="date"?"rf el": "rf el timediv"}  onClick={() => handleClick()}>
        <div>
            <span className='icon'>{icon == "date"? <MdDateRange style={{color:'black', cursor:'pointer', fontSize:'1em'}} />
            :<LuClock2 style={{color:'black', cursor:'pointer', fontSize:'1em'}} />}
            </span>
        </div>
        <div className='cf'>
            <div>{txt}</div>
            <div>{val}</div>
        </div>
    </div>
  )
}
 
export default CustomField