'use strict';

class ColorsSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
   return (
      <div>
        <ConnectedCardSymbol key='W' color='W' colorName='White' />
        <ConnectedCardSymbol key='U' color='U' colorName='Blue' />
        <ConnectedCardSymbol key='B' color='B' colorName='Black' />
        <ConnectedCardSymbol key='R' color='R' colorName='Red' />
        <ConnectedCardSymbol key='G' color='G' colorName='Green' />
      </div>
   );
  }
}