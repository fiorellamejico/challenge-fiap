import { Link } from 'react-router-dom';
import { AreaHeader } from "../../../componentes/header/styled";
import logo from "../../../../Public/schneider-logo-white.png"
import fotoFiorella from "../../../../Public/Fiorella.jpg"
import { AreaSobre } from './styled';


function Sobre(){
    return(
        <>
            <AreaHeader>
                <div className='container'>
                    <div className='logo'>
                        <img src={logo} alt='logo schneider branca'/>

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
                                <img src={fotoFiorella} alt="foto" className=' rounded-full'/>
                            </div>
                            <h2>Nome:</h2>
                            <p>Marilia Fiorella Méjico Mendoza Bueno</p>
                            <h2>Rm:</h2>
                            <p>96775</p>
                            <h2>Função:</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, accusantium!</p>
                        
                        </div>
                        <div className='card flex-shrink-0 w-72 space-y-1  bg-neutral-50 shadow-md rounded-t-xl'>
                            <div className='foto flex'>
                                <img src="https://img.freepik.com/vetores-premium/pessoa-desconhecida-mulher_116137-3895.jpg?w=2000" alt="foto" className='rounded-full'/>
                            </div>
                            <h2>Nome:</h2>
                            <p>Ana Luiza Barbosa Eduardo do Nascimento</p>
                            <h2>Rm:</h2>
                            <p>96775</p>
                            <h2>Função:</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, accusantium!</p>
                        
                        </div>
                        <div className='card flex-shrink-0 w-72 space-y-1  bg-neutral-50 shadow-md rounded-t-xl'>
                            <div  className='foto flex'>
                                <img src="https://img.freepik.com/vetores-premium/pessoa-desconhecida-mulher_116137-3895.jpg?w=2000" alt="foto" className='rounded-full '/>
                            </div>
                            <h2>Nome:</h2>
                            <p>Luana Batista de Oliveira</p>
                            <h2>Rm:</h2>
                            <p>997024</p>
                            <h2>Função:</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, accusantium!</p>
                        
                        </div>
                        <div className='card flex-shrink-0 w-72 space-y-1  bg-neutral-50 shadow-md rounded-t-xl'>
                            <div  className='foto flex'>
                                <img src="https://img.freepik.com/vetores-premium/pessoa-desconhecida-mulher_116137-3895.jpg?w=2000" alt="foto" className='rounded-full'/>
                            </div>
                            <h2>Nome:</h2>
                            <p>Leonardo Rodrigues Henriques</p>
                            <h2>Rm:</h2>
                            <p>970878</p>
                            <h2>Função:</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, accusantium!</p>
                        
                        </div>
                        <div className='card flex-shrink-0 w-72 space-y-1  bg-neutral-50 shadow-md rounded-t-xl'>
                            <div  className='foto flex'>
                                <img src="https://img.freepik.com/vetores-premium/pessoa-desconhecida-mulher_116137-3895.jpg?w=2000" alt="foto" className='rounded-full'/>
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
                        <h1 className= 'cabecalho'>Recursos e conteúdos que foram utilizados</h1>
                        <p className='bg-neutral-50 shadow-md rounded-t-xl p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minima ducimus, quia sed neque inventore saepe recusandae eligendi eaque illo! Iste natus ab a asperiores! Maiores deleniti nemo repellendus ipsam expedita recusandae alias aliquid illo eum provident nam ratione tempore officiis modi nisi quia aliquam quod dolor, quos facilis obcaecati?</p>
                    </div>

                </div>
            </AreaSobre>
                  
        </>
          
    );
    
}
export default Sobre;