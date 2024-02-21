import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:3001/api/v1/auth/register`, { name, email, password });
            if (res.data.success) {
                alert("Registered Successfully");
                navigate("/");
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Header />
            <div className='authform'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h1 className='my-4' style={{ textAlign: "center" }}>SignUp</h1>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputName" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>

                    </div>
                    <div className='my-4'>
                        <Link to="/" className="btn btn-primary">Already have an account?</Link>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}
