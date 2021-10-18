import React, { useState } from "react";
import { Form, Col, Row, Button, Card } from 'react-bootstrap'
export const AddTodo = ({ handleAdd }) => {
    const [todotext, setTodotext] = useState("");
    return (
        <div>
            <Card>
                <Row>
                    <Col md={10}>
                        <Form.Control type="text" onChange={(e) => setTodotext(e.target.value)}>

                        </Form.Control>
                    </Col>
                    <Col>
                        <Button onClick={() => {
                            setTodotext("");
                            handleAdd(todotext);
                        }}>
                            Add ToDo
                        </Button>
                    </Col>
                </Row>
            </Card>
        </div >
    );
};