import React from 'react';

const PostBox = ({ post }) => {
  const { title, body} = post;

  return (
    <div className="post-box">
      <p>Title: {title}</p>
      <p>Body: {body}</p>
    </div>
  );
};

export default PostBox;