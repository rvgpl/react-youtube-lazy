import React from "react";
import { shallow } from "enzyme";

import Youtube from "../Youtube";

const sampleVideoId = "dQw4w9WgXcQ";
describe("Youtube", () => {
  it("renders component with default thumbnail", () => {
    const wrapper = shallow(<Youtube id={sampleVideoId} />);
    expect(wrapper.find(".react-youtube-lazy-thumbnail").length).toBe(1);
  });

  it("should render the default image size", () => {
    const wrapper = shallow(<Youtube id={sampleVideoId} />);
    expect(wrapper.find(".react-youtube-lazy-thumbnail").prop("src")).toBe(
      "https://img.youtube.com/vi/dQw4w9WgXcQ/default.jpg"
    );
  });

  it("should render big resolution image as thumbail", () => {
    const wrapper = shallow(<Youtube id={sampleVideoId} imageSize="hqdefault" />);
    expect(wrapper.find(".react-youtube-lazy-thumbnail").prop("src")).toBe(
      "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
    );
  });

  it("should render iframe on click of thumbnail", () => {
    const wrapper = shallow(<Youtube id={sampleVideoId} />);
    expect(wrapper.state("showVideo")).toBe(false);
    wrapper.find(".react-youtube-lazy-thumbnail").simulate("click");
    expect(wrapper.state("showVideo")).toBe(true);
    expect(wrapper.find(".react-youtube-lazy-video").length).toBe(1);
  });
});
