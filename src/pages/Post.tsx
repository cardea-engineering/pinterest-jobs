import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { JobData, getPost } from "../api"
import he from "he"
import { NoneFound } from "../components/NotFound"

const Post = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState<null | JobData>(null)
    useEffect(() => {
        async function _setPost() {
            const _post = await getPost(id)
            setPost(_post)
            setLoading(false)
        }

        if (id) {
            _setPost()
        }
    }, [id])

    if (loading) {
        return <div>Loading post...</div>
    }

    if (!post) {
        return <NoneFound />
    }

    return (
        <div>
            <h1>
                {post.title} (#{post.id})
            </h1>
            <div>
                <a
                    href={post.absolute_url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View original post
                </a>
            </div>
            <div
                // The "content" of a post is an encoded HTML string
                dangerouslySetInnerHTML={{ __html: he.decode(post.content!) }}
            />
        </div>
    )
}

export default Post
