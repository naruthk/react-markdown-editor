import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import glamorous from 'glamorous';
import base from '../base';

import Header from './core/Header';
import Footer from './core/Footer';
import CardRenderer from './CardRenderer';
import AddNewCard from './AddNewCard';

class Dashboard extends React.Component {

  constructor() {
    super();

    this.addCard = this.addCard.bind(this);

    this.state = {
      cards: {},
      currentKey: ""
    }

  }

  componentWillMount() {
    this.ref = base.syncState(`${this.props.data.uid}`, {
      context: this,
      state: 'cards'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addCard(item) {
    const cards = { ...this.state.cards };
    const timestamp = Date.now();
    cards[`card-${timestamp}`] = item;
    this.setState({ cards });
  }

  render() {

    const AddNewCardWrapper = glamorous.div ({
      marginTop: 60,
      backgroundColor: '#f3f3f3'
    })

    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <CardRenderer cards={this.state.cards} currentKey={this.state.currentKey} />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div><p>VideoPlayer</p></div>
          </div>
        </div>
        <AddNewCardWrapper>
          <AddNewCard addItem={this.addCard} key="ace" />
        </AddNewCardWrapper>
        <Footer />
      </div>
    )
  }

}

export default Dashboard;