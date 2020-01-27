import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from "./TodoList";

describe('TodoList', () => {

    afterEach(cleanup);

    let renderOutput: any;
    const onCheck = jest.fn();
    const onItemClick = jest.fn();
    const todos = [
        {id: 1, text: 'wtf', done: false}
    ];


    beforeEach(() => {
        renderOutput = render(
            <TodoList
                todos={todos}
                onCheck={onCheck}
                onItemClick={onItemClick}
            />
        );
    });

    it('should contain items', () => {
        const { container } = renderOutput;
        expect(container).toHaveTextContent(todos[0].text)

    });

    it('should handle item click', () => {
        const { container } = renderOutput;
        const btn = container.querySelector('[aria-label="Delete"]');
        fireEvent.click(btn);
        expect(onItemClick.mock.calls).toEqual([[todos[0]]]);
    })

});
