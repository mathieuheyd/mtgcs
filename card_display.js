'use strict';

class CardDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return React.createElement('img',
        {
            className: 'card-preview',
            src: this.props.imageUri
        }
    );
  }
}