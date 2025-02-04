"use client"


import React, { useState } from "react";

const CounterPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="text-4xl text-center">This is my counter page</div>

      <div className="flex gap-5"> 

      <div>
          <button 
          className=" bg-red-600 p-3 rounded-lg "
          onClick={() => setCount(count - 1)}>Decrease -1</button>
        </div>
        <div>
          <button 
          className=" bg-green-600 p-3 rounded-lg "
          onClick={() => setCount(count + 1)}>increase +1</button>
        </div>
        <div>
            <p className="bg-slate-400 w-fit p-3 rounded-lg" > {count} </p>
        </div>
       
      </div>
    </div>
  );
};

export default CounterPage;
