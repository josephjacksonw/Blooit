export const deletePost = id => ({
  type: 'DELETE_POST',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addPost = (post) => {
  const { id, title, author, text, upvotes, downvotes, creationDate } = post;
  return {
    type: 'ADD_POST',
    id: id,
    title: title,
    author: author,
    text: text,
    upvotes: upvotes,
    downvotes: downvotes,
    creationDate: creationDate
  }
}

export const upvote = id => ({
  type: 'UPVOTE',
  id
});

export const downvote = id => ({
  type: 'DOWNVOTE',
  id
});