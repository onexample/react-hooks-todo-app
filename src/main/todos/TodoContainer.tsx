import React, { FunctionComponent, useState, Fragment } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { Todo } from './Todo';

export interface TodoContainerProps {
    initial?: Todo[];
}

const TodoContainer: FunctionComponent<TodoContainerProps> = ({initial = []}) => {

    const [todos, setTodos] = useState<Todo[]>(initial);

    const addTodo = (text: string) => {
        const payload = [...todos, {text}];
        setTodos(payload);
    }

    const deleteTodo = (index: number) => {
        const payload = [...todos];
        payload.splice(index, 1);
        setTodos(payload);
    }

    return (
        <Fragment>
            <TodoForm onSubmit={addTodo}></TodoForm>
            <TodoList todos={todos} onItemClick={deleteTodo}></TodoList>
        </Fragment>
     );
}

export default TodoContainer;
