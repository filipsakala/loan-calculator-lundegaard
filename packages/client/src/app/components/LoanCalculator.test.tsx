import { fireEvent, render, screen } from "@testing-library/react";
import StoreProvider from "../StoreProvider";
import RecoilProvider from "../RecoilProvider";
import QueryProvider from "../QueryProvider";
import LoanCalculator from "./LoanCalculator";

const WrappedComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <RecoilProvider>
        <QueryProvider>{children}</QueryProvider>
      </RecoilProvider>
    </StoreProvider>
  );
};

it("displays calculator", () => {
  render(
    <WrappedComponent>
      <LoanCalculator />
    </WrappedComponent>
  );

  const titleElem = screen.getByText("Express půjčku schválíme do 5 minut");
  const [sliderAmountElem, inputAmountElem] =
    screen.getAllByDisplayValue("100000");
  const [sliderLengthElem, inputLengthElem] = screen.getAllByDisplayValue("96");

  expect(titleElem).toBeDefined();
  expect(sliderAmountElem).toBeDefined();
  expect(inputAmountElem).toBeDefined();
  expect(sliderLengthElem).toBeDefined();
  expect(inputLengthElem).toBeDefined();
});

it("can change loan amount with correct update", () => {
  render(
    <WrappedComponent>
      <LoanCalculator />
    </WrappedComponent>
  );

  const [sliderAmountElem, inputAmountElem] =
    screen.getAllByDisplayValue("100000");

  expect(sliderAmountElem).toBeDefined();
  expect(inputAmountElem).toBeDefined();

  // change input, watch slider
  fireEvent.change(inputAmountElem, { target: { value: "150000" } });
  expect(sliderAmountElem.value).toBe("150000");

  // change slider, watch input
  fireEvent.change(sliderAmountElem, { target: { value: "20000" } });
  expect(inputAmountElem.value).toBe("20000");
});
