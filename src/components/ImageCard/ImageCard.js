import React from 'react';
import './ImageCard.css';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
    this.state = { spans: 1 };
  }

  componentDidMount(props) {
    this.imageRef.current.addEventListener('load', this._setSpans);
  }

  _setSpans = () => {
    const spans = Math.ceil(this.imageRef.current.clientHeight / 10);
    this.setState({ spans });
  };

  render() {
    const { image } = this.props;

    return (
      <div
        className="image-card"
        style={{ gridRowEnd: `span ${this.state.spans}` }}
      >
        <img
          ref={this.imageRef}
          alt={image.description}
          src={image.urls.regular}
          data-testid="image"
        />
      </div>
    );
  }
}

export default ImageCard;
