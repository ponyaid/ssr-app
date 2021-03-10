import React from 'react'
import Router from 'next/router'
import { MainLayout } from '../layouts/MainLayout'


export default function About() {

    const linkClickHandler = () => {
        Router.push('/')
    }

    return (
        <MainLayout title="Title is here | About">
            <h1>About Page</h1>
            {/* <button onClick={linkClickHandler}>Go back to home</button>
            <button onClick={() => Router.push('/posts')}>Go to posts</button> */}
        </MainLayout>
    )
}