import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  const validProps = {
    results: ["img1", "img2", "img3"]
  };
  
  it("renders SearchResult component correctly", () => {
    const { asFragment } = render(
    <SearchResults
      results={validProps.results}
    />)

    expect(asFragment()).toMatchSnapshot();
  });
});