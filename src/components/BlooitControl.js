import React from 'react';
// import Post from './Post';
import PostList from './PostList';
// import Comment from './Comment';
// import EditPost from './EditPost';
// import NewPost from './NewPost';
// import ReusablePost from './ReusablePost';

// new post
// all the posts
// 

class BlooitControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedPost: null,
      editing: false
    };
  }

  render(){
    let buttonText="add post";
    return(
      <main>
        <PostList />
        <button>{buttonText}</button>
      </main>
    )
  }
}



export default BlooitControl;