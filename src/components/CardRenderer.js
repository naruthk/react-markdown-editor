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
      cardNotes: item.notes,
      cardDate: item.timestamp
    });
  }

  renderExistingItems(key) {

    const item = this.props.cards[key];

    const ListCard = glamorous.div ({
      paddingTop: 3,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 3,
      margin: 0,
      marginBottom: 5,
      backgroundColor: '#f9f9f9',
      border: '1px solid #f7f7f7',
      ':hover': {
        backgroundColor: '#e5e5e5',
        fontWeight: '500'
      }
    })
    
    const ListCardDescription = glamorous.span ({
      marginLeft: 10,
      marginRight: 10,
      marginTop: 0,
      paddingTop: 0,
      paddingLeft: 5,
      paddingRight: 5,
      fontSize: 14,
      color: '#7a7a7a'
    })

    const ListCardCodeMode = glamorous.span ({
      color: '#999',
      fontSize: 14,
      fontWeight: 300,
      textTransform: 'uppercase',
      float: 'right'
    })

    const ListCardTitle = glamorous.p ({
      fontWeight: 600,
      lineHeight: '10px',
      paddingTop: 10
    })

    return (

      <div key={key}>
        <a href="#" onClick={(e) => this.setKeyForCurrentItem(item)}>
          <ListCard>
            <ListCardTitle>{item.title} <ListCardCodeMode>{item.mode}</ListCardCodeMode></ListCardTitle>
            {/* <p>
              <ListCardDescription>{RelativeDate(item.timestamp)}</ListCardDescription>
              <ListCardCodeMode><strong>{item.mode}</strong></ListCardCodeMode>
            </p> */}
          </ListCard>
        </a>
      </div>
    )
  }

  render() {

    const ControlsWrap = glamorous.div ({
      marginTop: 10,
      paddingTop: 30,
      borderTop: '2px solid #f9f9f9',
      textAlign: 'right'
    })

    const Button = glamorous.button ({
      backgroundColor: '#f9f9f9',
      padding: 10,
      width: '45%',
      ':hover': {
        backgroundColor: '#e5e5e5'
      }
    })
    
    const Aside = glamorous.div ({
      paddingLeft: 20,
      borderLeft: '5px solid #CCC'
    })

    const AddCardButton = glamorous.div ({
      marginTop: 10
    })

    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
            <Editor 
              cardCode={this.state.cardCode} 
              cardMode={this.state.cardMode} 
              cardTheme={this.state.cardTheme}
              cardTitle={this.state.cardTitle}
              cardVideo={this.state.cardVideo}
              cardNotes={this.state.cardNotes} 
              cardDate={this.state.cardDate}
            />
            {/* <Videos uid={this.props.state.uid} /> */}
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <Aside>
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <h2>My <strong>Cards</strong></h2>
                </div>
                <div className="text-right col-xs-6 col-sm-12 col-md-6 col-lg-6">
                  <AddCardButton><a href="#addCard">Add new</a></AddCardButton>
                </div>
              </div>
              {Object.keys(this.props.cards).map(this.renderExistingItems)}
              <ControlsWrap>
              </ControlsWrap>
            </Aside>
          </div>
        </div>
      </div>
    )
  }

}

export default CardRenderer;