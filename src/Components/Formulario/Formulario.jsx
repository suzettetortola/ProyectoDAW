import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import {
    addGoal
} from '../../Reducers/goalsSlice';
import { useRef } from 'react';

function Formulario(props) {

    const inputRefName = useRef();
    const inputRefDescription = useRef();
    const inputRefDueDate = useRef();

    const dispatch = useDispatch();

    const addItem = (e) => {
        e.preventDefault();
        dispatch(addGoal({ 'name': inputRefName.current.value, 'description': inputRefDescription.current.value, 'dueDate': inputRefDueDate.current.value }));
    }

    return (
        <Form className='w-75'>
            <InputGroup className="my-3">
                <InputGroup.Text id="Name">Name</InputGroup.Text>
                <Form.Control
                    placeholder="Name of task or goal"
                    aria-label="name"
                    aria-describedby="name"
                    ref={inputRefName}
                />
            </InputGroup>

            <InputGroup className="my-3">
                <InputGroup.Text>Description</InputGroup.Text>
                <Form.Control
                    as="textarea" aria-label="description"
                    placeholder='Description of task or goal'
                    ref={inputRefDescription}
                />
            </InputGroup>

            <InputGroup className="my-3">
                <InputGroup.Text>Due Date</InputGroup.Text>
                <Form.Control
                    aria-label="dueDate"
                    type="date"
                    placeholder="name@example.com"
                    ref={inputRefDueDate}
                />
            </InputGroup>

            <div>
                <Button variant="info" onClick={addItem} type="submit">
                    Submit
                </Button>
            </div>
        </Form>
    );
}

export default Formulario;