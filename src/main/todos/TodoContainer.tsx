import React, { FunctionComponent, Fragment } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { Todo } from './Todo';
import {useTodos} from './use-todos';

export interface TodoContainerProps {
    initial?: Todo[];
}

const TodoContainer: FunctionComponent<TodoContainerProps> = ({initial = []}) => {
    const { todos, addTodo, handleCheck, deleteTodo } = useTodos(initial);
    return (
        <Fragment>
            <TodoForm onSubmit={addTodo}></TodoForm>
            <TodoList todos={todos} onItemClick={deleteTodo} onCheck={handleCheck}></TodoList>
        </Fragment>
     );
};

export default TodoContainer;
