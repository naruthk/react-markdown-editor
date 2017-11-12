import React from 'react';

class AddVideoLink extends React.Component {

  constructor() {
    super();
    this.createDownloadItem = this.createDownloadItem.bind(this);
  }

  createDownloadItem(event) {
    event.preventDefault();
    console.log('Added an item 👍');
    const download = {
      title: this.title.value,
      url: this.url.value,
      category: this.category.value,
      notes: this.notes.value,
      timestamp: Date.now()
    }
    this.props.addItem(download);
    this.downloadForm.reset();
  }

  render() {
    return (
      
      <div className="add-download">
        <form ref={(input) => this.downloadForm = input} onSubmit={(e) => this.createDownloadItem(e)}>
          <input ref={(input) => this.title = input} type="text" placeholder="Title of Video" />
          <input ref={(input) => this.url = input} type="text" placeholder="Link to Video" />
          <textarea ref={(input) => this.notes = input} placeholder="Add a (short) description for video" ></textarea>
          <select ref={(input) => this.category = input}>
            <option value="YouTube">YouTube</option>
            <option value="Facebook">Facebook</option>
          </select> 
          <button type="submit">+ Add Item</button>
        </form>
      </div>
    )
  }
}

export default AddVideoLink;
