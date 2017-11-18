import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import CodeMirror from 'react-codemirror';

require('codemirror/lib/codemirror.css');
require('codemirror/mode/markdown/markdown');

class Editor extends React.Component {

  // constructor() {
  //   super();
  //   // this.renderItem = this.renderItem.bind(this)
  // }

  // renderItem(key) {

  //   const item = this.props.current[key];

  //   const title = item.title;

  //   console.log(title)

  //   const codeMirrorOptions = {
  //     lineNumbers: true,
  //     readOnly: false,
  //     autoFocus: true,
  //     mode: 'markdown'
  //   }
  // 
  //   return (
  //     <div key={key}>
  //       <h2>{title}</h2>
  //       {/* <CodeMirror
  //         defaultValue={item.code}
  //         options={codeMirrorOptions}
  //       // onChange={(value) => this.setState({ code: value })}
  //       /> */}
  //     </div>
  //   )
  // }

  render() {
    const key = this.props.currentKey
    console.log(key)
    // if (!this.props.keyData || this.props.keyData === "empty") {
    //   return ( <div>Nothing to display!</div> )
    // }

    // const key = this.props.keyData;
    // console.log(key)

    return ( <div>{key}</div> )
    // if (!key || key === "") {
    //   <div className="global-wrap text-center">
    //     <FontAwesome name="heart" size='5x' />
    //     <div className="margin-t-20"></div>
    //     <p>Nothing to preview.</p>
    //   </div>
    // }

    // const item = this.props.cards[key];
    // const title = item.title;

    // console.log(title)

    // const codeMirrorOptions = {
    //   lineNumbers: true,
    //   readOnly: false,
    //   autoFocus: true,
    //   mode: 'markdown'
    // }
    // return (
    //   <div>
    //     <h2>{title}</h2>
    //     {/* <CodeMirror
    //       defaultValue={item.code}
    //       options={codeMirrorOptions}
    //     // onChange={(value) => this.setState({ code: value })}
    //     /> */}

    //     {/* {Object.keys(this.props.cards).map(this.renderItem)} */}
    //   </div>
    // );
  }
}

export default Editor;
