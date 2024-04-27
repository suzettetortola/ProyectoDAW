import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss'

function Item() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title><b>Name</b></Card.Title>
                <Card.Text>
                    Proyecto de Curso de Desarrollo Web
                </Card.Text>
                <Card.Text><b>
                    Description
                </b></Card.Text>
                <Card.Text>
                    Elaborar una aplicacion web responsive en la que se pueda llevar control de mis metas y tareas personales
                </Card.Text>
                <Card.Text><b>Due Date:</b></Card.Text>
                <Card.Text>04/26/2024</Card.Text>
                <Button variant="info">Remove</Button>
            </Card.Body >
        </Card >
    );
}

export default Item;