import { render, screen } from "@testing-library/react";
// import { act } from "react";

// import * as React from 'react'
// import { DeprecatedReactTestUtils } from "react-dom/test-utils";
// import * as DeprecatedReactTestUtils from "react-dom/test-utils";

import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
