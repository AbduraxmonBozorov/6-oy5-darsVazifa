import React, { useEffect } from 'react';
import "./index.css";
import trash from "../../assets/images/trash.svg";

export default function TodoMain(props) {
  useEffect(addTodo, [props.counter]);
 
  function getData() {
    let data = [];
    if (localStorage.getItem("data")) {
      data = JSON.parse(localStorage.getItem("data"))
    }
    return data;
  }
 
  function createTodo(item) {
    return `
       <div className="todo" id="${item.id}">
        <p>${item.txt}</p>
        <img onClick=${deleteTodo}   src=${trash} alt="" />
      </div>
    `;
  }

  function deleteTodo(event){
    let parent=event
    console.log(parent);
  }

  function addTodo() {
    let todoMain = document.querySelector("#todoMain");
    let oldData = "";
    todoMain.innerHTML = "";
    let newData = getData();
    newData.forEach(element => {
      oldData += createTodo(element);
    });
    todoMain.innerHTML = oldData;
  }

  return (
    <div id='todoMain'>

    </div>
  )
}
