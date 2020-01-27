import React, { FunctionComponent } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import { Todo } from './Todo';

interface TodoListProps {
    todos: Todo[];
    onItemClick: (todo: Todo) => void;
    onCheck: (todo: any) => void;
};

const TodoList: FunctionComponent<TodoListProps> = ({ todos, onItemClick, onCheck }) => {

    return (
        <List>
            {todos.map((todo, index) => (
                <ListItem key={index.toString()} dense button>
                    <Checkbox
                        edge="start"
                        checked={todo.done}
                        tabIndex={-1}
                        disableRipple
                        onChange={() => onCheck(todo)}
                    />
                    <ListItemText primary={`Todo #: ${todo.id}`} secondary={todo.text}/>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" onClick={() => { onItemClick(todo); }} >
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );

}

export default TodoList;
