import React from 'react';
import "./index.css";

export default function TodoFooter(props) {
  console.log(props);

  function handleClear(){
    let conf=confirm("Haqiqatdan ham hamma ma'lumotni o'chirmoqchimisiz?");
    if(conf==true){
      localStorage.removeItem("data");
      props.counter.setCount(0);
    }

  }

  return (
    <div>
      <button onClick={handleClear} id='clearAll'>Clear All</button>
    </div>
  )
}
