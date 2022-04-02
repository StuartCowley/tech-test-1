import { render, screen } from "@testing-library/react";
import React from "react";
import Search from "../components/Search";

describe("Search", () => {

  const validProps = {
    setSearchResults: () => {}
  };

  it("renders Search component correctly", () => {
    const { asFragment } = render(
    <Search 
      setSearchResults={validProps.setSearchResults} 
    />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders button element", () => {
    render(
      <Search
        setSearchResults={validProps.setSearchResults}
      />
    );
    const launchButton = screen.getByText("Launch!")
    expect(launchButton).toHaveClass("search-button");
    expect(launchButton).toBeInTheDocument();
  })
});