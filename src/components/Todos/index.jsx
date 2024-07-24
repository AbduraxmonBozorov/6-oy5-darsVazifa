import React, {useState} from 'react';
import styles from "./index.module.css";
import TodoHeader from '../TodoHeader';
import TodoMain from '../TodoMain';
import TodoFooter from '../TodoFooter';
export default function Todos() {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.todos}>
      <TodoHeader counter={{setCount, count}} />
      <TodoMain counter={count} />
      <TodoFooter counter={{setCount, count}} />
    </div>
  )
}
