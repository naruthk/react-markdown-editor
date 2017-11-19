import React from 'react';
import glamorous from 'glamorous';
import RelativeDate from 'relative-date';
import Editor from './Editor';

class CardRenderer extends React.Component {

  constructor() {
    super();
    this.renderExistingItems = this.renderExistingItems.bind(this);
    this.setKeyForCurrentItem = this.setKeyForCurrentItem.bind(this);
    this.state = {
      cardCode: "",
      cardMode: "",
      cardNotes: "",
    };
  }

  setKeyForCurrentItem(item) {
    this.setState({ 
      cardCode: item.code,
      cardMode: item.mode,
      cardTheme: item.theme,
      cardTitle: item.title,
      cardVideo: item.video,
      cardNotes: item.notes
    });
  }

  renderExistingItems(key) {

    const item = this.props.cards[key];

    const ListCard = glamorous.p ({
      padding: 10,
      margin: 0,
      backgroundColor: '#f9f9f9',
      border: '1px solid #f7f7f7',
      ':hover': {
        backgroundColor: '#e5e5e5'
      }
    })

    if (key === "") {
      return <div><p>Nothing to show</p></div>
    }

    return (

      <div key={key}>
        <a href="#" onClick={(e) => this.setKeyForCurrentItem(item)}>
          <ListCard>{item.title} | {RelativeDate(item.timestamp)}</ListCard>
        </a>
      </div>
    )
  }

  render() {

    const ControlsWrap = glamorous.div ({
      marginTop: 10,
      paddingTop: 20,
      borderTop: '2px solid #f9f9f9',
      textAlign: 'center'
    })

    const Button = glamorous.button ({
      backgroundColor: '#f9f9f9',
      padding: 10,
      width: '45%',
      ':hover': {
        backgroundColor: '#e5e5e5'
      }
    })

    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <h2>My <strong>Cards</strong></h2>
            {Object.keys(this.props.cards).map(this.renderExistingItems)}
            <ControlsWrap>
              <Button>List View</Button> <Button>Card View</Button>
            </ControlsWrap>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
            <Editor 
              cardCode={this.state.cardCode} 
              cardMode={this.state.cardMode} 
              cardTheme={this.state.cardTheme}
              cardTitle={this.state.cardTitle}
              cardVideo={this.state.cardVideo}
              cardNotes={this.state.cardNotes} 
            />
            {/* <Videos uid={this.props.state.uid} /> */}
          </div>
        </div>
      </div>
    )
  }

}

export default CardRenderer;