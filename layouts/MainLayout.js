import React from 'react'
import Head from 'next/head'
import { Navbar } from '../components/Navbar'


export const MainLayout = ({ children, title = 'Title is here' }) => {
    return (
        <div className="main">
            <Head>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="keywords" content="next,javascript,react" />
                <meta name="description" content="This is description" />
            </Head>
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    )
}