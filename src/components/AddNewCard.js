import React, { Component } from 'react';
import AceEditor from 'react-ace';
import glamorous from 'glamorous';
import 'brace/mode/jsx';
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';
import 'brace/theme/cobalt';
import '../css/editor.css';

const languages = [
  'java',
  'javascript',
  'python',
  'xml',
  'ruby',
  'markdown',
  'mysql',
  'json',
  'html',
  'csharp',
  'typescript',
  'css'
]

const themes = [
  'cobalt',
  'monokai',
  'github',
  'tomorrow',
  'kuroir',
  'twilight',
  'xcode',
  'textmate',
  'solarized_dark',
  'solarized_light',
  'terminal',
]

languages.forEach((lang) => {
  require(`brace/mode/${lang}`)
  require(`brace/snippets/${lang}`)
})

themes.forEach((theme) => {
  require(`brace/theme/${theme}`)
})

const defaultValue =
  `// Notes:
  
public static Solution {
  // Write my solution here

}`;

class AddNewCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: defaultValue,
      mode: 'java',
      theme: 'cobalt'
    };
    this.setMode = this.setMode.bind(this);
    this.onChange = this.onChange.bind(this);
    this.setBoolean = this.setBoolean.bind(this);
    this.setTheme = this.setTheme.bind(this);
  }

  addItem(event) {
    event.preventDefault();
    const card = {
      code: this.state.value,
      mode: this.state.mode,
      theme: this.state.theme,
      title: this.title.value,
      video: this.url.value,
      notes: this.notes.value,
      timestamp: Date.now()
    }
    this.props.addItem(card);
    this.cardForm.reset();
  }

  onChange(newValue) {
    this.setState({
      value: newValue
    })
  }

  setMode(e) {
    this.setState({
      mode: e.target.value
    })
  }

  setTheme(e) {
    this.setState({
      theme: e.target.value
    })
  }

  setBoolean(name, value) {
    this.setState({
      [name]: value
    })
  }

  render() {

    const Heading = glamorous.h2 ({
      paddingTop: 40,
      paddingBottom: 10,
      paddingLeft: 0,
      paddingRight: 40
    })

    const Button = glamorous.button ({
      padding: 10,
      marginTop: 0,
      marginBottom: 10,
      width: '100%',
      backgroundColor: '#000',
      color: '#FFF'
    })

    const ControlsWrap = glamorous.div ({
      paddingTop: 40,
      paddingBottom: 10,
      paddingLeft: 0,
      paddingRight: 0,
      textAlign: 'right'
    })

    return (
      <div id="addCard" className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Heading>Add A New <strong>Code Card</strong></Heading>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <ControlsWrap>
              <p className="control">
                <label>Mode: </label>
                <span className="select">
                  <select className="optionsStyle" name="mode" onChange={this.setMode} value={this.state.mode}>
                    {languages.map((lang) => <option key={lang} value={lang}>{lang}</option>)}
                  </select>
                </span>
                
                <label>Theme: </label>
                <span className="select">
                  <select name="Theme" className="optionsStyle" onChange={this.setTheme} value={this.state.theme}>
                    {themes.map((lang) => <option key={lang} value={lang}>{lang}</option>)}
                  </select>
                </span>
              </p>
            </ControlsWrap>
          </div>
        </div>
        <form ref={(input) => this.cardForm = input} onSubmit={(e) => this.addItem(e)}>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
              <div id="editor">
                <AceEditor
                  mode={this.state.mode}
                  theme={this.state.theme}
                  className='ace-textarea'
                  name="acecode-editor"
                  onChange={this.onChange}
                  value={this.state.value}
                  setOptions={{
                    className: 'ace-textarea',
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    fontSize: 16,
                    showPrintMargin: true,
                    showGutter: true,
                    highlightActiveLine: true,
                    tabSize: 2,
                    minLines: 20,
                    width: '100%'
                }} />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <input ref={(input) => this.title = input} type="text" placeholder="Title"></input>
              <input ref={(input) => this.url = input} type="text" placeholder="URL to source (maybe a YT video)"></input>
              <textarea ref={(input) => this.notes = input} placeholder="As markdown text, add some notes about this particular code / selected videos." rows="10"></textarea>
              <Button type="submit">+ Add Item</Button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default AddNewCard;