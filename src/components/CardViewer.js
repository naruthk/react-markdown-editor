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

    const CardTitle = glamorous.h3 ({ marginTop: 10, addingBottom: 5, fontSize: '22pt' })
    const NotesContent = glamorous.div({ marginBottom: 40 })
    const UpdateButton = glamorous.div ({ marginTop: 10})

    if (this.props.cardCode === "" || this.props.cardMode === "") {
      return (
        <div className="text-center margin-t-60">
          <img src={AnalyticsIcon} alt="Icon" />
          <div className="margin-t-20"></div>
          <p><i>Click on the Add Card link at the top to create a new card.</i></p>
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
            <UpdateButton><button>Update</button> <button>Remove</button> <span><small><strong>Language:</strong> {this.props.cardMode} | <strong>Created</strong> {RelativeDate(this.props.cardDate)}</small></span></UpdateButton>
          </div>
        </div>

        <hr/>
        <div className="margin-t-20"></div>

        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-8">
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
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <div class="markdown-body">
              <NotesContent><Markdown source={this.props.cardNotes} /></NotesContent>
              <p><strong>Link:</strong> <i><a href={this.props.cardVideo} title={this.props.cardTitle}>{this.props.cardVideo}</a></i></p>
            </div>
          </div>
        </div>
        <div className="margin-t-20"></div>
      </div>
    )
  }
}

export default CardViewer;
