import React from 'react';
import { render, getByPlaceholderText, RenderResult, fireEvent, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoForm from './TodoForm';

describe('TodoForm', () => {

    let renderOutput: RenderResult;
    const submitSpy = jest.fn();

    beforeEach(() => {
        renderOutput = render(
            <TodoForm onSubmit={submitSpy} />
        );
    });

    it('should render an input', () => {
        const { container } = renderOutput;
        const input = getByPlaceholderText(container, 'Add todo');
        const form = getByTestId(container, 'todo-form');
        expect(form).toHaveClass('Form');
        expect(input).toHaveValue('')
    });

    it('should handle an input', () => {
        const { container } = renderOutput;
        const input = getByPlaceholderText(container, 'Add todo');
        fireEvent.input(input, { target: { value: 'some string' } });
        expect(input).toHaveValue('some string');
    });
});
