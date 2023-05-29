import { Link } from 'react-router-dom';
import { AreaHeader } from "../../../componentes/header/styled";
import logo from "/images/schneider-logo-white.png"
import fotoFiorella from '/images/fiorella.jpg'
import { AreaSobre } from './styled';


function Sobre() {
    return (
        <>
            <AreaHeader>
                <div className='container'>
                    <div className='logo'>
                        <img src={logo} alt='logo schneider branca' />

                    </div>
                    <nav>
                        <ul>
                            <Link to={'/info/pitch'}><li >Pitch</li> </Link>
                            <Link to={'/'} ><li >Voltar</li> </Link>
                        </ul>
                    </nav>
                </div>
            </AreaHeader>

            <AreaSobre>
                <div className="flex items-center justify-center flex-col">

                    <div className='justify-center items-center'>
                        <h1 className='cabecalho'>Sobre Nós</h1>
                    </div>

                    <div className='flex justify-center flex-wrap space-x-5 cards'>
                        <div className='card flex-shrink-0 w-72 space-y-1 bg-neutral-50 shadow-md rounded-t-xl'>
                            <div className='foto flex'>
                                <img src={fotoFiorella} alt="foto" className='rounded-full' />
                            </div>
                            <h2>Nome:</h2>
                            <p>Marilia Fiorella Méjico Mendoza Bueno</p>
                            <h2>Rm:</h2>
                            <p>97300</p>
                            <h2>Função:</h2>
                            <p>Elaboração de formulários, página Sobre, criação de conteúdo de postagens, e quiz.</p>

                        </div>
                        <div className='card flex-shrink-0 w-72 space-y-1  bg-neutral-50 shadow-md rounded-t-xl'>
                            <div className='foto flex'>
                                <img src="https://img.freepik.com/vetores-premium/pessoa-desconhecida-mulher_116137-3895.jpg?w=2000" alt="foto" className='rounded-full' />
                            </div>
                            <h2>Nome:</h2>
                            <p>Ana Luiza Barbosa Eduardo do Nascimento</p>
                            <h2>Rm:</h2>
                            <p>96775</p>
                            <h2>Função:</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, accusantium!</p>

                        </div>
                        <div className='card flex-shrink-0 w-72 space-y-1  bg-neutral-50 shadow-md rounded-t-xl'>
                            <div className='foto flex'>
                                <img src="https://img.freepik.com/vetores-premium/pessoa-desconhecida-mulher_116137-3895.jpg?w=2000" alt="foto" className='rounded-full ' />
                            </div>
                            <h2>Nome:</h2>
                            <p>Luana Batista de Oliveira</p>
                            <h2>Rm:</h2>
                            <p>997024</p>
                            <h2>Função:</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, accusantium!</p>

                        </div>
                        <div className='card flex-shrink-0 w-72 space-y-1  bg-neutral-50 shadow-md rounded-t-xl'>
                            <div className='foto flex'>
                                <img src="https://img.freepik.com/vetores-premium/pessoa-desconhecida-mulher_116137-3895.jpg?w=2000" alt="foto" className='rounded-full' />
                            </div>
                            <h2>Nome:</h2>
                            <p>Leonardo Rodrigues Henriques</p>
                            <h2>Rm:</h2>
                            <p>970878</p>
                            <h2>Função:</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, accusantium!</p>

                        </div>
                        <div className='card flex-shrink-0 w-72 space-y-1  bg-neutral-50 shadow-md rounded-t-xl'>
                            <div className='foto flex'>
                                <img src="https://img.freepik.com/vetores-premium/pessoa-desconhecida-mulher_116137-3895.jpg?w=2000" alt="foto" className='rounded-full' />
                            </div>
                            <h2>Nome:</h2>
                            <p>Victor Bonetti Pegoraro</p>
                            <h2>Rm:</h2>
                            <p>97533</p>
                            <h2>Função:</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, accusantium!</p>

                        </div>

                    </div>
                    <div className='flex flex-col space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10'>
                        <h1 className='cabecalho'>Recursos e conteúdos que foram utilizados</h1>
                        <div className='recursos bg-neutral-50 shadow-md rounded-t-xl p-5'>
                            <p >Na elaboração deste site, utilizamos uma combinação de recursos e conhecimentos para entregar uma experiência de valor agregado ao cliente.</p>
                            <p >Começando com o <b>Computational Thinking with Python</b> , aplicamos o aprendizado orientado a dados para coletar, organizar e analisar informações relevantes. Isso nos permitiu tomar decisões informadas e criar uma base sólida para o desenvolvimento do projeto.</p>
                            <p >Em paralelo, o <b>Edge Computing & Computer Systems</b>  desempenhou um papel crucial, colaborando na otimização das entregas. Utilizando técnicas avançadas de computação distribuída, pudemos melhorar a velocidade, eficiência, garantindo uma experiência aprimorada para o usuário final.</p>
                            <p >Ao explorar a <b> Formação Social e Sustentabilidade</b>, construímos programas que integram a sustentabilidade em todas as etapas do projeto. Consideramos a responsabilidade social e ambiental, buscando soluções que promovam um impacto positivo na sociedade e no meio ambiente.</p>
                            <p >No aspecto visual e de usabilidade, contamos com o expertise em <b>Front-End Design</b> . Desenvolvemos um site responsivo, que se adapta a diferentes plataformas e dispositivos, utilizando linguagens semânticas como HTML 5, CSS e Javascript. Além disso, utilizamos bibliotecas como React e frameworks para criar uma interface interativa e intuitiva.</p>
                            <p >Com a combinação de <b>Software & Total Experience Design</b> , mapeamos cuidadosamente os requisitos do cliente e desenvolvemos soluções personalizadas para atender suas necessidades. O foco foi sempre entregar valor agregado, garantindo uma experiência única e memorável para os usuários.</p>
                            <p >Por fim, utilizamos técnicas de <b>Storytelling e Inspiração Empreendedora</b>  para transmitir a mensagem do site de forma envolvente. Ao utilizar dados relevantes e aplicar técnicas narrativas persuasivas, fomos capazes de inspirar e cativar os visitantes, transmitindo a essência da proposta e gerando engajamento.</p>
                            <p >Em suma, por meio da combinação desses recursos - Computational Thinking with Python, Edge Computing & Computer Systems, Formação Social e Sustentabilidade, Front-End Design, Software & Total Experience Design e Storytelling e Inspiração Empreendedora - pudemos criar um site que não só atende às necessidades do cliente, mas também entrega valor agregado ao usuário final.</p>
                        </div>
                        
                    </div>

                </div>
            </AreaSobre>

        </>

    );

}
export default Sobre;