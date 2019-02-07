// dependencies
import React, { Component } from 'react';

class CommentBox extends Component {
  state = { comment: '' };

  handleChange = (event) => { this.setState({ comment: event.target.value }) }

  handleSubmit = (event) => {
    // prevent our page from attempting to reload
    event.preventDefault()
    this.setState({ comment: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add A Comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange}/>
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }

}

export default CommentBox;
