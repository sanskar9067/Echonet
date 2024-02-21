import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Card() {

    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/getpost`)
            .then(post => setPost(post.data))
            .catch(err => console.log(err));
    }, []);

    const handleLike = async (id) => {
        const like = await axios.post("http://localhost:3001/addlike", { id });
    }

    return (
        <div>
            {
                post.map(post => {
                    return (
                        <div className="card mb-3" style={{ width: 'auto' }} key={post._id}>
                            <div className="card-body">
                                <h5 className="card-title">{post.name}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{post.email}</h6>
                                <p className="card-text">{post.post}</p>
                                <p>Likes: {post.likes}</p>
                                <button className='btn btn-primary' onClick={() => handleLike(post._id)}>👍</button>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}
