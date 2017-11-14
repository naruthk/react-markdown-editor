import React from 'react';
import glamorous from 'glamorous';
import CodeMirror from 'react-codemirror';
require('codemirror/lib/codemirror.css');
require('codemirror/mode/markdown/markdown');
require('codemirror/mode/javascript/javascript');
import ('../css/new_card_form.css');

class AddNewCard extends React.Component {

  constructor() {
    super();
    this.state = ({
      code: 'Default code'
    })
    this.addItem = this.addItem.bind(this);
  }

  addItem(event) {
    event.preventDefault();
    const card = {
      code: this.state.code,
      title: this.title.value,
      video: this.url.value,
      notes: this.notes.value,
      timestamp: Date.now()
    }
    this.props.addItem(card);
    this.cardForm.reset();
  }

  render() {

    const AddCardDiv = glamorous.div ({
      paddingTop: 0,
      paddingLeft: 40,
      paddingRight: 40,
      paddingBottom: 40,
    })
    
    const Heading = glamorous.h2 ({
      padding: 40
    })

    const Button = glamorous.button ({
      padding: 10,
      margin: 10,
      width: '100%',
      backgroundColor: '#000',
      color: '#FFF'
    })

    const codeMirrorOptions = {
      lineNumbers: true,
      readOnly: false,
      autoFocus: true,
      mode: 'markdown'
    }

    return (
      <div>
        <Heading>Add New Card</Heading>
        <form ref={(input) => this.cardForm = input} onSubmit={(e) => this.addItem(e)}>
          <AddCardDiv>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <CodeMirror 
                  defaultValue={this.state.code}
                  options={codeMirrorOptions}
                  onChange={(value) => this.setState({ code: value })}
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <input ref={(input) => this.title = input} type="text" placeholder="Video Title"></input>
                <input ref={(input) => this.url = input} type="text" placeholder="URL"></input>
                <textarea ref={(input) => this.notes = input} placeholder="Add some notes about this particular code / selected videos." ></textarea>
                <Button type="submit">+ Add Item</Button>
              </div>
            </div>
          </AddCardDiv>
        </form>
      </div>
    )
  }
}

export default AddNewCard;
