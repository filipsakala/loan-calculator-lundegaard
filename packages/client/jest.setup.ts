import "@testing-library/jest-dom";

jest.mock("@uidotdev/usehooks", () => {
  return {
    useDebounce: jest.fn(),
  };
});
