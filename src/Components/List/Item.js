import { Alert, Row, Col } from "react-bootstrap";
import { useState } from "react";
import './list.css'

const pointer = {
  cursor: "pointer",
};

const Item = ({ id, work, state, deleteActivity, changeActivity }) => {
  const initialState = state;
  const [stateValue, setStateValue] = useState(false);

  const deleteWork = (e) => {
    const { id } = e.target;
    deleteActivity(id);
  };

  const changeWork = () => {
    setStateValue(changeActivity(id));
  };

  return (
    <Alert key={id} variant={stateValue ? "danger" : "primary"}>
      <Row>
        <Col
          md={11}
          className="d-flex justify-content-between align-items-center"
        >
          <div className="input-container">
            <input type="checkbox" onChange={changeWork} />
            <p
              className="ml-3 mb-0"
              style={{
                textDecoration: stateValue ? "line-through" : "",
              }}
            >
              {work}
            </p>
          </div>
          <p style={pointer} className="mb-0" id={id} onClick={deleteWork}>
            {" "}
            x{" "}
          </p>
        </Col>
      </Row>
    </Alert>
  );
};

export default Item;
