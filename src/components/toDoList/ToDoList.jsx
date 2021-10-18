import React from "react";
import { Card } from "react-bootstrap";
import { TodoItems } from "./Todoitem";
export const ToDoList = ({ todoitem, handleDelete }) => {
    return (
        <div>
            <Card className="todolist" >
                {todoitem.map((item) => <TodoItems item={item} handleDelete={handleDelete} />)}

            </Card>
        </div>
    )
}