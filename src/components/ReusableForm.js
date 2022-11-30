import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props){
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input 
          type= 'text'
          name='title'
          placeholder='post title'
          />
        <input 
          type= 'text'
          name='author'
          placeholder='post author (you)'
          />
        <textarea 
          name='text'
          placeholder='post content here'
          />
        <button type="submit">Post</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func
}

export default ReusableForm;