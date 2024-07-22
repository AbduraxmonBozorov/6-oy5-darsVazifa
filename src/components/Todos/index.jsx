import React, {useState} from 'react';
import styles from "./index.module.css";
import TodoHeader from '../TodoHeader';
import TodoMain from '../TodoMain';

export default function Todos() {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div className={styles.todos}>
      <TodoHeader counter={{setCount, count}} />
      <TodoMain counter={count} />
    </div>
  )
}
