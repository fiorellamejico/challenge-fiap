import PESSOAS_IMG from '../../../Public/duotone.png'
import FormularioDeLogin from './login'
import logo from '/schneider-logo-white.png'
import { useState } from 'react';
import './css/login.css'
import { Link } from 'react-router-dom';


export default function PaginaInicial() {

    const [isDialogOpen, setDialogOpen] = useState(true);

    return (
        <main className=" md:overflow-hidden flex flex-col h-screen text-gray-500 bg-gray-50">
            <header className=' pt-2 flex justify-between absolute w-full h-16 '>
                <img className=' ml-8 h-full mt-4' src={logo} alt="logo schneider branco" />
                <Link className='' to={'/cadastro'}>
                    <button className='botaocadastro'>Cadastre-se</button>
                </Link>
            </header>

            <div className=' h-2/5'>
                <img className=' w-full h-full object-cover ' src={PESSOAS_IMG} alt="Pessoas rindo imagem duotônica" />
            </div>

            <div className=' w-full flex flex-col justify-center items-center h-fit lg:flex-row lg:h-3/5 '>
                <div className=' w-70 md:w-1/2 p-10'>
                    <h1 className="titulo ">Bem-vindo à Rede Social Interna da Schneider.</h1>
                    <p id='copy01' className="text-justify text-xl font-thin">A SchneiderStream tem como objetivo unir funcionários em prol da sustentabilidade, compartilhando ideias e construindo um futuro sustentável coletivamente.</p>
                    <nav className='w-3/3 my-8'>
                        <ul className=' w-full flex justify-evenly items-center '>
                            <Link className='' to={'/info/pitch'}><li ><button className='botaosec'>Video Pitch</button></li> </Link>
                            <Link className='' to={'/info/sobre'}><li ><button className='botaosec'>Sobre o projeto</button></li>  </Link>
                        </ul>
                    </nav>



                </div>
                <div className='  w-full md:w-1/2 flex justify-center items-center h-full bg-white shadow-md rounded px-8'>
                    <FormularioDeLogin />
                </div>
                <dialog open={isDialogOpen} className=" text-xs fade-in-animation dialog shadow-2xl absolute top-20 left-16">
                    <h1 className=' ml-2 text-sm font-bold text mt-2'>Dados para teste de usuário</h1>
                    <p className="pdialog">Email teste de usuário: <strong>teste@email.com</strong></p>
                    <p className="pdialog">Senha teste de usuário: <strong>teste123</strong></p>
                    <h1 className=' ml-2 text-sm font-bold text mt-4'>Dados para teste de administrador</h1>
                    <p className="pdialog">Email teste de administrador: <strong>admin@email.com</strong></p>
                    <p className="pdialog">Senha teste de administrador: <strong>admin123</strong></p>
                    <button className="botaodialog transition-all" onClick={() => setDialogOpen(false)}>OK</button>
                </dialog>
            </div>

        </main >
    )
}