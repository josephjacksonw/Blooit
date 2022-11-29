import React from 'react';
import PropTypes from "prop-types"; 

function Post(props){
  return(
    <div className="post">
      <h1>Title - Author - Date</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed tempus urna et pharetra pharetra massa. Vulputate sapien nec sagittis aliquam malesuada bibendum. Dolor sit amet consectetur adipiscing elit ut. Arcu risus quis varius quam. Ac turpis egestas integer eget. Arcu ac tortor dignissim convallis aenean. Diam donec adipiscing tristique risus. Fusce ut placerat orci nulla pellentesque dignissim. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Posuere ac ut consequat semper viverra nam libero. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Ipsum a arcu cursus vitae congue mauris rhoncus. Cras sed felis eget velit aliquet sagittis. <br />

      Lacinia quis vel eros donec ac odio tempor orci dapibus. Egestas diam in arcu cursus euismod quis viverra nibh. Nisl condimentum id venenatis a. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Tortor dignissim convallis aenean et tortor. Donec enim diam vulputate ut. Blandit massa enim nec dui nunc. Lorem donec massa sapien faucibus et molestie. Ornare suspendisse sed nisi lacus sed. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Est ante in nibh mauris cursus mattis molestie a iaculis. Pulvinar etiam non quam lacus suspendisse. Nisl pretium fusce id velit ut tortor pretium viverra. Varius quam quisque id diam vel quam elementum pulvinar etiam. Enim diam vulputate ut pharetra sit amet aliquam id. At consectetur lorem donec massa sapien faucibus et. Aliquet bibendum enim facilisis gravida.<br />

      Fringilla ut morbi tincidunt augue interdum velit euismod. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Quam pellentesque nec nam aliquam. Augue mauris augue neque gravida in. Leo in vitae turpis massa sed elementum tempus egestas. Sagittis purus sit amet volutpat consequat mauris. Eu facilisis sed odio morbi quis commodo odio. Facilisis sed odio morbi quis. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Tortor dignissim convallis aenean et. Elementum sagittis vitae et leo. Volutpat est velit egestas dui id ornare arcu odio. Nibh ipsum consequat nisl vel pretium lectus quam id. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Nisi est sit amet facilisis magna etiam. Amet luctus venenatis lectus magna fringilla. Placerat duis ultricies lacus sed turpis tincidunt. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique.<br />

      Mauris augue neque gravida in fermentum et sollicitudin ac. Velit sed ullamcorper morbi tincidunt ornare massa eget. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Mus mauris vitae ultricies leo integer. Morbi tristique senectus et netus. Egestas diam in arcu cursus euismod quis viverra nibh cras. Eget arcu dictum varius duis. Turpis egestas maecenas pharetra convallis posuere morbi. Semper feugiat nibh sed pulvinar proin. Neque vitae tempus quam pellentesque nec nam. Amet mauris commodo quis imperdiet. Sociis natoque penatibus et magnis dis parturient montes nascetur. Tellus elementum sagittis vitae et leo. Cursus sit amet dictum sit amet justo donec enim diam. Rhoncus est pellentesque elit ullamcorper dignissim cras. Leo vel orci porta non pulvinar.<br />

      Eget arcu dictum varius duis at consectetur lorem. Magna ac placerat vestibulum lectus mauris ultrices. Cursus in hac habitasse platea dictumst. Accumsan in nisl nisi scelerisque eu ultrices. Non sodales neque sodales ut etiam sit amet nisl. Commodo ullamcorper a lacus vestibulum sed arcu non. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Eget gravida cum sociis natoque penatibus et. Amet luctus venenatis lectus magna. Felis bibendum ut tristique et egestas quis. Ultrices sagittis orci a scelerisque. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.</p>
    </div>
  )
}



Post.propTypes = {
  author: string,
  title: string,
  creationDate: date,
  text: string,
  upvotes: number,
  downvote: number,
  replies: array
}




export default Post;