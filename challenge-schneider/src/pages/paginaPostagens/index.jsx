import { useState, useEffect } from "react"
import { postagensSchema } from "./schemas/postagensSchema"
import { Post } from "./post/post"

export default function TelaDePostagens() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        setPosts(postagensSchema);
    }, []);


    return (
        <div>
            {
                posts.map((post, i) => {
                    return <Post key={i} {...post} />
                })
            }
        </div>
    )
}