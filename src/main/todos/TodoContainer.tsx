import React, {FunctionComponent, useState, Fragment, useRef} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { Todo } from './Todo';

export interface TodoContainerProps {
    initial?: Todo[];
}

const TodoContainer: FunctionComponent<TodoContainerProps> = ({initial = []}) => {
    const id = useRef(0);
    const [todos, setTodos] = useState<Todo[]>(initial);

    const addTodo = (text: string) => {
        id.current += 1;
        const newItem: Todo = {
            text,
            id: id.current,
            done: false
        };
        const payload = [...todos, newItem];
        setTodos(payload);
    };

    const deleteTodo = (todo: Todo) => {
        const payload = [...todos];
        const index = payload.indexOf(todo);
        payload.splice(index, 1);
        setTodos(payload);
    };

    const handleCheck = ( todo: Todo ) => {
        const payload = [...todos];
        const index = payload.indexOf(todo);
        payload[index].done = !payload[index].done;
        setTodos(payload)

    };

    return (
        <Fragment>
            <TodoForm onSubmit={addTodo}></TodoForm>
            <TodoList todos={todos} onItemClick={deleteTodo} onCheck={handleCheck}></TodoList>
        </Fragment>
     );
};

export default TodoContainer;
