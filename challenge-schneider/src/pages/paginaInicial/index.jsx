import PESSOAS_IMG from '../../../Public/duotone.png'
import FormularioDeLogin from './login'
import logo from '../../../Public/schneider-logo-white.png'
import { useState } from 'react';
import './css/login.css'
import { Link } from 'react-router-dom';


export default function PaginaInicial() {

    const [isDialogOpen, setDialogOpen] = useState(true);

    return (
        <main className=" md:overflow-hidden flex flex-col h-screen text-gray-500 bg-gray-50">
            <header className=' pt-2 flex justify-between absolute w-full h-16 '>
                <img className=' ml-2 h-full ' src={logo} alt="logo schneider branco" />
                <Link className=' flex justify-center items-center mr-2 shadow-xl transition-all bg-neutral-800 text-white text-2xl py-2 px-6 rounded hover:rounded-3xl font-bold cursor-pointer text-center ' to={'/cadastro'}><button className=' text-center'>Cadastre-se</button></Link>
            </header>

            <div className=' h-2/5'>
                <img className=' w-full h-full object-cover ' src={PESSOAS_IMG} alt="Pessoas rindo imagem duotônica" />
            </div>

            <div className=' w-full flex flex-col justify-center items-center md:flex-row h-3/5 '>
                <div className=' w-full md:w-1/2 p-6'>
                    <h1 className="  text-2xl lg:text-4xl text-sch-green">Bem-vindo à Rede Social Interna da Schneider.</h1>
                    <p className="text-justify text-xl font-thin">A SchneiderStream tem como objetivo unir funcionários em prol da sustentabilidade, compartilhando ideias e construindo um futuro sustentável coletivamente.</p>
                    <nav className='w-3/3 my-8'>
                        <ul className=' w-full flex justify-evenly items-center '>
                            <Link className=' shadow border rounded-md border-gray-600 p-2 hover:underline transition-all text-gray-600 text-ss font-bold cursor-pointer text-center' to={'/info/pitch'}><li >Video Pitch</li> </Link>
                            <Link className=' shadow border rounded-md border-gray-600 p-2 hover:underline transition-all text-gray-600 text-sl font-bold cursor-pointer text-center' to={'/info/sobre'}><li >Sobre o projeto</li> </Link>
                        </ul>
                    </nav>



                </div>
                <div className='  w-full md:w-1/2 flex justify-center items-center h-full bg-white shadow-md rounded px-8'>
                    <FormularioDeLogin />
                </div>
                <dialog open={isDialogOpen} className=" fade-in-animation dialog shadow-2xl absolute top-28 left-4">
                    <h1 className=' text-lg  text-center mt-2'>Dados para teste</h1>
                    <p className="pdialog">Seu email é: <strong>teste@email.com</strong></p>
                    <p className="pdialog">Sua senha é: <strong>teste123</strong></p>
                    <button className="botaodialog transition-all" onClick={() => setDialogOpen(false)}>OK</button>
                </dialog>
            </div>

        </main >
    )
}