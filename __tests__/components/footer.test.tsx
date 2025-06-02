import Footer from "@/components/Footer";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const renderFooter = () =>
  render(
    <ChakraProvider value={defaultSystem}>
      <Footer />
    </ChakraProvider>
  );

describe("Footer component", () => {
  beforeEach(() => {
    renderFooter();
  });

  it("shows that footer links is available", () => {
    const links = screen.getAllByRole("link");
    expect(links).not.toBeFalsy();
  });

  it("renders each link in the document", () => {
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toBeInTheDocument();
    });
  });

  it("renders the footer social icon buttons", () => {
    const icons = screen.getAllByRole("button");
    icons.forEach((link) => {
      expect(link).toBeInTheDocument();
    });
  });
});
