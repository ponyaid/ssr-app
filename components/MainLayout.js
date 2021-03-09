import React from 'react'
import Link from 'next/link'
import Head from 'next/head'


export const MainLayout = ({ children, title = 'Title is here' }) => {
    return (
        <React.Fragment>
            <Head>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="keywords" content="next,javascript,react" />
                <meta name="description" content="This is description" />
            </Head>
            <nav>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/about'}><a>About</a></Link>
                <Link href={'/posts'}><a>Posts</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
                nav {
                    position: fixed;
                    height: 60px;
                    top: 0;
                    left: 0;
                    right: 0;
                    background: darkblue;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }

                a {
                    color: #fff;
                    text-decoration: none;
                }

                main {
                    margin-top: 60px;
                    padding: 1rem;
                }
            `}
            </style>
        </React.Fragment>
    )
}