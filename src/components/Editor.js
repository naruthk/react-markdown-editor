import React from 'react';
import AceEditor from 'react-ace';
import glamorous from 'glamorous';
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
      paddingBottom: 10
    })

    const NotesContent = glamorous.p({
      marginBottom: 40,
      paddingLeft: 30,
      borderLeft: '10px solid #CCC'
    })

    return (
      <div>
        <CardTitle>{this.props.cardTitle}</CardTitle>
        <NotesContent>{this.props.cardNotes}</NotesContent>
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
    )
  }
}

export default Editor;
