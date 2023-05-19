import { useState, useEffect } from "react"
import { postagensSchema } from "./schemas/postagensSchema"
import { Post } from "./post/post"

export default function TelaDePostagens() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const dados = await postagensSchema();
            setPosts(dados);
        };
        fetchData();
    }, []);



    return (
        <div className=" w-full flex flex-col bg-gray-200 items-center ">
            {
                posts.length == 0 && <h1 className=" select-none animate-pulse text-4xl text-center mt-4">Carregando...</h1>
            }

            {posts.length > 0 &&
                posts.map((post, i) => {
                    return <Post key={i} {...post} />
                })
            }
        </div>
    )
}