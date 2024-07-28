import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header", () => {
  it("Should be visible", () => {
    render(<Header title="Header" />);
    const headerElement = screen.getByText("Header");
    expect(headerElement).toBeVisible();
  });
});

it("should have the correct background color when disabled", () => {
  render(<Header title="Disabled Header" disabled />);
  const headerElement = screen.getByText("Disabled Header");
  expect(headerElement).toHaveStyle("opacity: 0.5");
  expect(headerElement).toHaveStyle("cursor: not-allowed");
});
