import { useRef, useState} from "react";
import { Todo } from "./Todo";

export function useTodos(initialData: Todo[]) {
    const id = useRef(0);

    const [ todos, setTodos ] = useState(initialData);

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

    return {
        todos,
        addTodo,
        deleteTodo,
        handleCheck,
    }
}
