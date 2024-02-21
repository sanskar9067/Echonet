import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PageNotFound() {
    return (
        <div>
            <Header />
            <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "80vh" }}>
                <h1>Error 404<br></br>Page Not Found</h1>
            </div>
            <Footer />
        </div>
    )
}
