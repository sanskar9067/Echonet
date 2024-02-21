import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function ImagePostCard() {
    const [imagePost, setImagePost] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/getimagepost")
            .then(imagepost => setImagePost(imagepost.data))
            .catch(err => console.log(err));
    }, []);

    const handleLike = async (id) => {
        const like = await axios.post("http://localhost:3001/addimagelike", { id });
    }

    return (
        <div>
            {
                imagePost.map(imagePost => {
                    return (
                        < div className="card my-4" style={{ width: '30rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">{imagePost.name}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{imagePost.email}</h6>
                                <p className="card-text">{imagePost.post}</p>
                            </div>
                            <img src={`http://localhost:3001/${imagePost.location}`} className="card-img-top" alt="..." />
                            <div className='my-3'>
                                <p>Likes: {imagePost.likes}</p>
                                <button className='btn btn-primary' onClick={() => handleLike(imagePost._id)}>👍</button></div>

                        </div>


                    )
                })
            }
        </div >
    )
}
