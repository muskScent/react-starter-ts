import React, { useState } from "react";

import { Col, Row, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [newTaskLabel, setNewTaskLabel] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    setTasks((tasks) => [...tasks, newTaskLabel]);
  };

  const deleteTask = (index: number) => {
    const clone = [...tasks];
    clone.splice(index, 1);
    setTasks(clone);
  };

  return (
    <>
      <Row>
        <Col lg={6} md={6} sm={6}>
          <Form.Group className="mt-5 mb-3" controlId="formBasicEmail">
            <Form.Label>Task</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task label"
              onChange={(event) =>
                setNewTaskLabel(
                  (event.nativeEvent.target as HTMLInputElement).value
                )
              }
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="button" onClick={addTask}>
              Add
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <Table striped bordered hover className="mt-5">
            <thead>
              <tr>
                <th>#</th>
                <th>Task</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{task}</td>
                  <td
                    className="text-center"
                    role="button"
                    onClick={() => deleteTask(index)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}
