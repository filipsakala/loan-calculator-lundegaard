import { render, screen } from "@testing-library/react";
import Home from "./page";
import StoreProvider from "./StoreProvider";
import RecoilProvider from "./RecoilProvider";
import QueryProvider from "./QueryProvider";

it("displays home page", () => {
  render(
    <StoreProvider>
      <RecoilProvider>
        <QueryProvider>
          <Home />
        </QueryProvider>
      </RecoilProvider>
    </StoreProvider>
  );

  const titleElem = screen.getByText("MyBank - Dej nám svoje peníze 😿");

  expect(titleElem).toBeDefined();
});
