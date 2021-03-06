import React, { useState } from "react";
export function Home() {
 const [task, setTask] = useState("");
 const [list, setList] = useState([]);
 //javscr

 return (
  <div className="container mt-5 text-center">
   <input
    type="text"
    placeholder="Task"
    onChange={e => {
                    console.log(e.target.value);
                    //here el valor de la variable q modifica el task
    }}
    value={task}
    onKeyPress={e => {
     if (e.key == "Enter") {
                        //here asignar los elementos de la lista
      alert("presiono ENTER");
                        console.log({ list });
                        
     }
    }}
   />
  </div>
 );
}
