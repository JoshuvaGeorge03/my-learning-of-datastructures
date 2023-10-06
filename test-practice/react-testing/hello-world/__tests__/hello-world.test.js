import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import HelloWorld from '..';

describe('Hello world', () => {
    let rootEl = null
    beforeEach(() => {
        rootEl = document.createElement('div');
        document.body.appendChild(rootEl);
    });

    afterEach(() => {
        unmountComponentAtNode(rootEl);
        rootEl.remove();
        rootEl = null;
    });

    test('whether component render correct content', () => {
        act(() => {
            render(<HelloWorld />, rootEl);
        });
        expect(rootEl.textContent).toBe('hello world')
    });


});