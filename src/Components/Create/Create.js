import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import shortid from "shortid";
import "./create.css";

const Create = ({ addActivity }) => {
  const initialState = {
    id: "",
    work: "",
    state: false,
  };

  const handleWork = (e) => {
    const { name, value } = e.target;
    setWork({
      ...work,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { work: task } = work;

    //verificar que la tarea tenga algo
    if (task.trim() === "") return;

    const workObject = {
      ...work, // {id: '', tarea: '', state: false}
      id: shortid(),
    };

    setWork(initialState);
    addActivity(workObject);
  };

  const [work, setWork] = useState(initialState);

  return (
    <>
      <h3 className="mt-5">Crear tarea </h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            name="work"
            value={work.work}
            onChange={handleWork}
            placeholder="Ingrese la tarea a realizar"
          />
        </Form.Group>

        <Button variant="primary" type="submit" block>
          Agregar tarea
        </Button>
      </Form>
    </>
  );
};

export default Create;
