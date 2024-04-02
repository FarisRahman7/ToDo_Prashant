import React, { useContext } from 'react';
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from '../store/todo-items-store';

const WelcomeMessage = () => {
  const {todoItems}= useContext(TodoItemsContext);
  return (
    // Wrap JSX expression in parentheses
    (todoItems.length === 0 && <p className={styles.welcome}> Enjoy your Day </p>)
  );
};

export default WelcomeMessage;