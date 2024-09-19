import React from 'react'

import HeroSection from "../components/HeroSection.jsx"
import CategoryInfo from "../components/CategoryInfo.jsx"
import RightCardInfo from "../components/Card/RightCardInfo.jsx"
import LeftCardInfo from "../components/Card/LeftCardInfo.jsx"
import ThirdCard from "../components/Card/ThirdCard.jsx"

function Home() {
    return (
        <>
            <main>
                <HeroSection />
                <CategoryInfo />
                <RightCardInfo />
                <LeftCardInfo />
                <ThirdCard />
            </main>

        </>
    )
}

export default Home