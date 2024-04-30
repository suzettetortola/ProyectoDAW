// import logo from './logo192.png';
import './App.scss';
import Item from './Components/Item/Item';
import Formulario from './Components/Formulario/Formulario';
import Menu from './Components/Menu/Menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';

// const list = [
//   {
//     'name': 'Curso 1',
//     'description': 'Ganar DAW',
//     'dueDate': '29/04/24'
//   },
//   {
//     'name': 'Curso 2',
//     'description': 'Ganar DAW',
//     'dueDate': '29/04/24'
//   },
//   {
//     'name': 'Curso 3',
//     'description': 'Ganar DAW',
//     'dueDate': '29/04/24'
//   }
// ]

function App() {
  const goals = useSelector((state) => state.goals.value);
  return (
    <div className="App">
      <Menu></Menu>
      <Container>
        <Row>
          <Col xs={6}><Formulario></Formulario></Col>
        </Row>
        <Row>
          <div>
            {goals.map((task, index) => (
              <Col xs={4} key={index}><Item name={task.name} description={task.description} dueDate={task.dueDate}></Item></Col>
            ))}
          </div>
        </Row>
      </Container>
    </div >
  );
}

export default App;
