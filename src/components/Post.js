import React from 'react';
import PropTypes from "prop-types"; 


function Post(props){
  
  return(
    <div className="post">

      <div className="post--header">
        <div className="votes">
          <div className="upvotes">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-top upvotes--icon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
              </svg>
            <span className="vote--text">{props.upvotes}</span>
          </div>{/*upvotes*/}
          <div className="downvotes">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-down downvotes--icon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a905b6" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z" />
              </svg>
            <span className="vote--text">{props.downvotes}</span>
          </div> {/*downvotes*/}
        </div>{/*votes*/}
        <div className="post--title">
          <h1>{props.title}</h1>
          <h3>{props.author} - {props.creationDate}</h3>
          <div className="post--controls">
            <button>reply</button>
            <button>edit</button>
            <button>delete</button>
          </div>
        </div>
      </div>{/*header*/}
      <div className="post--text">
        <p>{props.text}</p>
        <hr />
      </div>
    </div>
  )
}



Post.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  creationDate: PropTypes.string,
  text: PropTypes.string,
  upvotes: PropTypes.number,
  downvotes: PropTypes.number,
  replies: PropTypes.array,
  id: PropTypes.string
}




export default Post;