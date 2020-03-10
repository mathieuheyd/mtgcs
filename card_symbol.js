'use strict';

class CardSymbol extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: this.props.colors.includes(this.props.color) };
  }

  componentDidUpdate(prevProps) {
    var active = this.props.colors.includes(this.props.color);
    if (active !== this.state.active) {
      this.setState({active: active});
    }
  }

  render() {
    return React.createElement(
        'abbr',
        {
            className: 'card-symbol card-symbol-' + this.props.color + (this.state.active ? '' : ' card-symbol-inactive'),
            title: this.props.colorName,
            onClick: () => { 
              if (this.state.active) {
                this.props.unselectColor(this.props.color);
              } else {
                this.props.selectColor(this.props.color);
              }
            }
        },
        '{' + this.props.color + '}'
    );
  }
}

const ConnectedCardSymbol = ReactRedux.connect(
  (state) => {
    return {
      colors: state.colors
    }
  },
  {
    selectColor,
    unselectColor
  }
)(CardSymbol)