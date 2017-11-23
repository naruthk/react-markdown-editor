import React from 'react';
import '../css/editor.css';

// Additional Libraries
import AceEditor from 'react-ace';
import Markdown from 'react-markdown';
import FontAwesome from 'react-fontawesome';
import RelativeDate from 'relative-date';

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
require(`brace/theme/github`)
languages.forEach((lang) => {
  require(`brace/mode/${lang}`)
  require(`brace/snippets/${lang}`)
})

class ExistingCardViewer extends React.Component {

  render() {

    const zIndexMinus1 = {
      zIndex: -1
    }

    const zIndex1 = {
      zIndex: 1
    }

    return (
      <div className="single-card-wrapper">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
            <AceEditor
              mode={this.props.item.programmingLanguage}
              theme='github'
              className='ace-textarea'
              name="acecode-editor"
              value={this.props.item.programmingCode}
              style={this.props.isScrolling ? zIndexMinus1 : zIndex1}
              setOptions={{
                className: 'ace-textarea',
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                wrap: true,
                fontSize: 14,
                showPrintMargin: false,
                showGutter: true,
                highlightActiveLine: false,
                tabSize: 2,
                width: '100%'
              }
            } />
          </div>
          <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
            <textarea
              ref={(input) => this.notes = input}
              value={this.props.item.markdownNotes}
              rows="7"></textarea>
          </div>
          <div className="hidden-xs hidden-sm col-md-4 col-lg-4">
            <div className="MarkdownPreviewWrapper markdown-body">
              <Markdown source={this.props.item.markdownNotes} />
            </div>
          </div>
        </div>
        <div className="single-card-operations">
          <p>
            <span><FontAwesome name="expand" /> Expand</span>
            <span><FontAwesome name="times" /> Delete</span>
            {RelativeDate(this.props.item.timestamp)}
          </p>
        </div>
      </div>
    )
  }
}

export default ExistingCardViewer;
