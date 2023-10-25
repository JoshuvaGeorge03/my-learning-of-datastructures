/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { RandomNumberGeneration } from "..";

describe("RandomNumberGeneration", () => {
  test("whether random number generation worked without seed", async () => {
    render(<RandomNumberGeneration />);

    const button = screen.getByText(/click me to generate .*/);

    expect(button).toBeInTheDocument();
  });
});
