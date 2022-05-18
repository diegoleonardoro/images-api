import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef(); // if we reference "this.imageRef" inside the "ref" tag of the image, it will give us some information about the image.
  }

  componentDidMount() {
    // imageRef is referencing the img tag because we passed it to "ref" inside the img element.

    this.imageRef.current.addEventListener("load", this.setSpans); // we need to add an event listener to the image because, only when it loads we will be able too see the
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10) +1; // 150 because each grid has 150 of height, and plus 1 because we want an extra cell

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style ={{ gridRowEnd:`span ${this.state.spans}`}} >
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
