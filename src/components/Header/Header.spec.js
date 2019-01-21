import React from "react";
import { shallow, mount } from "enzyme";
import Header from "./Header";
import { FeaturedImage } from "./styles";
beforeEach(() => {
  jest.mock("../../utils/getResolution");
});

const isResponsive = require("../../utils/getResolution").isResponsive;

describe("Header component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  });
  it("should render responsive header", () => {
    global.innerWidth = 500;
    expect(isResponsive()).toBe(true);
  });
  it("should render desktop header", () => {
    global.innerWidth = 1280;
    expect(!isResponsive()).toBe(false);
  });
  it("should return FeaturedImage Comp", () => {
    global.innerWidth = 1280;

    expect(mount(<Header />).find(FeaturedImage).length).toBe(0);
  });
});
