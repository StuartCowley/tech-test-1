import { render } from "@testing-library/react";
import React from "react";
import Search from "../components/Search";

describe("Search", () => {
  it("renders Search component correctly", () => {
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });
});