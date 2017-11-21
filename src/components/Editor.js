import React from 'react';
import AceEditor from 'react-ace';
import glamorous from 'glamorous';
import Markdown from 'react-markdown';
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';
import RelativeDate from 'relative-date';
import AnalyticsIcon from '../img/analytics.png';

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
      paddingBottom: 5
    })

    const NotesContent = glamorous.div({
      marginBottom: 40,
      paddingTop: 20
    })

    const UpdateButton = glamorous.div ({
      marginTop: 10
    })

    if (this.props.cardCode === "" || this.props.cardMode === "") {
      return (
        <div className="text-center">
          <div className="margin-t-60"></div>
          <img src={AnalyticsIcon} />
          <div className="margin-t-20"></div>
          <p><i>"By failing to prepare, you are preparing to fail."</i></p>
        </div>
      )
    }
    
    return (

      <div>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <CardTitle>{this.props.cardTitle}</CardTitle>
          </div>
          <div className="text-right col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <UpdateButton><a href="#">Update</a></UpdateButton>
          </div>
        </div>
        <p className="text-right"><small><strong>Language:</strong> {this.props.cardMode}&nbsp;&nbsp;|&nbsp;&nbsp;<strong>Created</strong> {RelativeDate(this.props.cardDate)}</small></p>
        <hr/>
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
            height: '1000px'
          }} />
        <div className="margin-t-20"></div>
        <NotesContent>
          <Markdown source={this.props.cardNotes} />
        </NotesContent>
        <p><strong>Link:</strong> <i><a href={this.props.cardVideo} title={this.props.cardTitle}>{this.props.cardVideo}</a></i></p>
        <div className="margin-t-60"></div>
      </div>
    )
  }
}

export default Editor;
