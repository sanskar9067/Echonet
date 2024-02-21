import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useAuth } from '../context/auth'
import axios from 'axios'
import ImagePostCard from '../components/ImagePostCard'

export default function Imagepost() {
    const [auth] = useAuth();
    const [post, setPost] = useState();
    const [file, setFile] = useState();
    const name = auth.user.name;
    const email = auth.user.email;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('post', post);
        formData.append('file', file);

        try {
            // eslint-disable-next-line
            const res = await axios.post(`http://localhost:3001/postupload`, formData)
            alert("Post Uploaded");

        }
        catch (err) {
            console.log(err);
        }
    }

    return (

        <div>
            <Header />
            <div className=" container my-4" style={{ display: 'flex', justifyContent: "center" }}>
                <div className="card" style={{ width: '30rem', height: '300px' }}>
                    <div className="card-body">
                        <h5 className="card-title">Create a post</h5>
                        <p className="card-text">What's on your mind?</p>
                        <form >
                            <textarea name="paragraph_text" value={post} onChange={(e) => setPost(e.target.value)} cols="55" rows="4"></textarea><br></br>
                            <input type="file" onChange={(e) => setFile(e.target.files[0])}></input><br></br><br></br>
                            <button type='button' onClick={handleSubmit} className='btn btn-primary'>Post</button>
                        </form>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: "center" }}>
                <ImagePostCard />
            </div>
            <Footer />
        </div>
    )
}
