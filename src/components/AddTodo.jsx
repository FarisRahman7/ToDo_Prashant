import { useContext, useRef } from "react";
import { MdAddBox } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const {addNewItem} = useContext(TodoItemsContext);
  // let [todoName,setTodoName]= useState("");
  // let [todoDate,setTodoDate]=useState("");
  // const handleTodoName = (event)=>
  // {
  //   setTodoName(event.target.value);
  // }
  // const handleTodoDate = (event)=>
  // {
  //   setTodoDate(event.target.value);
  // }
    //uisng useRef
    let todoNameElement=useRef();
    let todoDateElement=useRef();
  const handleAddbutton=(event)=>
  {
    event.preventDefault(); 
    let todoName=todoNameElement.current.value;
    let todoDate=todoDateElement.current.value;
    todoNameElement.current.value="";
    todoDateElement.current.value="";
    addNewItem(todoName,todoDate);
  }
  return (
    <div className="container99">
      <form className="row kg-row" onSubmit={handleAddbutton} >
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" ref={todoNameElement} />
        </div>
        <div className="col-4">
          <input type="date" ref={todoDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
          <MdAddBox />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;





// function AddTodo() {
//   return (
//     <div class="container">
//     <div class="row kg-row">
//       <div class="col-6">
//         <input type="text" placeholder="Enter Todo Here" />
//       </div>
//       <div class="col-4">
//         <input type="date" />
//       </div>
//       <div class="col-2">
//         <button type="button" class="btn btn-success kg-button">
//           Add
//         </button>
//       </div>
//     </div>
//     </div>
//   );
// }
// export default AddTodo;