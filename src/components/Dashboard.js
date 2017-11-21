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
import glamorous from 'glamorous';
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
    this.editCard = this.editCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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

  // Add a new card into the current state through props in child components
  addCard(item) {
    const cards = { ...this.state.cards };
    const timestamp = Date.now();
    cards[`card-${timestamp}`] = item;
    this.setState({ cards });
  }

  editCard(key, item) {
    alert("Feature coming soon! Sorry!");
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

  // Toggle ReactModal for Adding a New Card
  handleOpenModal() { this.setState({ showModal: true }); }
  handleCloseModal() { this.setState({ showModal: false }); }

  render() {

    const WrapperAddNewCard = glamorous.div ({
      margin: 20, backgroundColor: '#f3f3f3'
    })

    const CloseButton = glamorous.button ({
      backgroundColor: '#999', padding: 10, margin: 10,
      color: '#FFF', ':hover': { backgroundColor: '#333' }
    })
    
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
        <div id="dashboard">
          {/* Hide the dashboard if the user toggles open the Add New Card modal */}
          {this.state.showModal ? <div></div> : <CardsManagement cards={this.state.cards} removeCard={this.removeCard} editCard={this.editCard} />}
        </div>
        <div className="margin-t-60"></div>
        
        {/* ReactModal for Adding a New Card */}
        <ReactModal isOpen={this.state.showModal} contentLabel="Add new card" style={ReactModalStyle} >
          <WrapperAddNewCard><AddCard addItem={this.addCard} /></WrapperAddNewCard>
          <div className="margin-t-20"></div>
          <div className="text-right">
            <CloseButton onClick={this.handleCloseModal}>
            <FontAwesome name="window-close" /> Close</CloseButton>
          </div>
          <div className="margin-t-20"></div>
        </ReactModal>
      </div>
    )
  }
}

export default Dashboard;