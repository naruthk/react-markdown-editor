import React from 'react';
import AceEditor from 'react-ace';
import glamorous from 'glamorous';
import Markdown from 'react-markdown';
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';

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

class Editor extends React.Component {

  render() {

    const CardTitle = glamorous.h3 ({
      marginTop: 10,
      marginBottom: 10,
      paddingBottom: 10,
      borderBottom: '1px solid #CCC'
    })

    const NotesContent = glamorous.div({
      marginBottom: 40,
      paddingTop: 20
    })

    if (this.props.cardCode === "" || this.props.cardMode === "") {
      return <div></div>
    }
    
    return (

      <div>
        <CardTitle>{this.props.cardTitle}</CardTitle>
        <NotesContent>
          <Markdown source={this.props.cardNotes} />
        </NotesContent>
        <p>Link: <i><a href={this.props.cardVideo} title={this.props.cardTitle}>{this.props.cardVideo}</a></i></p>
        <div className="margin-t-20"></div>
        <AceEditor
          mode={this.props.cardMode}
          theme='monokai'
          className='ace-textarea'
          name="acecode-editor"
          value={this.props.cardCode}
          setOptions={{
            className: 'ace-textarea',
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            readOnly: true,
            showLineNumbers: true,
            fontSize: 16,
            showPrintMargin: true,
            showGutter: true,
            highlightActiveLine: true,
            tabSize: 2,
            width: '100%',
            height: '200px'
          }} />
      </div>
    )
  }
}

export default Editor;
