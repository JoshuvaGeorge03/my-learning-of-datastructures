/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Counter from "..";

describe('Counter Testing', () => {

    let rootNode = null;

    beforeEach(() => {
        rootNode = document.createElement('div');
        document.body.appendChild(rootNode);
    });

    afterEach(() => {
        unmountComponentAtNode(rootNode);
        rootNode.remove();
        rootNode = null;
    });

    test('whether counter component render successfully', () => {
        act(() => {
            render(<Counter />, rootNode);
        });
        const countElement = document.querySelector('#countContainer');

        expect(countElement.textContent).toBe("0");

        const incrementButton = document.getElementById('increment');
        const decrementButton = document.getElementById('decrement');

        act(() => {
            incrementButton.dispatchEvent(new MouseEvent('click', {bubbles: true}));
        });

        expect(countElement.textContent).toBe('1');

        act(() => {
            decrementButton.dispatchEvent(new MouseEvent('click', {bubbles: true}));
        });

        expect(countElement.textContent).toBe('0');

    });
});
