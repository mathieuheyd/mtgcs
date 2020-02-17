'use strict';

class CardSymbol extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
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
              this.setState({ active: !this.state.active });
            }
        },
        '{' + this.props.color + '}'
    );
  }
}

const ConnectedCardSymbol = ReactRedux.connect(
  null,
  {
    selectColor,
    unselectColor
  }
)(CardSymbol)