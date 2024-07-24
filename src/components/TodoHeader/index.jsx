import React, { useRef, useState } from 'react'
import styles from "./index.module.css";
export default function TodoHeader(props) {

  const inpRef = useRef();
  const [data, setData] = useState([]);

  function validate() {
    if (inpRef.current.value.length < 3) {
      alert("Eng kamida 4 ta belgi kirting");
      inpRef.current.focus();
      inpRef.current.style.outlineColor = "red";
      return false;
    }
    return true;
  }

  function getData() {
    let data = [];
    if (localStorage.getItem("data")) {
      data = JSON.parse(localStorage.getItem("data"))
    }

    return data;
  }

  function handleClick(event) {
    event.preventDefault();
    let isValid = validate();
    if (!isValid) {
      return;
    }
    let todo = inpRef.current.value;
    let data = getData();
    let isExist = null;

    data.forEach(element => {
      if (element.txt == todo) {
        isExist = 1;
      }
    });

    if (isExist) {
      alert("Bu todo ro'yhatda mavjud");
      inpRef.current.value = "";
      return;
    }

    data.push({ txt: todo, id: Date.now() })
    localStorage.setItem("data", JSON.stringify(data));
    inpRef.current.value = "";
    props.counter.setCount(props.counter.count + 1);

  }

  
  return (
    <div className={styles["todo-header"]}>
      <h1 className={styles.h1}>Todo App</h1>
      <form className={styles.form}>
        <input className={styles.input} type="text" name="txt" ref={inpRef} id="txt" placeholder='Add your new todo' />
        <button className={styles.button} onClick={handleClick}>+</button>
      </form>
    </div>
  )
}
