import { useState, useEffect } from "react"
import { postagensSchema } from "./schemas/postagensSchema"
import { Post } from "./post/post"
import Loading from "../../componentes/loading/loading";
import Nav from "./nav";
import PopUp from "../../componentes/popUp/popUp";
import MyComponent from "./newPost";

export default function TelaDePostagens() {

    const [posts, setPosts] = useState([])

    const [windowOpen, setWindowOpen] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const dados = await postagensSchema();
            setPosts(dados);
            setWindowOpen(true)
        };
        fetchData();
    }, []);



    return (
        <div className=" overflow-x-hidden w-full flex lg:flex-col justify-center items-center">

            {
                posts.length == 0 && <Loading />
            }

            <div className=" w-1/5 lg:w-4/12 ">
                <Nav />
            </div>
            

            <div className={` w-4/5 pt-2 lg:w-6/12 flex flex-col  items-center min-h-screen `}>

                {
                    windowOpen &&
                    <PopUp message={[
                        'Bem-vindo à aba de postagens da Rede Social Interna Schneider!',

                        'Este é o espaço onde a colaboração e a conexão ganham vida. Aqui, você pode compartilhar suas ideias, conquistas, inspirações e desafios, construindo um ambiente de trabalho mais unido e engajado.',

                        'Use este espaço para iniciar discussões, promover projetos sustentáveis, compartilhar notícias e artigos relevantes sobre o tema da sustentabilidade. Juntos, podemos explorar soluções inovadoras, aprender uns com os outros e impulsionar o progresso em direção a um futuro mais sustentável.',

                        'Sinta-se à vontade para compartilhar suas experiências, perguntas e insights. Esta é uma comunidade dedicada a fazer a diferença, e cada postagem contribui para fortalecer nossos laços e nosso impacto positivo no mundo.',

                        'Lembre-se de ser respeitoso, colaborativo e construtivo em suas interações. Vamos aproveitar ao máximo essa plataforma, inspirando-nos mutuamente e incentivando um ambiente de trabalho sustentável e próspero.']} setWindowOpen={setWindowOpen} />
                }

            <div>
                {
                    
                    <MyComponent message={[]} setWindowOpen={setWindowOpen} />
                }
            </div>
                

                {posts.length > 0 &&
                    posts.map((post, i) => {
                        return <Post key={i} {...post} />
                    })
                }
            </div >
            <div>

            </div>
           

        </div>



    )
}