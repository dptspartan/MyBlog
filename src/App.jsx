import { useState, useEffect } from 'react'
import PostBox from './Components/Post';
import PostForm from './Components/PostForm';

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(()=> {
    // Function to fetch user data (replace with your actual API endpoint)
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}`);
        if (!response.ok){
          throw new Error("Network Connection not OK");
        }
        const data = await response.json();
        console.log(data);
         // Assuming 'title' contains the email
        setPosts(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Call the fetchUserData function when the component mounts
    fetchUserData();
  }, [])
  const handleFormSubmit = async (newPost) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });
      if (response.ok) {
        const createdPost = await response.json();
        setPosts([...posts, createdPost]);
      } else {
        console.error('Failed to create post:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
  return (
    <>
    <h1 className='Header'>My Blog</h1>
    <br></br>
    <div className='MyPostContainer'>
      {/* Form to submit new posts */}
      <PostForm onFormSubmit={handleFormSubmit} />
      {/* Loop to display multiple posts */}
      <br></br>
      {posts.map((post) => (
        <PostBox key={post.id} post={post} />
      ))}
    </div>
    </>
  )
}

export default App
