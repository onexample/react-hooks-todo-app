import React, { FunctionComponent, useState, FormEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export interface TodoFormProps {
    initial?: string;
    onSubmit: (v: string) => void;
}

const TodoForm: FunctionComponent<TodoFormProps> = ({ initial = '', onSubmit }) => {

    const [value, setValue] = useState(initial);

    const onFormSubmit = (event: FormEvent) => {
        event.preventDefault();
        onSubmit(value);
        setValue(initial);
    }

    return (
        <form className="Form" onSubmit={event => onFormSubmit(event)}>
            <TextField
                placeholder="Add todo"
                margin="normal"
                onChange={event => setValue(event.target.value)}
                value={value}
            />
            <Button  type="submit">Add</Button>
        </form>
    );
}

export default TodoForm;
