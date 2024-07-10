import { render, screen } from "@testing-library/react";
import Home from "./page";

it("displays home page", () => {
  render(<Home />);

  const titleElem = screen.getByText("Get started by editing");

  expect(titleElem).toBeDefined();
});
