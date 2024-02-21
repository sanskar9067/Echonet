import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useAuth } from '../context/auth'
import axios from 'axios'
import Card from '../components/Card'
import Weather from '../components/Weather'
import News from '../components/News'

export default function Home() {
    const [auth] = useAuth();
    const [post, setPost] = useState("");
    const name = auth.user.name;
    const email = auth.user.email;
    let likes = 0;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:3001/api/v1/auth/post`, { name: name, email: email, post, likes });
            if (res.data.success) {
                alert("Post Uploaded");
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <Header />
            <div className="my-5" style={{ display: "flex", justifyContent: "center" }}>
                <div className='row container'>
                    <div className='col-lg-4 col-md-12'>
                        <div className="card" style={{ width: '18rem', height: '150px' }}>
                            <div className="card-body">
                                <h5 className="card-title">Hello</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{auth.user.name}</h6>
                                <p className="card-text">{auth.user.email}</p>
                            </div>
                        </div>
                        <div className="card mt-4" style={{ width: '18rem', height: '250px' }}>
                            <Weather />
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-12' style={{ display: "flex", justifyContent: "center" }}>
                        <Card />
                    </div>
                    <div className='col-lg-4 col-md-12' style={{ display: "flex", justifyContent: "center" }}>
                        <div className="card" style={{ width: '18rem', height: '400px' }}>
                            <div className="card-body">
                                <h5 className="card-title">Create a post</h5>
                                <p className="card-text">What's on your mind?</p>
                                <form onSubmit={handleSubmit}>
                                    <textarea name="paragraph_text" value={post} onChange={(e) => setPost(e.target.value)} cols="30" rows="10"></textarea><br></br>
                                    <button type='submit' className='btn btn-primary'>Post</button>
                                </form>
                            </div>
                            <div className="card mt-4" style={{ width: '18rem', height: 'auto' }}>
                                <News />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
