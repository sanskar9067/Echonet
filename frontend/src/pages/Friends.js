import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UserCard from '../components/UserCard'

export default function Friends() {
    return (
        <div>
            <Header />
            <div style={{ display: 'flex', justifyContent: "center" }}>
                <div className='row container'>
                    <div className='col-lg-6 col-sm-12 my-4' style={{ display: 'flex', justifyContent: "center", border: "1px solid black" }}>
                        <div className='my-4'>
                            <h1>Add Friends</h1>
                            <UserCard />
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}
