import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss'

function Item(props) {
    return (
        <Card>
            <Card.Body>
                <Card.Title><b>Name</b></Card.Title>
                <Card.Text>
                    {props.name}
                </Card.Text>
                <Card.Text><b>
                    Description
                </b></Card.Text>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Card.Text><b>Due Date:</b></Card.Text>
                <Card.Text>{props.dueDate}</Card.Text>
                <Button variant="info">Edit</Button>
                <Button variant="info">Remove</Button>
            </Card.Body >
        </Card >
    );
}

export default Item;