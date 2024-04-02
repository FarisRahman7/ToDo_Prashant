import { createContext} from "react";
import { useReducer } from "react";
import TodoItems from "../components/TodoItems";
export const TodoItemsContext =createContext({
  todoItems: [],
  addNewItem: ()=>{},
  deleteItem : ()=>{}
});

const todoItemsReducer=(currTodoItems,action)=>
{
  let newTodoItems=currTodoItems;
  if(action.type ==="NEW_ITEM")
  {
    newTodoItems=[...currTodoItems,
      {name : action.payload.itemName , dueDate : action.payload.itemDate}
    ];
  }
  else if(action.type === "DELETE_ITEM")
  {
    newTodoItems=currTodoItems.filter((item) => !(item.name === action.payload.itemName && item.dueDate === action.payload.itemDate));
  }
  return newTodoItems;
}


const TodoItemsContextProvider =({children})=>{
  let [todoItems,dispatchTodoItems] = useReducer(todoItemsReducer,[]);
  
  const addNewItem=(todoName,todoDate)=>{
    const todoAction={
      type : "NEW_ITEM",
      payload : {
        itemName: todoName,
        itemDate: todoDate
      }
    }
    dispatchTodoItems(todoAction);
  };

  const deleteItem=(todoName,todoDate) =>{
    const todoAction={
      type: "DELETE_ITEM",
      payload:{
        itemName :todoName,
        itemDate :todoDate,
      }
    }
    dispatchTodoItems(todoAction);
  };

  return(

    <TodoItemsContext.Provider value={
      {todoItems :todoItems,
      addNewItem : addNewItem,
      deleteItem : deleteItem }}>
        {children}
      </TodoItemsContext.Provider>

  );

};
export default TodoItemsContextProvider;