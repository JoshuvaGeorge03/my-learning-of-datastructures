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

        expect(document.querySelector('#countContainer').textContent).toBe("0");

    });
});
