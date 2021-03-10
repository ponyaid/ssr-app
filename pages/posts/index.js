import { useEffect, useState } from 'react'
import Box from '@material-ui/core/Box'
import { MainLayout } from '../../layouts/MainLayout'



export default function Post() {
    const [posts, setPosts] = useState([])

    useEffect(async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`)
        const posts = await res.json()
        setPosts(posts)
    }, [])

    console.log('posts', posts)

    return (
        <MainLayout title="Title is here | Posts">
            <h1>Posts Page</h1>
            {posts.map((post, index) =>
                <Box my={4} key={index} >
                    <p>{post.Title}</p>
                </Box>)
            }
        </MainLayout >
    )
}


// export async function getStaticProps() {
//     const res = await fetch('http://localhost:1337/posts')
//     const posts = await res.json()

//     return {
//         props: { posts }
//     }
// }