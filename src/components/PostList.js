import React from "react";
import Post from "./Post";
import postData from "./../postData.js";

function PostList(){

  return(
    <React.Fragment>
    <div className="post-list">
        <Post
          author="Skylan"
          creationDate={new Date().toUTCString()}
          title="Hello World"
          text="Goodbye World"
          upvotes= {5}
          downvotes= {0}
          id="1"
        />
        <Post
          author="josephjackson"
          creationDate="Thu, 30 Nov 2022 22:17:20 GMT"
          title="Free Discord Nitro"
          text= "Don't forget to surbscribe for free vbucks"
          upvotes= {5}
          downvotes= {1}
          id="2"
        />
        <Post
          author="compass"
          creationDate="Tue, 28 Nov 2022 23:50:21 GMT"
          title="Breath of the Wild is mid"
          text="The world is really empty, and you only get like 3 dungeons and they're all beginner level. Getting fractional upgrades for completing content is not rewarding, either."
          upvotes= {5}
          downvotes= {8}
          id="3"
        />

    </div>
    </React.Fragment>
  )
}

export default PostList;