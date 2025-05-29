import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "@/components/Header/Header";
import { LANDING_PAGE_HEADER_ITEMS } from "@/lib/configs/landing-page";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

const renderHeader = () =>
  render(
    <ChakraProvider value={defaultSystem}>
      <Header />
    </ChakraProvider>
  );

describe("Header component", () => {
  beforeEach(() => {
    renderHeader();
  });

  it("renders the header links", () => {
    const headerLinks = screen.getAllByRole("link");
    expect(headerLinks).not.toBeFalsy();
    expect(headerLinks.length).toBeGreaterThanOrEqual(
      LANDING_PAGE_HEADER_ITEMS.length
    );
  });

  it("renders each link in the document", () => {
    const headerLinks = screen.getAllByRole("link");
    headerLinks.forEach((link) => {
      expect(link).toBeInTheDocument();
    });
  });

  it("renders the header logo", () => {
    const headerLogo = screen.getByRole("img");
    expect(headerLogo).toBeInTheDocument();
  });
});
