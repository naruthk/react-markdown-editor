import React from 'react';
import glamorous from 'glamorous';
import base from '../base';
import Header from './core/Header';
import Footer from './core/Footer';
import CardRenderer from './CardRenderer';
import AddNewCard from './AddNewCard';
import ReactModal from 'react-modal';
import FontAwesome from 'react-fontawesome';
import '../css/main.css';

class Dashboard extends React.Component {

  constructor() {
    super();
    this.state = {
      cards: {},
      showModal: false
    }
    this.addCard = this.addCard.bind(this);
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

  addCard(item) {
    const cards = { ...this.state.cards };
    const timestamp = Date.now();
    cards[`card-${timestamp}`] = item;
    this.setState({ cards });
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {

    const AddNewCardWrapper = glamorous.div ({
      marginTop: 60,
      backgroundColor: '#f3f3f3'
    })

    const CloseButton = glamorous.button ({
      backgroundColor: '#999',
      padding: 10,
      margin: 10,
      color: '#FFF',
      ':hover': {
        backgroundColor: '#333'
      }
    })

    let CardRender = null;
    if (this.state.showModal) {
      CardRender = <div></div>
    } else {
      CardRender = <CardRenderer cards={this.state.cards} />
    }
    return (

      <div>
        <Header handleOpenModal={this.handleOpenModal} />
        <div id="dashboard">
          <div className="margin-t-20"></div>
          {CardRender}
        </div>
        <div className="margin-t-60"></div>
        <ReactModal 
            isOpen={this.state.showModal}
            contentLabel="Add new card"
            style={{
              overlay: {
                backgroundColor: '#999'
              },
              content: {
                color: 'black',
                backgroundColor: '#f3f3f3'
              }
            }} >
          <AddNewCardWrapper>
            <AddNewCard addItem={this.addCard} key="ace" />
          </AddNewCardWrapper>
          <div className="container text-center">
            <div className="margin-t-60">
              <CloseButton onClick={this.handleCloseModal}><FontAwesome name="window-close" /> Close</CloseButton>
            </div>
          </div>
        </ReactModal>
        <Footer />
      </div>
    )
  }

}

export default Dashboard;