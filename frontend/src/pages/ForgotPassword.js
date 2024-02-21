import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForgotPassword() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            alert("Password Updated");
            navigate("/");
            // eslint-disable-next-line
            const res = await axios.post(`http://localhost:3001/api/v1/auth/forgotpassword`, { email, password });
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <Header />
            <div className='authform'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h1 className='my-4' style={{ textAlign: "center" }}>Forgot Password</h1>
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

                </form>
            </div>


            <Footer />
        </div>
    )
}
