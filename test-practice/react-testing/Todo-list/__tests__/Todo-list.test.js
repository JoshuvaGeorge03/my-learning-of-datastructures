/**
 * @jest-environment jsdom
 */

import React from "react";
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import TodoList from "..";

describe('TodoListTesting', () => {
    test('whether todolist rendered correctly', () => {
        
        render(<TodoList />);

        const addButtonEl = screen.getByText(/Add/i);

        expect(addButtonEl).toBeInTheDocument();
    });

    test('whether list render with default data', () => {
        render(<TodoList needDefault />);

        const listEle = screen.getByText(/joshuva/);

        expect(listEle.textContent).toBe('joshuva');
    });

    test('whether list render with initial set of data', () => {
        
        render(<TodoList initialTodos={['I am going to rocking', 'life goes on', 'finding clamness inside matters']} />);

        const listElements = screen.getAllByTestId('listElements');

        expect(listElements).toHaveLength(3);

        const listEl = screen.getByText('life goes on');

        expect(listEl).toHaveTextContent('life goes on');
        expect(listEl).toBeInTheDocument();
    });

    test('whether list render with default value and with initial set of data', () => {

        render(<TodoList initialTodos={['I am rocking', 'what what']} needDefault />)


        const listElements = screen.getAllByTestId('listElements');
        expect(listElements).toHaveLength(3);

        const defaultListEl = screen.getByText(/joshuva/);
        expect(defaultListEl).toBeInTheDocument();

        const initialListEl = screen.getByText(/I am rocking/);
        expect(initialListEl).toBeInTheDocument();

    });

    test('whether list elements adding correctly', () => {
        
        render(<TodoList />);

        const inputEle = screen.getByTestId('todoListInput');
        

    });
});
