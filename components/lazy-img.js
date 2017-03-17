import React from "react";
import debounce from "lodash/debounce";

const inBrowser = typeof window !== "undefined";

export default class LazyImg extends React.Component {
  static prefetch(url) {
    const image = new window.Image();
    image.src = url;
  }

  constructor() {
    super();

    this.state = {
      visible: false
    };

    this.element = null;
    this.elementRef = el => {
      this.element = el;
    };

    this.handleViewportChange = debounce(this.checkVisibility.bind(this), 100);
  }

  componentDidMount() {
    if (inBrowser) {
      window.addEventListener("resize", this.handleViewportChange);
      window.addEventListener("scroll", this.handleViewportChange);
      if (this.element) {
        this.checkVisibility();
      }
    }
  }

  componentWillUnmount() {
    if (inBrowser) {
      window.removeEventListener("resize", this.handleViewportChange);
      window.removeEventListener("scroll", this.handleViewportChange);
    }
  }

  checkVisibility() {
    const rect = this.element.getBoundingClientRect();
    const inViewport = 
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    if (inViewport) {
      window.removeEventListener("resize", this.handleViewportChange);
      window.removeEventListener("scroll", this.handleViewportChange);
      this.element = null;
      this.setState({
        visible: true
      });
    }
  }

  render() {
    const { className, style } = this.props;
    const { visible } = this.state;
    return visible
      ? <img {...this.props} />
      : <span ref={this.elementRef} className={className} style={style} />;
  }
}
