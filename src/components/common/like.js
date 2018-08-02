import React from 'react';

const Like = ({ onClick, liked }) => {
  return (  
    <i 
      onClick={onClick}
      style={{ cursor: 'pointer'}}
      className={liked ? "fa fa-heart" : "fa fa-heart-o"}
      aria-hidden='true'
    />
  );
};
 
export default Like;