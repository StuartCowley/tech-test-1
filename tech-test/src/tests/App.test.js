import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../components/App";

describe("App", () => {
  it("renders App component correctly", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders NASA logo", () => {
    render(<App />);
    const nasaLogo = screen.getByAltText("nasa-logo")
    expect(nasaLogo).toHaveClass("nasa-logo");
    expect(nasaLogo).toBeInTheDocument();
  });
});
