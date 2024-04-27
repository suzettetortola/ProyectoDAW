// import logo from './logo192.png';
import './App.scss';
import Item from './Components/Item/Item';
import Formulario from './Components/Formulario/Formulario';
import Menu from './Components/Menu/Menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Container>
        <Row>
          <Col xs={6}><Formulario></Formulario></Col>
        </Row>
        <Row>
          <Col><Item></Item></Col>
          <Col><Item></Item></Col>
          <Col><Item></Item></Col>
          <Col><Item></Item></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
