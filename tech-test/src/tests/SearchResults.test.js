import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  it("renders SearchResult component correctly", () => {
    const { asFragment } = render(<SearchResults/>)

    expect(asFragment()).toMatchSnapshot();
  });
});