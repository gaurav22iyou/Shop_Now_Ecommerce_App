import React, { useEffect, useState } from 'react'
import moment from 'moment';

import './date.css'
const DateAndTimer = () => {

    const [date, setDate] = useState('')

    const [time, setTime] = useState('')

     const [now, setNow] = useState(moment());



    useEffect(() => {

        const updateDateTime = () => {
            setTime(moment().format('LTS'));
            setDate(moment().format('dddd DD MMMM'));
              setNow(moment());
        };

        updateDateTime();

        
        const interval = setInterval(updateDateTime, 1000);

        return () => clearInterval(interval);   ``
        
    }, []);


     const createdAt = moment().subtract(5, 'minutes');

    return (
    <div className='DateAndTime'>

     <p className='time'><strong>Time :</strong> {time}</p>

      <p className='lastseen'>Last Seen : {createdAt.from(now)}</p>


         <p className='date'> {date} </p>




    </div>
)

}



export default DateAndTimer