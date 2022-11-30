import React from 'react';
// import Post from './Post';
import PostList from './PostList';
// import Comment from './Comment';
import EditPost from './EditPost';
import NewPost from './NewPost';
import { connect } from 'react-redux';
// import ReusablePost from './ReusablePost';
import PropTypes from 'prop-types';
import PostDetail from './PostDetail';

//TODO:
// edit functionality OK
// upvote/downvote
// sort list by votes

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
    if(this.state.selectedPost != null){
      this.setState({
        selectedPost: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
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

  handleUpvote = (postToUpvote) => {
    const {dispatch} = this.props;
    const{id, title, author, text, upvotes, downvotes, creationDate} = postToUpvote;
    const action = {
      type: 'ADD_POST',
      id: id,
      title: title,
      author: author,
      text: text,
      upvotes: parseInt(upvotes) + 1,
      downvotes: downvotes,
      creationDate: creationDate,
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedPost: null
    });
  }

  
  //handlet we just do this again and modify upvote/downvote value?
  //laggin' hard
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
    const { id, title, author, text, upvotes, downvotes, creationDate } = newPost;
    const action = {
      type: 'ADD_POST',
      id: id,
      title: title,
      author: author,
      text: text,
      upvotes: upvotes,
      downvotes: downvotes,
      creationDate: creationDate
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleSelectingPost = (id) => {
    const selectedPost = this.props.mainPostList[id];
    console.log(selectedPost);
    this.setState({selectedPost: selectedPost});
    console.log('reached handleSelectingPost Blooitcontrol.js' + id + selectedPost);
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText="add post";
    let buttonVisibility="";
    if (this.state.editing){
      currentlyVisibleState = <EditPost 
      post = {this.state.selectedPost} 
      onEditPost = {this.handleEditingPost} />
      buttonVisibility="hidden";
    } else if (this.state.selectedPost != null){
      console.log(this.state.selectedPost)
      currentlyVisibleState = <PostDetail 
        onReturnButton={this.handleClick} 
        onClickUpvote={this.handleUpvote} 
        onClickDownvote={this.handleDownvote} 
        onClickEdit={this.handleEditClick} 
        onClickDelete={this.handleDeletingPost}
        post={this.state.selectedPost}
      />
      buttonText="return";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewPost 
      onReturnButton={this.handleClick} 
      onNewPost={this.handleAddingNewPost} />;
      buttonVisibility="hidden";
    } else {
      currentlyVisibleState = <PostList 
      postList={this.props.mainPostList} 
      onPostSelect={this.handleSelectingPost}
      onUpvote={this.handleUpvote}
      />;
      buttonText="add post";
      buttonVisibility="main-button"
    }
    return(
      <main>
        {currentlyVisibleState}
        <button onClick={this.handleClick} className={buttonVisibility}>{buttonText}</button>
      </main>
    )
  }
}

const mapStateToProps = state => {
  //TODO: set main post list to be ordered by upvotes
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