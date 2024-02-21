import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/auth'
import axios from 'axios';

export default function PostCard() {
    const [auth] = useAuth();
    const [posts, setPosts] = useState([]);
    const email = auth.user.email;
    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/getuserpost?email=${email}`);
            setPosts(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [email]);

    const deletePost = async (id) => {
        try {
            const delCon = await axios.post(`http://localhost:3001/api/v1/auth/deletepost`, { id });
            if (delCon) {
                alert("Post Deleted");
            }
            console.log(delCon);
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <div className='container my-4'>
                {
                    posts.map(posts => {
                        return (
                            <div className="card mb-3" style={{ width: 'auto' }} key={posts._id}>
                                <div className="card-body">
                                    <h5 className="card-title">{posts.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">{posts.email}</h6>
                                    <p className="card-text">{posts.post}</p>
                                    <button type='button' onClick={() => deletePost(posts._id)} className='btn btn-danger'>Delete Post</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
