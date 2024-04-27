import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Formulario() {
    return (
        <Form>
            <InputGroup className="mb-3">
                <InputGroup.Text id="Name">Name</InputGroup.Text>
                <Form.Control
                    placeholder="Name of task or goal"
                    aria-label="name"
                    aria-describedby="name"
                />
            </InputGroup>

            <InputGroup>
                <InputGroup.Text>Description</InputGroup.Text>
                <Form.Control
                    as="textarea" aria-label="description"
                    placeholder='Description of task or goal' />
            </InputGroup>

            <div>
                <Button variant="info" type="submit">
                    Submit
                </Button>
            </div>
        </Form>
    );
}

export default Formulario;