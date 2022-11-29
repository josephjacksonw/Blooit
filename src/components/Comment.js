import React from 'react';
import PropTypes from 'prop-types';

function Comment() {
  return(
    <div className="reply">
      <h1>Author - date</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis aenean et tortor at risus. Neque convallis a cras semper auctor neque. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Odio euismod lacinia at quis. Nisi scelerisque eu ultrices vitae auctor eu. Commodo elit at imperdiet dui accumsan sit amet nulla. Proin sed libero enim sed. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Lectus nulla at volutpat diam ut venenatis tellus in metus. Et leo duis ut diam quam nulla porttitor. At consectetur lorem donec massa sapien faucibus et. Etiam dignissim diam quis enim lobortis. Mi tempus imperdiet nulla malesuada pellentesque elit eget. Quis auctor elit sed vulputate mi. Tellus in metus vulputate eu. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. In mollis nunc sed id semper.<br />

      Id eu nisl nunc mi. Sed faucibus turpis in eu mi bibendum neque egestas. Vel pharetra vel turpis nunc. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Scelerisque in dictum non consectetur. Consequat interdum varius sit amet mattis vulputate enim nulla. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Gravida arcu ac tortor dignissim convallis aenean. Arcu ac tortor dignissim convallis aenean et tortor at. Enim eu turpis egestas pretium aenean pharetra magna. In iaculis nunc sed augue lacus viverra vitae. Ridiculus mus mauris vitae ultricies leo integer.</p>
    </div>
  )
}

Comment.propTypes = {
  author: string,
  creationDate: date,
  text: string,
  upvotes: number,
  downvote: number,
  replies: [Comment]
}

export default Comment;