'use strict';

class SetSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.selectSet(event.target.value);
  }

  render() {
   return (
    <div>
        <label htmlFor="set-select">Draft Set:</label>
        <select id="set-select" value={this.props.selectedSet} onChange={this.handleChange}>
            <option value="tbd">Theros Beyond Death</option>
            <option value="eld">Throne of Eldraine</option>
        </select>
    </div>
   );
  }
}

const ConnectedSetSelector = ReactRedux.connect(
  (state) => {
    return {
      selectedSet: state.set
    }
  },
  {
    selectSet
  }
)(SetSelector)