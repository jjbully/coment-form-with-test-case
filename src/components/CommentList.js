import React from 'react';
import { connect } from 'react-redux'
import 'styles/CommentList.css'

class CommentList extends React.Component {
  renderComments = () => {
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>
    })
  }

  render() {
    return (
      <ul>
        {this.renderComments()}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {comments: state.comments}
}

export default connect(
  mapStateToProps
)(CommentList)