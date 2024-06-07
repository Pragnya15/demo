import { useState, useEffect } from 'react';

const Postd = () => {
    const [postData, setPostData] = useState([]);
    const [newPostText, setNewPostText] = useState('');
    const [newPostImage, setNewPostImage] = useState('');
    const [error, setError] = useState('');
    const [uid, setUId] = useState('');
    const [editIndex, setEditIndex] = useState(null); // State to store the index of the post being edited

    useEffect(() => {
        const userId = localStorage.getItem('userid');
        if (!userId) {
            setError('User ID not found');
            return;
        }
        setUId(userId);
        fetch(`http://localhost:9000/post`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch post data');
                }
                return response.json();
            })
            .then(data => {
                let posts = data.filter(post => post.userId == userId);
                setPostData(posts);
            })
            .catch(error => {
                setError('Failed to fetch post data');
            });
    }, []);


    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (editIndex != null) {
            const postId = postData[editIndex].id;
            const updatedPost = {
                userId: uid,
                content: newPostText,
                image: newPostImage
            };

            fetch(`http://localhost:9000/post/${postId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedPost)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to update post');
                }
                
                const updatedPosts = [...postData];
                updatedPosts[editIndex] = updatedPost;
                setPostData(updatedPosts);
                setEditIndex(null); 
                setNewPostText('');
                setNewPostImage('');
            })
            .catch(error => {
                setError('Failed to update post');
            });
        } else {
          
            const newPost = {
                userId: uid,
                content: newPostText,
                image: newPostImage
            };

            fetch('http://localhost:9000/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newPost)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to add post');
                }
                setPostData(prevData => [...prevData, newPost]);
                setNewPostText('');
                setNewPostImage('');
            })
            .catch(error => {
                setError('Failed to add post');
            });
        }
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setNewPostText(postData[index].content);
        setNewPostImage(postData[index].image);
    };

    return (
        <>
            <h2>{uid}</h2>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="newPostText">Post Text:</label>
                    <input 
                        type="text" 
                        id="newPostText" 
                        value={newPostText} 
                        onChange={(e) => setNewPostText(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="newPostImage">Post Image URL:</label>
                    <input 
                        type="file" 
                        id="newPostImage" 
                        value={newPostImage} 
                        onChange={(e) => setNewPostImage(e.target.value)} 
                    />
                </div>
                <button type="submit">{editIndex != null ? 'Update' : 'Submit'}</button>
            </form>

            {/* Display existing posts */}
            {postData.map((post, index) => (
                <div key={index} style={{border:"1px solid black", marginBottom:'10px', backgroundColor:"white"}}>
                    <h3>{post.content}</h3>
                    <img src={post.image} alt="Post" />
                    <button onClick={() => handleEdit(index)}>Edit</button>
                </div>
            ))}
        </>
    );
};

export default Postd;
