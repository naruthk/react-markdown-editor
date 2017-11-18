// import React from 'react';
// import glamorous from 'glamorous';
// import brace from 'brace';
// import AceEditor from 'react-ace';
// import 'brace/mode/javascript';
// import 'brace/theme/github';

// import('../css/new_card_form.css');

// class AddNewCard extends React.Component {

//   constructor(props) {
//     super(props);
    
//     const defaultValue = 
//       `function onLoad(editor) {
//         console.log(\"i\'ve loaded\");
//       }`;

//     this.state = ({
//       value: defaultValue
//     })

//     this.addItem = this.addItem.bind(this);
//     this.onChange = this.onChange.bind(this);
//   }

//   addItem(event) {
//     event.preventDefault();
//     const card = {
//       code: this.state.code,
//       title: this.title.value,
//       video: this.url.value,
//       notes: this.notes.value,
//       timestamp: Date.now()
//     }
//     this.props.addItem(card);
//     this.cardForm.reset();
//   }

//   onChange(newValue) {
//     console.log('change', newValue);
//     this.setState({
//       value: newValue
//     })
//   }

//   render() {

//     const AddCardDiv = glamorous.div ({
//       paddingTop: 0,
//       paddingLeft: 40,
//       paddingRight: 40,
//       paddingBottom: 40,
//     })
    
//     const Heading = glamorous.h2 ({
//       padding: 40
//     })

//     const Button = glamorous.button ({
//       padding: 10,
//       margin: 10,
//       width: '100%',
//       backgroundColor: '#000',
//       color: '#FFF'
//     })

//     return (
//       <div>
//         <Heading>Add New Card</Heading>
//         <form ref={(input) => this.cardForm = input} onSubmit={(e) => this.addItem(e)}>
//           <AddCardDiv>
//             <div className="row">
//               <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
//                 <div className="examples column">
//                   <AceEditor
//                     name="blah2"
//                     value={this.state.value}
//                     onChange={this.onChange}
//                     theme="github"
//                     mode="javascript"
//                     setOptions={{
//                       enableBasicAutocompletion: true,
//                       enableLiveAutocompletion: true,
//                       fontSize: 16,
//                       showGutter: true,
//                       showPrintMargin: true,
//                       highlightActiveLine: true,
//                       enableSnippets: false,
//                       showLineNumbers: true,
//                       tabSize: 2,
//                     }}
//                     key="ace"
//                     />
//                 </div>
//               </div>
//               <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
//                 <input ref={(input) => this.title = input} type="text" placeholder="Problem Title"></input>
//                 <input ref={(input) => this.url = input} type="text" placeholder="URL"></input>
//                 <textarea ref={(input) => this.notes = input} placeholder="Add some notes about this particular code / selected videos."></textarea>
//                 <Button type="submit">+ Add Item</Button>
//               </div>
//             </div>
//           </AddCardDiv>
//         </form>
//       </div>
//     )
//   }
// }

// export default AddNewCard;


import React, { Component } from 'react';
import { render } from 'react-dom';
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
  `// Question:
// Notes:
  
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
      margin: 10,
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
      <div className="container">
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
                  <select name="optionsStyle" onChange={this.setTheme} value={this.state.theme}>
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
              <input ref={(input) => this.url = input} type="text" placeholder="URL to source"></input>
              <textarea ref={(input) => this.notes = input} placeholder="Add some notes about this particular code / selected videos." rows="10"></textarea>
              <Button type="submit">+ Add Item</Button>
            </div>
          </div>
        </form>
      </div>
    )

  //   return (
  //     <div className="columns">
  //       <div className="column">
  //         <div className="field">
  //           <label>
  //             Mode:
  //            </label>
  //           <p className="control">
  //             <span className="select">
  //               <select name="mode" onChange={this.setMode} value={this.state.mode}>
  //                 {languages.map((lang) => <option key={lang} value={lang}>{lang}</option>)}
  //               </select>
  //             </span>
  //           </p>
  //         </div>

  //         <div className="field">
  //           <label>
  //             Theme:
  //            </label>
  //           <p className="control">
  //             <span className="select">
  //               <select name="Theme" onChange={this.setTheme} value={this.state.theme}>
  //                 {themes.map((lang) => <option key={lang} value={lang}>{lang}</option>)}
  //               </select></span>
  //           </p>
  //         </div>

  //         <div className="field">
  //           <label>
  //             Font Size:
  //            </label>
  //           <p className="control">
  //             <span className="select">
  //               <select name="Font Size" onChange={this.setFontSize} value={this.state.fontSize}>
  //                 {[14, 16, 18, 20, 24, 28, 32, 40].map((lang) => <option key={lang} value={lang}>{lang}</option>)}
  //               </select></span>
  //           </p>
  //         </div>
  //         <div className="field">
  //           <p className="control">
  //             <label className="checkbox">
  //               <input type="checkbox" checked={this.state.enableBasicAutocompletion} onChange={(e) => this.setBoolean('enableBasicAutocompletion', e.target.checked)} />
  //               Enable Basic Autocomplete
  //             </label>
  //           </p>
  //         </div>
  //         <div className="field">
  //           <p className="control">
  //             <label className="checkbox">
  //               <input type="checkbox" checked={this.state.enableLiveAutocompletion} onChange={(e) => this.setBoolean('enableLiveAutocompletion', e.target.checked)} />
  //               Enable Live Autocomplete
  //             </label>
  //           </p>
  //         </div>
  //         <div className="field">
  //           <p className="control">
  //             <label className="checkbox">
  //               <input type="checkbox" checked={this.state.showGutter} onChange={(e) => this.setBoolean('showGutter', e.target.checked)} />
  //               Show Gutter
  //             </label>
  //           </p>
  //         </div>
  //         <div className="field">
  //           <p className="control">
  //             <label className="checkbox">
  //               <input type="checkbox" checked={this.state.showPrintMargin} onChange={(e) => this.setBoolean('showPrintMargin', e.target.checked)} />
  //               Show Print Margin
  //             </label>
  //           </p>
  //         </div>
  //         <div className="field">
  //           <p className="control">
  //             <label className="checkbox">
  //               <input type="checkbox" checked={this.state.highlightActiveLine} onChange={(e) => this.setBoolean('highlightActiveLine', e.target.checked)} />
  //               Highlight Active Line
  //             </label>
  //           </p>
  //         </div>
  //         <div className="field">
  //           <p className="control">
  //             <label className="checkbox">
  //               <input type="checkbox" checked={this.state.enableSnippets} onChange={(e) => this.setBoolean('enableSnippets', e.target.checked)} />
  //               Enable Snippets
  //             </label>
  //           </p>
  //         </div>
  //         <div className="field">
  //           <p className="control">
  //             <label className="checkbox">
  //               <input type="checkbox" checked={this.state.showLineNumbers} onChange={(e) => this.setBoolean('showLineNumbers', e.target.checked)} />
  //               Show Line Numbers
  //             </label>
  //           </p>
  //         </div>


  //       </div>
  //       <div className="examples column">
  //         <h2>Editor</h2>
  //         {/* <AceEditor
  //           mode={this.state.mode}
  //           theme={this.state.theme}
  //           name="blah2"
  //           onLoad={this.onLoad}
  //           onChange={this.onChange}
  //           onSelectionChange={this.onSelectionChange}
  //           onCursorChange={this.onCursorChange}
  //           onValidate={this.onValidate}
  //           value={this.state.value}
  //           fontSize={this.state.fontSize}
  //           showPrintMargin={this.state.showPrintMargin}
  //           showGutter={this.state.showGutter}
  //           highlightActiveLine={this.state.highlightActiveLine}
  //           setOptions={{
  //             enableBasicAutocompletion: this.state.enableBasicAutocompletion,
  //             enableLiveAutocompletion: this.state.enableLiveAutocompletion,
  //             enableSnippets: this.state.enableSnippets,
  //             showLineNumbers: this.state.showLineNumbers,
  //             tabSize: 2,
  //           }} /> */}
  //       </div>
  //       {/* <div className="column">
  //         <h2>Code</h2>
  //         <AceEditor
  //           mode="jsx"
  //           theme="monokai"
  //           readOnly={true}
  //           value={
  //             `<AceEditor
  // mode="${this.state.mode}"
  // theme="${this.state.theme}"
  // name="blah2"
  // onLoad={this.onLoad}
  // onChange={this.onChange}
  // fontSize={${this.state.fontSize}}
  // showPrintMargin={${this.state.showPrintMargin}}
  // showGutter={${this.state.showGutter}}
  // highlightActiveLine={${this.state.highlightActiveLine}}
  // value={\`${this.state.value}\`}
  // setOptions={{
  // enableBasicAutocompletion: ${this.state.enableBasicAutocompletion},
  // enableLiveAutocompletion: ${this.state.enableLiveAutocompletion},
  // enableSnippets: ${this.state.enableSnippets},
  // showLineNumbers: ${this.state.showLineNumbers},
  // tabSize: 2,
  // }}/>
  //           `
  //           } />
  //       </div> */}
  //     </div>
  //   );
  }
}

export default AddNewCard;