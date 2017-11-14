import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import glamorous from 'glamorous';
import RelativeDate from 'relative-date';

class CardRenderer extends React.Component {

  constructor() {
    super();
    this.renderExistingItems = this.renderExistingItems.bind(this);
  }

  renderExistingItems(key) {

    const item = this.props.cards[key];

    return (
      <div key={key} className="single-card-list">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <p>
              {item.code}
              {item.title}
              {item.url}
              {item.notes}
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <p>{RelativeDate(item.timestamp)}</p>
          </div>
        </div>
      </div>
    )
  }

  render() {

    return (
      <div>
        <p>I'm inside Markdown Editor</p>
        { Object.keys(this.props.cards).map(this.renderExistingItems) }
        {/* <Videos uid={this.props.state.uid} /> */}
      </div>
    )
  }

}

CardRenderer.contextTypes = {
  router: PropTypes.object
};

export default CardRenderer;