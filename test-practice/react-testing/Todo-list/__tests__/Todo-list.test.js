/**
 * @jest-environment jsdom
 */

import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import TodoList from "..";

describe("TodoListTesting", () => {
  test("whether todolist rendered correctly", () => {
    render(<TodoList />);

    const addButtonEl = screen.getByText(/Add/i);

    expect(addButtonEl).toBeInTheDocument();
  });

  test("whether list render with default data", () => {
    render(<TodoList needDefault />);

    const listEle = screen.getByText(/joshuva/);

    expect(listEle.textContent).toBe("joshuva");
  });

  test("whether list render with initial set of data", () => {
    render(
      <TodoList
        initialTodos={[
          "I am going to rocking",
          "life goes on",
          "finding clamness inside matters",
        ]}
      />
    );

    const listElements = screen.getAllByTestId("listElements");

    expect(listElements).toHaveLength(3);

    const listEl = screen.getByText("life goes on");

    expect(listEl).toHaveTextContent("life goes on");
    expect(listEl).toBeInTheDocument();
  });

  test("whether list render with default value and with initial set of data", () => {
    render(
      <TodoList initialTodos={["I am rocking", "what what"]} needDefault />
    );

    const listElements = screen.getAllByTestId("listElements");
    expect(listElements).toHaveLength(3);

    const defaultListEl = screen.getByText(/joshuva/);
    expect(defaultListEl).toBeInTheDocument();

    const initialListEl = screen.getByText(/I am rocking/);
    expect(initialListEl).toBeInTheDocument();
  });

  test("whether list elements adding correctly", async () => {
    render(<TodoList />);

    const inputEle = screen.getByTestId("todoListInput");
    await userEvent.type(inputEle, "I want to be cool");
    expect(inputEle).toHaveDisplayValue("I want to be cool");

    const buttonEl = screen.getByText(/add/i);
    await userEvent.click(buttonEl);

    const listEl = screen.getByText("I want to be cool");
    expect(listEl).toBeInTheDocument();

    expect(inputEle).toHaveDisplayValue("");
  });

  test("whether list elements added have finished mark button", async () => {
    render(<TodoList />);

    const inputEle = screen.getByRole("textbox");
    await userEvent.type(inputEle, "cool jos");

    const buttonEle = screen.getByText(/add/i);
    await userEvent.click(buttonEle);

    const listEl = screen.getByText(/cool jos/);
    expect(listEl).toBeInTheDocument();

    const deleteButtonEls = screen.getAllByText(/Finished/);
    expect(deleteButtonEls).toHaveLength(1);
    deleteButtonEls.forEach((deleteEle) =>
      expect(deleteEle).toBeInTheDocument()
    );
  });

  test("whether list elements are deleted", async () => {
    render(<TodoList />);

    const inputEl = screen.getByRole("textbox");
    await userEvent.type(inputEl, "joshuva will have a lot of people's");

    const buttonEle = screen.getByText(/add/i);
    await userEvent.click(buttonEle);

    const listEl = screen.getByText(/joshuva will have a lot of people's/);

    const deleteButtonEl = screen.getByText(/Finished/);
    await userEvent.click(deleteButtonEl);

    expect(listEl).not.toBeInTheDocument();
  });

  test("whether list elements are modified", async () => {
    render(<TodoList />);

    const inputEl = screen.getByRole("textbox");
    await userEvent.type(inputEl, "joshuva don't be scared");

    const buttonEle = screen.getByText(/add/i);
    await userEvent.click(buttonEle);

    const listEl = screen.getByText(/joshuva don't be scared/);
    expect(listEl).toBeInTheDocument();

    await userEvent.click(listEl);

    const editInputEl = screen.getByTestId("editMe");
    expect(editInputEl).toBeInTheDocument();
    expect(editInputEl).toBeVisible();
    
    await userEvent.type(editInputEl, "joshuva is strong");

    const editButtonEl = screen.getByRole("button", { name: /Edit Me/ });
    await userEvent.click(editButtonEl);

    const newListEl = screen.getByText(/joshuva don't be scared/);

    expect(newListEl.textContent).toBe("joshuva don't be scaredjoshuva is strong");
  });
});
