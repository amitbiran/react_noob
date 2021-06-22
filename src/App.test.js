import { render } from "@testing-library/react";
// import { react } from "react";
import { App } from "./App";

test("renders an h1", () => {
  const { getByText } = render(<App />);
  const h1 = getByText(/hello react testing lib/);
  expect(h1).toHaveTextContent("hello react testing lib");
});
