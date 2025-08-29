import ToDoItem from "./ToDoItem"
import "./ToDoList.css"

function ToDoList({data}) {
    return (
        <div className="todo-list">
            <div className="todo-header">
                <input type="checkbox" className="todo-checkbox" name="" id="" />
                <p className="todo-header-text">할일</p>
                <button className="todo-header-button">삭제</button>
            </div>

            <div>
                {data.map((item)=> (
                    <ToDoItem text={item.text} completed={item.completed}/>
                ))}
                
            </div>

        </div>
    )
}

export default ToDoList