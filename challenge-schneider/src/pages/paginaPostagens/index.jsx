import { useState, useEffect } from "react"
import { postagensSchema } from "./schemas/postagensSchema"
import { Post } from "./post/post"
import Loading from "../../componentes/loading/loading";
import Nav from "./nav";

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
        <div className=" w-full flex flex-col lg:flex-row justify-center items-center">
            <div className=" w-full lg:w-4/12">
                <Nav />
            </div>
            <div className={` w-4/5 pt-2 lg:w-4/12 flex flex-col  items-center min-h-screen `}>

                <h1 className=" text-neutral-800  lg:hidden text-3xl font-semibold ">Linha do tempo</h1>

                {
                    posts.length == 0 && <Loading />
                }

                {posts.length > 0 &&
                    posts.map((post, i) => {
                        return <Post key={i} {...post} />
                    })
                }
            </div >
            <div className=" w-full lg:w-4/12 ">
            </div>

        </div>



    )
}