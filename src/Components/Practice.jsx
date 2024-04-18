import React, { useState } from 'react'

function Practice() {
    const [state,setState] = useState([
        {
            Start_Data: "2024-12-20",
            End_Data: "2024-12-20",
            Start_Time: "12:25:00",
            End_Time: "16:25:00",
        },
        {
            Start_Data: "2024-12-31",
            End_Data: "2024-12-31",
            Start_Time: "1:25:00",
            End_Time: "16:25:00",
        },
    ])
      const TimeRequired = {
          Start_Data: "2024-12-31",
          End_Data: "2024-12-31",
          Start_Time: "17:25:00",
          End_Time: "11:25:00",
        };
      
        const checkslotstatus = () => {
            const result = []
            for (let i = 0; i < state.length; i++) { // Fixed loop condition
                const StartSlot1 = createTimeSlot(state[i].Start_Data, state[i].Start_Time);
                const EndSlot1 = createTimeSlot(state[i].End_Data, state[i].End_Time);
                const StartSlot2 = createTimeSlot(TimeRequired.Start_Data, TimeRequired.Start_Time);
                const EndSlot2 = createTimeSlot(TimeRequired.End_Data, TimeRequired.End_Time);
        
                if (isNaN(EndSlot1)) { // Handle NaN separately
                    console.log("EndSlot1 is NaN");
                    continue; // Skip this iteration
                }
        
                if (StartSlot2 > EndSlot1 || EndSlot2 < StartSlot1) {
                    console.log("slot available");
                     result.push(true) ; // Slot available
                } else {
                    console.log("slot not available");
                     result.push(true) // Slot not available
                }
            }
            console.log(result)
            return result
        };
        
    
       
        function createTimeSlot(date,time) {
  
  
            const combinedDateTimeString = `${date}T${time}`;
          
          
            const dateTime = new Date(combinedDateTimeString);
          
           
            const timestamp = dateTime.getTime();
        
            return timestamp
          }  

  return (
    <div>
      <button onClick={() => checkslotstatus()}>Submit</button>
    </div>
  )
}

export default Practice
