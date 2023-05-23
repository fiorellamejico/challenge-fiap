import { useEffect, useState } from 'react'
import '../news/card.css'
import '../news/card.css'
import getUserData from '../schemas/usuarioTesteSchema'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';


export default function Nav() {

    const [user, setUser] = useState([])

    useEffect(() => {
        setUser(getUserData())
        console.log(user)
    }, [])

    return (
        <nav className=' h-full select-none flex flex-col items-center fade-in-card w-2/12 p-4 fixed top-14 lg:left-60 '>
            <ul className=' w-full'>
                <Link to={'/postagens/perfil'}>
                    <li className=' h-16 hover:cursor-pointer hover:underline border-neutral-300 border-b-2 pb-2 flex items-center w-full text-2xl text-neutral-600'>
                        <img src={user.fotoDePerfil} className=' mr-2 w-12 h-12 rounded-full ' alt="foto de perfil" /> <p className=' hidden lg:block'> Meu Perfil</p></li></Link>

                <li className=' h-16 hover:cursor-pointer hover:underline border-neutral-300 border-b-2 py-2 flex items-center w-full text-2xl text-neutral-600'><FontAwesomeIcon className=' mr-2 text-5xl ' icon={faQuestionCircle} /> <p className=' hidden lg:block'>Quiz Diário</p>
                    <span className=" ml-9 mt-8 absolute inline-flex items-center justify-center w-5 h-5 bg-sch-blue text-xs text-white font-bold rounded-full">3</span></li>

                <Link to={'/postagens/news'}><li className=' h-16 hover:cursor-pointer hover:underline border-neutral-300 border-b-2 py-2 flex items-center w-full text-2xl text-neutral-600'><FontAwesomeIcon className=' mr-2 text-5xl' icon={faNewspaper} /><p className=' hidden lg:block'> News</p>
                    <span className=" ml-9 mt-8 absolute inline-flex items-center justify-center w-5 h-5 bg-sch-green text-xs text-white font-bold rounded-full">1</span>
                </li></Link>

            </ul>
        </nav >
    )
}