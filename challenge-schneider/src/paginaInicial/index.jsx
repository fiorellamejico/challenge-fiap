import PESSOAS_IMG from '../../Public/duotone.png'
import FormularioDeLogin from './formularioDeLogin'
import { Link } from 'react-router-dom';


export default function PaginaInicial() {
    return (
        <main className=" flex flex-col h-screen text-gray-500 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200">
            <header className=' pt-2 flex justify-end absolute w-full h-16 '>
                <nav className='  w-1/3'>
                    <ul className=' w-full flex justify-evenly items-center'>
                        <li className=' w-1/3 py-2 px-1 rounded-2xl  bg-'></li>
                        <Link className=' shadow-xl transition-all hover:bg-sch-blue hover:text-white text-xl w-1/2 py-4 px-2 rounded-2xl font-bold bg-gray-200 cursor-pointer text-center border text-sch-blue border-sch-blue' to={'/login/cadastro'}><li>Faça seu cadastro</li></Link>
                    </ul>
                </nav>
            </header>
            <div className=' h-1/2'>
                <img className=' w-full h-full object-cover ' src={PESSOAS_IMG} alt="Pessoas rindo imagem duotônica" />
            </div>
            <div className=' overflow-hidden w-full flex h-1/2 '>
                <div className=' w-1/2 p-6'>
                    <h1 className="  text-2xl lg:text-4xl text-sch-green">Bem-vindo à Rede Social Interna da Schneider</h1>
                    <p className="text-justify text-xl font-thin">Unindo funcionários em prol da sustentabilidade, compartilhando ideias e construindo um futuro sustentável coletivamente.</p>
                </div>
                <div className=' w-1/2 flex justify-center items-center h-full bg-white shadow-md rounded px-8'>
                    <FormularioDeLogin />
                </div>
            </div>
        </main>
    )
}