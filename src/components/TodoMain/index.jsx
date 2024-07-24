import React, { useEffect } from 'react';
import "./index.css";
import trash from "../../assets/images/trash.svg";

export default function TodoMain(props) {
  console.log(props);
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
        <img src=${trash} alt="" />

      </div>
    `;
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

  useEffect(addTodo, [props.counter]);

  return (
    <div id='todoMain'>
    </div>
  )
}
