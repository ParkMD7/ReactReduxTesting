// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {

  renderComments = () => {
    return this.props.comments.map(comment => {
      // assuming every comment is unique so using the comment itself as a key
      return <li key={comment}>{comment}</li>
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  comments: state.comments
})

export default connect(mapStateToProps)(CommentList);
