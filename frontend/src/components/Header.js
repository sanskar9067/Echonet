import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/auth'

export default function Header() {

    const [auth] = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/");
        window.location.reload();

    };

    return (
        <div>
            <header>
                <div className="px-3 py-2 text-bg-primary border-bottom">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <div className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                                <i class="fa-solid fa-hashtag mx-2"></i>EchoNet
                            </div>
                            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                {
                                    !auth.user ? (<>
                                        <li>
                                            <Link className='btn btn-dark mx-3' to="/">Login</Link>
                                        </li>
                                        <li>
                                            <Link className='btn btn-dark' to="/register">Register</Link>
                                        </li>
                                    </>) : (
                                        <>
                                            <li>
                                                <Link to="/home" className="nav-link text-white">

                                                    <i class="fa-solid fa-house"></i>

                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/yourposts" className="nav-link text-white">
                                                    <i class="fa-regular fa-file"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/imagepost" className="nav-link text-white">
                                                    <i class="fa-solid fa-images"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/yourimagepost" className="nav-link text-white">
                                                    <i class="fa-solid fa-image-portrait"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/aboutme" className="nav-link text-white">
                                                    <i class="fa-solid fa-address-card"></i>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link className='btn btn-dark' to="/" onClick={handleLogout}>Logout</Link>
                                            </li>

                                        </>
                                    )
                                }

                            </ul>
                        </div>
                    </div>
                </div>

            </header>

        </div>
    )
}
