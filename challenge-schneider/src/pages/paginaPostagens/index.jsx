import { useState, useEffect } from "react"
import { postagensSchema } from "./schemas/postagensSchema"
import { Post } from "./post/post"
import Loading from "../../componentes/loading/loading";
import Card from "./cardLateral";

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
        <div className=" w-full flex">
            <div className=" w-4/12 "></div>
            <div className={` pt-2 w-4/12 flex flex-col  items-center min-h-screen `}>
                {
                    posts.length == 0 && <Loading />
                }

                {posts.length > 0 &&
                    posts.map((post, i) => {
                        return <Post key={i} {...post} />
                    })
                }
            </div >
            <Card />
        </div>



    )
}