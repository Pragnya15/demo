import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Post = () => {
    const [postData, setPostData] = useState([{}]);
    const [error, setError] = useState('');
    const [uId, setUId] = useState('');
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate()
    useEffect(() => {
        // Retrieve user ID from localStorage
        const userId = localStorage.getItem('userid');
        if (!userId) {
            setError('User ID not found');
            navigate("../");
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
                // setPostData(data);
// console.log(data)
let posts = []
for(let post of data){
    if(post.userId == userId){
        posts.push(post)
    }
}

// console.log(posts)
setPostData(posts)
            })
            .catch(error => {
                setError('Failed to fetch post data');
            });
    });

    //Post new details
    const onSubmit = async (formData) => {
        const { newPostText, newPostImage } = formData;
        const formDataObj = new FormData();
        formDataObj.append('file', newPostImage[0]);
        formDataObj.append('content', newPostText);

        try {
            const response = await fetch(`http://localhost:9000/post/upload/${uId}`, {
                method: 'POST',
                body: formDataObj,
            });

            if (!response.ok) {
                throw new Error('Failed to add post');
            }

            // Reset form fields on successful submission
            reset();
        } catch (error) {
            setError('Failed to add post');
        }
        navigate("../post")
    };
    
    // const handleEdit = (postId) => {
    //     const updatedText = prompt('Enter the new text:', postData.find(post => post.id === postId)?.text);
    //     const updatedImage = prompt('Enter the new image URL:', postData.find(post => post.id === postId)?.image);
    //     if (updatedText !== null && updatedImage !== null) {
    //         fetch(`http://localhost:9002/post/${postId}`, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 text: updatedText,
    //                 image: updatedImage
    //             })
    //         })
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Failed to edit post');
    //             }
    //             fetchPosts(uId);
    //         })
    //         .catch(error => {
    //             setError('Failed to edit post');
    //         });
    //     }
    // };

    // const handleDelete = (postId) => {
    //     fetch(`http://localhost:9002/post/${postId}`, {
    //         method: 'DELETE'
    //     })
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Failed to delete post');
    //         }
    //         fetchPosts(uId);
    //     })
    //     .catch(error => {
    //         setError('Failed to delete post');
    //     });
    // };
    const logout=()=>{
        localStorage.removeItem('userid');
        navigate("../");
    }

    return (
        <>  
        <div style={{backgroundColor:"lightblue"}}>
        <h2 style={{ textAlign: 'right' }}>User Id: {uId}</h2>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <form onSubmit={handleSubmit(onSubmit)} style={{border:"2px solid black", backgroundColor:"white",
        marginLeft:"10px", marginTop:"10px", marginRight:"10px"}}>
                <div style={{marginLeft:"10px", marginTop:"10px", marginBottom:"10px"}}>
                    <h2 style={{textAlign:"center"}}>Post New Details</h2>
                    <label htmlFor="newPostText">Post Text: </label>
                    <input 
                        type="text" 
                        id="newPostText" 
                        {...register('newPostText', { required: true })}
                    />

                    {errors.newPostText && <span>This field is required</span>}
                </div>
                <div style={{marginLeft:"10px", marginBottom:"10px"}}>
                    <label htmlFor="newPostImage">Post Image: </label>
                    <input 
                        type="file" 
                        id="newPostImage" 
                        {...register('newPostImage', { required: true })}
                    />
                    {errors.newPostImage && <span>This field is required</span>}
                </div>
                <button type="submit" style={{marginLeft:"10px", marginBottom:"10px"}}>Submit</button>
            </form>
            <br/>
            {/* Display existing posts */}
            {postData.map((post, index) => (
                <div key={index} style={{border:"3px solid black", marginBottom:'10px', marginLeft:"10px", marginRight:"10px", backgroundColor:"white"}}>
                    <div style={{marginLeft:"10px", marginRight:"10px"}}>
                    <h3>{post.content}</h3>
                    <img src={`http://localhost:9000/${post.image}`} alt="Post" />
                    </div>
                    <br/>
                    <div>
                        {/* <FontAwesomeIcon icon={faEdit} onClick={() => handleEdit(post.id)} style={{ cursor: 'pointer', marginRight: '10px' }} />
                        <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(post.id)} style={{ cursor: 'pointer' }} /> */}
                    </div>
                    <br/>
                </div>
            ))}
            <br/>
       <button onClick={logout}>Logout</button>
        </div>
        </>
    );
};

export default Post;


