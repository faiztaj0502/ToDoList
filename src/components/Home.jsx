import React, { useState } from "react";
import { Col, Row, } from "react-bootstrap";
import { ToDoList } from "./toDoList/ToDoList";
import { AddTodo } from "./toDoList/AddTodo";
import 'bootstrap/dist/css/bootstrap.min.css';
import './toDoList/Todo.css';
export const Home = () => {
    const [todoitem, setTodoitem] = useState([]);
    const handleAdd = (newTodo) => {
        setTodoitem([...todoitem, newTodo]);
    }
    const handleDelete = (curritem) => {
        const filtered = todoitem.filter((item) => item !== curritem)
        setTodoitem([...filtered]);

    }
    return (
        <div>
            <Row>

                <Col>
                    <AddTodo handleAdd={handleAdd} />
                </Col>
                <Col>

                    {todoitem.length > 0 ? (<ToDoList todoitem={todoitem} handleDelete={handleDelete} />) :
                        <span>Add you tasks</span>}
                </Col>
            </Row>
        </div>
    )
}