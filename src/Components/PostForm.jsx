import React, { useState } from 'react';

const PostForm = ({ onFormSubmit }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ title, body });
    setTitle('');
    setBody('');
  };

  return (
    <form className='Form' onSubmit={handleSubmit}>
        <h1 className='formHeader'>Add New Post</h1>
        <input className='input title' placeholder='Title' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea className='input body' placeholder='Body' value={body} onChange={(e) => setBody(e.target.value)} />
        <button className='addPost' type="submit">Add</button>
    </form>
  );
};

export default PostForm;
