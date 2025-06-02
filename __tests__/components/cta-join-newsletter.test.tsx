import CTAJoinNewsletter from "@/components/CTAJoinNewsletter";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const renderComponent = () =>
  render(
    <ChakraProvider value={defaultSystem}>
      <CTAJoinNewsletter />
    </ChakraProvider>
  );

describe("CTA Join News Letter component", () => {
  beforeEach(() => {
    renderComponent();
  });

  it("renders cta title", () => {
    const value = screen.getByText("Get News & Updates");
    expect(value).not.toBeFalsy();
  });
});
