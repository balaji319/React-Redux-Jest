import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr } from "./../../../Utils";
import Header from "./index";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });
  it("Should render without err ", () => {
    // const component = setUp();
    // console.log(component.debug());
    const wrapper = findByTestAtrr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a logo", () => {
    // const component = setUp();
    // console.log(component.debug());
    const logo = findByTestAtrr(component, "logoIMG");
    expect(logo.length).toBe(1);
  });
});
