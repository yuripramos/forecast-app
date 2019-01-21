import React from "react";
import { shallow, mount } from "enzyme";
import { Menu } from "../../utils/getMenuFooter";
import Footer from "./Footer";
import { Links } from "./styles";

describe("Footer component", () => {
  it("should match snapshot", () => {
    expect(shallow(<Footer />)).toMatchSnapshot();
  });
  it("should render menu items", () => {
    expect(mount(<Footer />).find(Links).length).toBe(Menu.length);
  });
});
