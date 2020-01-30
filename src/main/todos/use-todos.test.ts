import { renderHook, act, cleanup } from '@testing-library/react-hooks';
import { useTodos } from "./use-todos";
import {Todo} from "./Todo";

describe('useTodos', () => {
    const data: Todo[] = [];

    it('should have default state', () => {
        const { result } = renderHook(() => useTodos(data))

        expect(result.current.todos).toEqual([])
    });

    it('should add todo', () => {
        const { result } = renderHook(() => useTodos(data));
        act(() => {
            result.current.addTodo('new Todo');
        });
        expect(result.current.todos).toEqual([{id: 1, done: false, text:'new Todo'}])
    });

    it('should delete todo', () => {
        const todos = [
            {id: 1, done: false, text:'todo 1'},
            {id: 2, done: true, text:'todo 2'}
        ];
        const { result } = renderHook(() => useTodos(todos));
        act(() => {
            result.current.deleteTodo(todos[0]);
        });
        expect(result.current.todos).toEqual([{id: 2, done: true, text:'todo 2'}])
    });

    it('should handle check todo', () => {
        const todos = [
            {id: 1, done: false, text:'todo 1'},
            {id: 2, done: false, text:'todo 2'}
        ];
        const { result } = renderHook(() => useTodos(todos));
        act(() => {
            result.current.handleCheck(todos[1]);
        });
        expect(result.current.todos[1].done).toBeTruthy()
    });

});
