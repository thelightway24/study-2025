import "./ToDoItem.css"

function ToDoItem({text, completed}) {
    return (
        <div className="todo-item">
            <input type="checkbox" name="" id="" className="todo-item-checkbox" checked={completed}/>
            <p className="todo-item-text">{text}</p>
            <button className="todo-item-button">수정</button>
            <button className="todo-item-button">삭제</button>
        </div>
    )
}

export default ToDoItem