import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector, useDispatch } from 'react-redux';
import { changeOption } from '../../Reducers/optionsSlice';

function Menu() {
    const option = useSelector((state) => state.option.value);
    const dispatch = useDispatch();

    const changeOptionFunction = (e) => {
        e.preventDefault();
        if (option === 'tasks')
            dispatch(changeOption('goals'));
        else
            dispatch(changeOption('tasks'))
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#myapp">My App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link eventKey='tasks' onClick={changeOptionFunction}>Tasks</Nav.Link>
                        <Nav.Link eventKey='goals' onClick={changeOptionFunction}>Goals</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;