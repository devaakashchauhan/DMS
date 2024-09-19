import React from 'react'
import ContactCard from '../components/Card/ContactCard'

function Contact() {
    return (
        <>
            <section className="relative block h-500-px">
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
                    }}
                >
                    <span
                        id="blackOverlay"
                        className="w-full h-full absolute opacity-50 bg-black"
                    ></span>
                </div>
                <div
                    className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                    style={{ transform: "translateZ(0)" }}
                >

                </div>
            </section>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center mt-32">
                    <ContactCard />
                    <ContactCard />
                    <ContactCard />
                    <ContactCard />
                    <ContactCard />

                </div>
            </div>
        </>
    )
}

export default Contact