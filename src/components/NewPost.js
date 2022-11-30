import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from './ReusableForm';

function newPost(props){

  function handleNewPost(event) {
    event.preventDefault();
    props.onNewPost({
      title: event.target.title.value,
      author: event.target.author.value,
      creationDate: new Date().toUTCString,
      text: event.target.text.value,
      upvotes: 0,
      downvotes: 0,
      replies: [],
      id: v4()
      //all the stuff a post has
    });
  }

  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleNewPost}/>
    </React.Fragment>
    //they call the reusable form here
  );
}

newPost.propTypes = {
  onNewPost: PropTypes.func
};

export default newPost;

