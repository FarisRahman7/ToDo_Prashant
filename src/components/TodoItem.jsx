import { AiFillDelete } from "react-icons/ai";

function TodoItem({TodoName,TodoDate,onDeleteClick}) {
  // let buttonClassName = 'btn btn-danger kg-button';

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button type="button" className='btn btn-danger kg-button' onClick={()=>onDeleteClick(TodoName,TodoDate)}>
          <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;

