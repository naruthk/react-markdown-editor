import React from 'react';
// import PropTypes from 'prop-types';
// import FontAwesome from 'react-fontawesome';
// import glamorous from 'glamorous';
import RelativeDate from 'relative-date';
// import Editor from './Editor';

require('codemirror/lib/codemirror.css');
require('codemirror/mode/markdown/markdown');
import('../css/new_card_form.css');

class CardRenderer extends React.Component {

  constructor() {
    super();
    this.renderExistingItems = this.renderExistingItems.bind(this);
    this.revealCurrentCardInfo = this.revealCurrentCardInfo.bind(this);
    // console.log(`${this.props.currentKey}`)
    // // this.state = {
    // //   currentKey: this.props.currentKey
    // // };
  }

  revealCurrentCardInfo(key) {
    console.log(key)
    var currentKey = { ...this.props.currentKey };
    currentKey = key;
    this.setState({ currentKey });
  }

  renderExistingItems(key) {

    const item = this.props.cards[key];

    return (
      <div key={key}>
        <a href="#" onClick={(e) => this.revealCurrentCardInfo(key)}>
            <p>{item.title} - {item.notes} | {RelativeDate(item.timestamp)}</p>
        </a>
      </div>
    )
  }

  render() {

    return (
      <div>
        {/* <Editor cards={this.props.cards} currentKey={this.props.currentKey} /> */}
        { Object.keys(this.props.cards).map(this.renderExistingItems) }
        {/* <Videos uid={this.props.state.uid} /> */}
      </div>
    )
  }

}

export default CardRenderer;