import { useEffect, useState } from 'react'
import { MainLayout } from '../../components/MainLayout'


export default function Post({ posts }) {
    // const [posts, setPosts] = useState([])

    return (
        <MainLayout title="Title is here | Posts">
            <h1>Posts Page</h1>
            <pre>{JSON.stringify(posts)}</pre>
        </MainLayout>
    )
}


export async function getStaticProps() {
    const res = await fetch('http://localhost:1337/posts')
    const posts = await res.json()

    return {
        props: { posts }
    }
}