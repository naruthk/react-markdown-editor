import React, { Component } from 'react';
import AceEditor from 'react-ace';
import glamorous from 'glamorous';
import Markdown from 'react-markdown';
import 'github-markdown-css';
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
  'terminal',
]

languages.forEach((lang) => {
  require(`brace/mode/${lang}`)
  require(`brace/snippets/${lang}`)
})

themes.forEach((theme) => {
  require(`brace/theme/${theme}`)
})

const defaultValue = ``;

class AddCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      aceEditorCode: defaultValue,
      aceEditorMode: 'java',
      aceEditorTheme: 'github',
      markdownNotes: defaultValue
    };
    this.setAceEditorMode = this.setAceEditorMode.bind(this);
    this.setAceEditorTheme = this.setAceEditorTheme.bind(this);
    this.onChangeAceEditor = this.onChangeAceEditor.bind(this);
    this.onChangeTextArea = this.onChangeTextArea.bind(this);
  }

  addCard(event) {
    event.preventDefault();
    const card = {
      programmingCode: this.state.aceEditorCode,
      programmingLanguage: this.state.aceEditorMode,
      markdownNotes: this.notes.value,
      timestamp: Date.now()
    }
    this.props.addCard(card);
    this.cardForm.reset();
  }

  onChangeAceEditor(val) {
    this.setState({
      aceEditorCode: val
    })
  }

  onChangeTextArea(event) {
    this.setState({
      markdownNotes: event.target.value
    })
  }

  setAceEditorMode(e) {
    this.setState({
      aceEditorMode: e.target.value
    })
  }

  setAceEditorTheme(e) {
    this.setState({
      aceEditorTheme: e.target.value
    })
  }

  render() {

    const SubmitButton = glamorous.button ({
      width: '160px',
      backgroundColor: '#4f92ff',
      color: '#fff',
      fontWeight: 300,
      height: 40
    })

    return (
      <div id="AddCardWrapper" className="row">
        <form ref={(input) => this.cardForm = input} onSubmit={(e) => this.addCard(e)}>
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
            <div id="editor">
              <AceEditor
                name="acecode-editor"
                className='ace-textarea'
                mode={this.state.aceEditorMode}
                theme={this.state.aceEditorTheme}
                onChange={this.onChangeAceEditor}
                value={this.state.aceEditorCode}
                setOptions={{
                  enableBasicAutocompletion: true,
                  enableLiveAutocompletion: true,
                  enableSnippets: true,
                  showLineNumbers: true,
                  fontSize: 14,
                  wrap: true,
                  showPrintMargin: true,
                  showGutter: true,
                  highlightActiveLine: false,
                  tabSize: 2,
                  minLines: 10,
                  width: '100%'
                }} />
            </div>
            <div>
              <p className="control">
                <label>Mode: </label>
                <span className="select">
                  <select className="optionsStyle" name="mode" onChange={this.setAceEditorMode} value={this.state.aceEditorMode}>
                    {languages.map((lang) => <option key={lang} value={lang}>{lang}</option>)}
                  </select>
                </span>
                <label>Theme: </label>
                <span className="select">
                  <select name="Theme" className="optionsStyle" onChange={this.setAceEditorTheme} value={this.state.aceEditorTheme}>
                    {themes.map((lang) => <option key={lang} value={lang}>{lang}</option>)}
                  </select>
                </span>
              </p>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
            <textarea 
              ref={(input) => this.notes = input} 
              value={this.state.markdownNotes}
              onChange={this.onChangeTextArea} 
              rows="6"></textarea>
            <SubmitButton type="submit">+ Add Item</SubmitButton>
          </div>
          <div className="hidden-xs hidden-sm col-md-4 col-lg-4">
            <div className="MarkdownPreviewWrapper markdown-body">
              <Markdown source={this.state.markdownNotes} />
            </div>

          </div>
        </form>
      </div>
    )
  }
}

export default AddCard;