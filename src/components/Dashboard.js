// Core
import React from 'react';
import base from '../base'; 

// Components
import Header from './core/Header';
import Footer from './core/Footer';
import CardsManagement from './CardsManagement';
import AddCard from './AddCard';

// Additional
import ReactModal from 'react-modal';
import FontAwesome from 'react-fontawesome';

class Dashboard extends React.Component {

  constructor() {
    super();

    // Two states are required: 1) to keep track of all created cards
    // and 2) to check whether the user has clicked on the "Add Card" link
    // in the navigation bar
    this.state = {
      cards: {},
      showModal: false
    }

    this.addCard = this.addCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  // Toggle ReactModal for Adding a New Card
  handleOpenModal() { this.setState({ showModal: true }); }
  handleCloseModal() { this.setState({ showModal: false }); }

  componentWillMount() {
    this.ref = base.syncState(`${this.props.data.uid}`, {
      context: this,
      state: 'cards'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  // Add a new card into the current state through props in child components
  addCard(item) {
    const cards = { ...this.state.cards };
    const timestamp = Date.now();
    cards[`card-${timestamp}`] = item;
    this.setState({ cards });
  }

  // Delete a card (given a key of the particular card)
  removeCard(key) {
    let retVal = window.confirm("Are you sure you want to continue?");
    if (retVal) {
      const cards = { ...this.state.cards };
      cards[key] = null;
      this.setState({ cards });
      return true;
    }
  }

  render() {

    const CardsManagementRenderer = this.state.showModal ? <div></div> : <CardsManagement cards={this.state.cards} addCard={this.addCard} removeCard={this.removeCard} /> 

    const ReactModalStyle = {
      overlay: {
        backgroundColor: '#f3f3f3',
      },
      content: {
        color: 'black',
        backgroundColor: '#f3f3f3',
        border: '0'
      }
    }

    return (
      <div>
        <Header handleOpenModal={this.handleOpenModal} />
        {CardsManagementRenderer}
        <ReactModal isOpen={this.state.showModal} contentLabel="Add new card" style={ReactModalStyle} >
          <AddCard addCard={this.addCard} />
          <div className="margin-t-20"></div>
          <div className="text-right">
            <button onClick={this.handleCloseModal}><FontAwesome name="window-close" /> Close</button>
          </div>
          <div className="margin-t-20"></div>
        </ReactModal>
        <Footer />
      </div>
    )
  }
}

export default Dashboard;