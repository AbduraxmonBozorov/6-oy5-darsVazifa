import React, {useEffect} from 'react';
import styles from "./index.module.css";

export default function TodoMain(props) {
  function getData(){
    let data=[];
    if(localStorage.getItem("data")){
      data=JSON.parse(localStorage.getItem("data"))
    }

    return data;
  }

  function createTodo(item){
    return `
       <div className={styles.todo} id="${item.id}">
        <p>${item.txt}</p>
        <i className="fa-solid fa-trash"></i>
      </div>
    `;
  }

  return (
    <div>
     {
      getData.length>0 && getData.map(item=>{
        return createTodo(item);
        console.log(createTodo);
      })
     }
    </div>
  )
}
