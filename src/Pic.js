import { Component } from "react";

class Pic extends Component {
  static defaultProps = {
    source: `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`,
    description: "no image",
  };

  render() {
    const { source, description } = this.props;
    return <img src={source} alt={description} />;
  }
}

export default Pic;
