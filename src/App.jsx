// import logo from './logo192.png';
import './App.scss';
import Item from './Components/Item/Item';
import Formulario from './Components/Formulario/Formulario';
import Menu from './Components/Menu/Menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { initAddTasks } from './Reducers/tasksSlice';
import { initAddGoals } from "./Reducers/goalsSlice";

function App() {

  const goals = useSelector((state) => state.goals.value);
  const tasks = useSelector((state) => state.tasks.value);

  function initFetch() {
    fetch("http://localhost:3000/tasks/getTasks", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": "123456"
      }
    }).then((response) => {
      return response.json();
    }).then((response) => {
      response.map((taska) => {
        dispatch((initAddTasks(response)));
      })
    })
  }

  useEffect(() => {
    initFetch();
  }, []);

  return (
    <div className="App">
      <Menu />
      <Container>
        <Row>
          <Col xs={12} className='d-flex justify-content-center'>
            <Formulario />
          </Col>
        </Row >
        <Row className='d-flex justify-content-center'>
          {
            goals.map((goal, index) => (
              <Item name={goal.name} description={goal.description} dueDate={goal.dueDate} />
            ))
          }
          {
            tasks.map((task, index) => (
              <Item name={task.name} description={task.description} dueDate={task.dueDate} />
            ))
          }
        </Row>
      </Container>
    </div >
  );
}

//border border-1 border-danger

export default App;