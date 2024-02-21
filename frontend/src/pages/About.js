import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
    return (
        <div>
            <Header />
            <div className='container mt-5'>
                <div className='row'>
                    <h1 style={{ textAlign: "center" }}>About Me</h1>
                    <div className='col-xl-6 col-mg-12'>
                        <img src="https://res.cloudinary.com/supportbee-site/image/fetch/c_fill,f_auto,h_1184,q_auto:best,w_1184/https://ghost.supportbee.com/content/images/2020/10/Customer-Service.jpg" height={"400vh"} alt="custspp" />
                    </div>
                    <div className='col-xl-6   col-mg-12 ' style={{ display: "flex", alignItems: "center" }}>
                        <div>
                            <h1>Sanskar Sinha</h1><br></br>
                            <p>Hi, I am Sanskar Sinha, who aspires to be a full stack web developer and currently pursuing my B.Tech from the prestigious university named as Vellore Institute of Technology, Bhopal.</p>
                            <Link className="btn btn-primary" to="https://www.linkedin.com/in/sanskar-sinha/" target="_blank"><i class="fa-brands fa-linkedin m-1"></i>LinkedIn</Link>
                            <Link className="btn btn-primary m-3" to="https://github.com/sanskar9067" target="_blank"><i class="fa-brands fa-github m-1"></i>GithHub</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
