import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import CTAJoinNewsletter from "@/components/layout/cta-join-newsletter";

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
