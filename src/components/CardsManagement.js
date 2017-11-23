import React from 'react';
import ExistingCardViewer from './ExistingCardViewer';
import glamorous from 'glamorous';

class CardsManagement extends React.Component {

  constructor() {
    super();
    this.state = {
      isScrolling: false
    }
    this._timeout = null;
    this.setZIndexOfTextAreas = this.setZIndexOfTextAreas.bind(this);
    this.renderExistingCards = this.renderExistingCards.bind(this);

    // Because the AceCodeEditor's textarea will always be on top of our Header and
    // GridRowTitles, we have to listen to the scroll action. Everytime the user
    // scrolls the page up/down, we will lock the textarea from being able to scroll,
    // and set its z-index to -1.
    window.addEventListener('scroll', this.setZIndexOfTextAreas);
  }

  setZIndexOfTextAreas() {
    console.log("im being scrolled!")
    this.setState({
      isScrolling: true
    })
    if (this._timeout) { //if there is already a timeout in process cancel it
      clearTimeout(this._timeout);
    }
    this._timeout = setTimeout(() => {
      this._timeout = null;
      this.setState({
        isScrolling: false
      });
    }, 300);
    if (this.state.isScrolling !== true) {
      this.setState({
        isScrolling: true
      });
    }
  }

  renderExistingCards(key) {
    const item = this.props.cards[key]
    return (
      <div key={key}>
        <ExistingCardViewer item={item} key={key} cards={this.props.cards} isScrolling={this.state.isScrolling} />
      </div>
    )
  }

  render() {

    const HeaderRowStyle = glamorous.div({
      backgroundColor: '#424242',
      height: 40,
      lineHeight: '40px',
      color: '#FFFFFF',
      position: 'fixed',
      top: 60,
      left: 0,
      right: 0,
      zIndex: 1
    })

    const HeaderTitle = glamorous.p({
      textAlign: 'center',
      color: '#FFF !important'
    })

    const HeaderGridRenderer =
      <HeaderRowStyle className="row">
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4"><HeaderTitle>Code</HeaderTitle></div>
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4"><HeaderTitle>Notes (Markdown Style)</HeaderTitle></div>
        <div className="hidden-xs hidden-sm col-md-4 col-lg-4"><HeaderTitle>Rendered Notes (GitHub Flavored)</HeaderTitle></div>
      </HeaderRowStyle>

    return (
      <div>
        {HeaderGridRenderer}
        <div id="EditorMarkdownLivePreviewScrollWrapper">
          <section id="CardContent">
            {Object.keys(this.props.cards).map(this.renderExistingCards)}
          </section>
        </div>
      </div>
    )
  }

}

export default CardsManagement;