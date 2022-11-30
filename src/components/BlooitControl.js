import React from 'react';
// import Post from './Post';
import PostList from './PostList';
// import Comment from './Comment';
// import EditPost from './EditPost';
import NewPost from './NewPost';
import { connect } from 'react-redux';
// import ReusablePost from './ReusablePost';
import PropTypes from 'prop-types';

//TODO:
// Right now, posting new posts works, but React doesn't update the DOM to show our master post list.

//main views:
//  post list
//    all the posts
//    filter posts: Most upvoted, most downvoted
//  create post form

class BlooitControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedPost: null,
      editing: false
    };
  }

  handleClick = () => {
    console.log("b4dispatch");
    const { dispatch } = this.props;
    console.log("after set dispatch");
    const action = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action);
    console.log("after dispatch action");
  }

  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_POST',
      id: id
    }
    dispatch(action);
    this.setState({selectedPost: null});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingPost = (postToEdit) => {
    const { dispatch } = this.props;
    const { id, title, author, text, upvotes, downvotes, creationDate } = postToEdit;
    const action = {
      type: 'ADD_POST',
      id: id,
      title: title,
      author: author,
      text: text,
      upvotes: upvotes,
      downvotes: downvotes,
      creationDate: creationDate,
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedPost: null
    });
  }

  handleAddingNewPost = (newPost) => {
    const { dispatch } = this.props;
    const { id, title, author, text } = newPost;
    const action = {
      type: 'ADD_POST',
      id: id,
      title: title,
      author: author,
      text: text,
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText="add post";
    if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewPost onNewPost={this.handleAddingNewPost} />;
      buttonText="Return to all posts";
    } else {
      currentlyVisibleState = <PostList />;
      buttonText="add post";
    }
    return(
      <main>
        {currentlyVisibleState}
        <button onClick={this.handleClick} className="main-button">{buttonText}</button>

      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    mainPostList: state.mainPostList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

BlooitControl = connect(mapStateToProps)(BlooitControl);

BlooitControl.propTypes = {
  mainPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
}

export default BlooitControl;