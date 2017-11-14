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
      cards: {}
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

    const DashboardWrapper = glamorous.div ({
      padding: 60,
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'stretch'
    })

    const AddNewCardWrapper = glamorous.div ({
      marginTop: 60,
      backgroundColor: '#f3f3f3'
    })

    return (
      <div>
        <Header />
        <DashboardWrapper>
          <CardRenderer cards={this.state.cards} />
        </DashboardWrapper>
        <AddNewCardWrapper>
          <AddNewCard addItem={this.addCard} />
        </AddNewCardWrapper>
        <Footer />
      </div>
    )
  }

}

Dashboard.contextTypes = {
  router: PropTypes.object
};

export default Dashboard;