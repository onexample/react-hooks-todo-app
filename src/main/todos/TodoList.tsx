import React, { FunctionComponent } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Todo } from './Todo';

interface TodoListProps {
    todos: Todo[];
    onItemClick: (index: number) => void
};

const TodoList: FunctionComponent<TodoListProps> = ({ todos, onItemClick }) => {

    return (
        <List>
            {todos.map((todo, index) => (
                <ListItem key={index.toString()} dense button>
                    <ListItemText primary={todo.text} />
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" onClick={() => { onItemClick(index); }} >
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );

}

export default TodoList;
