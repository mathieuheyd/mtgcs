'use strict';

class CardsFetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: [] };
  }

  componentDidMount() {
    this.fetchCards();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selection !== prevProps.selection) {
      this.fetchCards();
    }
  }

  fetchCards() {
    if (this.props.selection.colors.length == 0) {
      this.setState({cards: []});
    } else {
      fetch(this.query())
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({cards: result.data.map(card => card.image_uris.png)});
        },
        (error) => {
          console.log('Failed fetching', error);
        }
      )
    }
  }

  query() {
    var set = this.props.selection.set;
    var colors = this.props.selection.colors.join('');
    return 'https://api.scryfall.com/cards/search?order=cmc&q=type%3Ainstant+color%3C%3D' + colors + '+set%3A' + set;
  }

  render() {
    var cards = this.state.cards.map(card => React.createElement(CardDisplay, {key: card, imageUri: card}));
    return React.createElement('div', null, 'Cards', cards);
  }
}

const ConnectedCardsFetcher = ReactRedux.connect(
  (state) => {
    return {
      selection: {
        set: state.set,
        colors: state.colors
      }
    }
  },
  null
)(CardsFetcher)