import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import YourImageCard from '../components/YourImageCard'

export default function YourImagePost() {
    return (
        <div>
            <Header />
            <div>
                <div>
                    <div style={{ display: 'flex', justifyContent: "center" }}>
                        <YourImageCard />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
