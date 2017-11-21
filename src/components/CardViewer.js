import React from 'react';
import AnalyticsIcon from '../img/analytics.png';
import '../css/editor.css';

// Additional Libraries
import AceEditor from 'react-ace';
import Markdown from 'react-markdown';
import RelativeDate from 'relative-date';
import glamorous from 'glamorous';

// For Markdown Render only
import 'github-markdown-css';

// For Ace Editor only
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
  'terminal',
]
languages.forEach((lang) => {
  require(`brace/mode/${lang}`)
  require(`brace/snippets/${lang}`)
})
themes.forEach((theme) => {
  require(`brace/theme/${theme}`)
})

class CardViewer extends React.Component {

  render() {

    const CardTitle = glamorous.h2 ({ marginTop: 10, paddingBottom: 5, fontSize: '24pt' })
    const NotesContent = glamorous.div({ marginBottom: 40 })
    const UpdateButton = glamorous.div ({ marginTop: 10})

    if (this.props.cardCode === "" || this.props.cardMode === "") {
      return (
        <div className="container">
          <div className="margin-t-60"></div>
          <div className="text-center">
            <img src={AnalyticsIcon} alt="Icon" />
            <div className="margin-t-20"></div>
            <p><i>Click on the Add Card link at the top to create a new card.</i></p>
          </div>
          <div className="margin-t-60"></div>
        </div>
      )
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <CardTitle>{this.props.cardTitle}</CardTitle>
          </div>
          <div className="text-right col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <UpdateButton>
              <span><small><strong>Language:</strong> {this.props.cardMode} | <strong>Created</strong> {RelativeDate(this.props.cardDate)}</small></span> | <a onClick={this.props.updateCurrentCard}>Update</a></UpdateButton>
          </div>
        </div>

        <hr/>
        <div classNmae="markdown-body">
          <p><strong>Source:</strong> <i><a href={this.props.cardVideo} target="_blank" title={this.props.cardTitle}>{this.props.cardVideo}</a></i></p>
        </div>

        <div className="margin-t-20"></div>

        <AceEditor
          mode={this.props.cardMode}
          theme='github'
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
            wrap: true,
            fontSize: 14,
            showPrintMargin: false,
            showGutter: true,
            highlightActiveLine: false,
            tabSize: 2,
            width: '100%',
            height: '1000px'
          }
        } />

        <div className="margin-t-60"></div>
        <div className="markdown-body">
          <NotesContent><Markdown source={this.props.cardNotes} /></NotesContent>
        </div>
        <div className="margin-t-20"></div>
      </div>
    )
  }
}

export default CardViewer;
