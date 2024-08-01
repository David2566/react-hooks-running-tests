import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Header from "../components/Header";

test("displays the text  'hello from the header!'", () => {
  render(<Header />);

  expect(screen.queryByText("hello from the header!")).toBeInTheDocument();
});
