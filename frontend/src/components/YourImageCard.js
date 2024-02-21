import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/auth.js'
import axios from 'axios';

export default function YourImageCard() {
    const [auth] = useAuth();
    const [userimagepost, setUserImagePost] = useState([]);
    const email = auth.user.email;
    const fetchData = async () => {
        try {
            // eslint-disable-next-line
            const res = await axios.get(`http://localhost:3001/getuserimagepost?email=${email}`);
            setUserImagePost(res.data);
        }
        catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, [email]);

    const deletePost = async (id) => {
        try {
            const res2 = await axios.post("http://localhost:3001/api/v1/auth/deleteimagepost", { id });
            if (res2) {
                alert("Post Deleted")
            }
            else {
                alert("Post Not Deleted")
            }

        }
        catch (err) {
            console.log(err);
        }
    }

    return (

        <div>
            {
                userimagepost.map(userimagepost => {
                    return (
                        < div className="card my-4" style={{ width: '30rem' }} key={userimagepost._id}>
                            <div className="card-body">
                                <h5 className="card-title">{userimagepost.name}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{userimagepost.email}</h6>
                                <p className="card-text">{userimagepost.post}</p>
                            </div>
                            <img src={`http://localhost:3001/${userimagepost.location}`} className="card-img-top" alt="..." />
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <button type='button' onClick={() => deletePost(userimagepost._id)} className='btn btn-danger my-3' style={{ width: "10rem" }}>Delete Post</button>
                            </div>
                        </div>

                    )
                })
            }
        </div >

    )
}
