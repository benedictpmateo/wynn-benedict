import Button from "@/components/Button";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const renderComponent = () =>
  render(
    <ChakraProvider value={defaultSystem}>
      <Button>Hello world</Button>
    </ChakraProvider>
  );

describe("Button component", () => {
  beforeEach(() => {
    renderComponent();
  });

  it("shows that button is available", () => {
    const links = screen.getByRole("button");
    expect(links).not.toBeFalsy();
  });

  it("renders the button text", () => {
    const value = screen.getByText("Hello world");
    expect(value).not.toBeFalsy();
  });
});
