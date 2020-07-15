import React, { useState, useEffect } from "react"
import { getPosts, JobData } from "../api"
import { Link } from "react-router-dom"

const Home = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [posts, setPosts] = useState<JobData[]>([])

    useEffect(() => {
        async function _setPosts() {
            const _posts = await getPosts()
            setPosts(_posts)
            setLoading(false)
        }

        _setPosts()
    }, [])

    if (loading) return <div>Just a second... loading the jobs!</div>

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <Link to={`/post/${post.id}`}>{post.title}</Link>
                </div>
            ))}
        </div>
    )
}

export default Home
