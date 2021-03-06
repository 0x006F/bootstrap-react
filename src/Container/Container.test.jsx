import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Container from "./Container";

Enzyme.configure({ adapter: new Adapter() });
describe("Container Element Tests", () => {
  it("should render a div without failure", () => {
    const wrapper = shallow(<Container />);
    expect(wrapper.type()).toEqual("div");
  });

  it("should render a div with container as it's class name", () => {
    const wrapper = shallow(<Container />);
    expect(wrapper.hasClass("container")).toEqual(true);
  });

  it("should render a div with container-fluid as it's class name", () => {
    const wrapper = shallow(<Container fluid />);
    expect(wrapper.hasClass("container-fluid")).toEqual(true);
    expect(wrapper.hasClass("container")).toEqual(false);
  });

  it("should render a container with children without failing", () => {
    const wrapper = shallow(<Container>Hello World!</Container>);
    expect(wrapper.text()).toEqual("Hello World!");
  });
});
