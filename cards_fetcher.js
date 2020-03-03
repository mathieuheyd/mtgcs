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
      Promise.all([
        fetch(this.queryInstant()).then(res => res.json()),
        fetch(this.queryFlash()).then(res => res.json())
      ])
      .then(
        (result) => {
          var cards = Array.from(new Map(result[0].data.concat(result[1].data).map(card => [card.id, card])).values());
          this.setState({cards: cards.map(card => card.image_uris.normal)});
        },
        (error) => {
          console.log('Failed fetching', error);
        }
      )
    }
  }

  queryInstant() {
    var set = this.props.selection.set;
    var colors = this.props.selection.colors.join('');
    return 'https://api.scryfall.com/cards/search?order=cmc&q=type%3Ainstant+color%3C%3D' + colors + '+set%3A' + set;
  }

  queryFlash() {
    var set = this.props.selection.set;
    var colors = this.props.selection.colors.join('');
    return 'https://api.scryfall.com/cards/search?order=cmc&q=oracle%3Aflash+-oracle%3A%22as+though%22+color%3C%3D' + colors + '+set%3A' + set;
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