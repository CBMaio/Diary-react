import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Create from "./Components/Create";
import List from "./Components/List";
import Header from "./Components/Header";
import bgImage from "./Assets/Images/backgroundDesktop.jpeg"
import './app.css';

function App() {
  const [activities, setActivities] = useState([]);

  //recibe las actividades de Create
  const addActivity = (activity) => {
    setActivities([...activities, activity]);
  };

  const deleteActivity = (id) => {
    //filtro. Quedan todas las tareas menos la que elimine
    //filter retorna un vector
    const newActivities = activities.filter((activity) => activity.id !== id);
    setActivities(newActivities);
  };

  const changeActivity = (id) => {
    //encuentro la actividad que me llega por id
    const selectActivity = activities.find((activity) => activity.id === id);

    //nuevo objeto modificando el estado, el contrario del estado de la actividad
    let selectActivity2 = {
      ...selectActivity,
      state: selectActivity.state === true ? false : true,
    };

    //a la actividad le reemplazo el estado con el estado del nuevo objeto
    selectActivity.state = selectActivity2.state;
    return selectActivity.state;
  };

  return (
    <Container fluid className = 'principal-section' style={{backgroundImage:`url(${bgImage})`}}>
      <Header title="A new year, a new opportunity"/>
      <Row className="justify-content-center agenda-container">
        <Col md={8} className=" form-container">
          <Create addActivity={addActivity} />
        </Col>
        <Col md={8} className="mt-3 mt-md-5 list-container">
          <List
            activities={activities}
            deleteActivity={deleteActivity}
            changeActivity={changeActivity}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
