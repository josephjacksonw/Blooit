// for editing a comment/post
import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditPost (props) {
  const {post} = props;

  function handleEditingPost(event) {
    event.preventDefault();
    props.onEditPost({
      title: event.target.title.value,
      author: event.target.author.value,
      text: event.target.text.value,
      creationDate: post.creationDate,
      upvotes: post.upvotes,
      downvotes: post.downvotes,
      id: post.id
    });
  }

return (
  <React.Fragment>
    <ReusableForm
      formSubmissionHandler={handleEditingPost}
      buttonText="Update Post"/>
  </React.Fragment>
  );
}

EditPost.propTypes = {
  onEditPost: PropTypes.func,
  post: PropTypes.object
};

export default EditPost;
