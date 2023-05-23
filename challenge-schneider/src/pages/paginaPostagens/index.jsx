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
        <div className=" overflow-x-hidden w-full flex lg:flex-col justify-center items-center">

            {
                posts.length == 0 && <Loading />
            }

            <div className=" w-1/5 lg:w-4/12">
                <Nav />
            </div>
            <div className={` w-4/5 pt-2 lg:w-4/12 flex flex-col  items-center min-h-screen `}>



                {posts.length > 0 &&
                    posts.map((post, i) => {
                        return <Post key={i} {...post} />
                    })
                }
            </div >
            <div className=" hidden lg:flex w-full lg:w-4/12 ">
            </div>

        </div>



    )
}