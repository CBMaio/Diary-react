import Item from "./Item";
import "./list.css";

const List = ({ activities, deleteActivity, changeActivity }) => {
  return (
    <>
      <h3>Listado</h3>
      {activities.length === 0 && <h4>No hay tareas</h4>}
      {activities.map((item) => (
        <Item
          key={item.id}
          {...item}
          deleteActivity={deleteActivity}
          changeActivity={changeActivity}
        />
      ))}
    </>
  );
};

export default List;
