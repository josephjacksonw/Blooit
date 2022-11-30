import React from "react";
import PropTypes from "prop-types";

function PostDetail(props){
  const { post, onClickUpvote, onClickDownvote, onClickEdit, onClickDelete } = props;
  console.log(props);
  return (
    // either a react fragmaent or a div
    <React.Fragment>
      <h1>{post.title}</h1>
      <h3>{post.author}</h3>
      <button onClick={onClickUpvote}>Upvote</button>
      <button onClick={onClickDownvote}>Downvote</button>
      <button onClick={onClickEdit}>edit</button>
      <button onClick={()=> onClickDelete(post.id)}>delete</button>
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickUpvote: PropTypes.func,
  onClickDownvote: PropTypes.func,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func
};

export default PostDetail;