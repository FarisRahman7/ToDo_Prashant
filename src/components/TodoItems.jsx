
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";

const TodoItems = () => {
  const {todoItems , deleteItem }= useContext(TodoItemsContext);
  return (
    <div className="items-container">
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          TodoDate={item.dueDate}
          TodoName={item.name}
          onDeleteClick={deleteItem}
        />
      ))}
    </div>
  );
};

export default TodoItems;
