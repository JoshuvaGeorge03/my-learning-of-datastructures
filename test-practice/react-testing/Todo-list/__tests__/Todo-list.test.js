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
    })
});
