import { useEffect, useState } from 'react'
import '../cardLateralDireita/card.css'
import getUserData from '../schemas/usuarioTesteSchema'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Quiz from '../../../componentes/quiz'
import '../cardLateralDireita/card.css'


export default function Card() {

    const [user, setUser] = useState([])

    useEffect(() => {
        setUser(getUserData())
        console.log(user)
    }, [])

    return (
        <div className=" select-none flex flex-col justify-center fade-in-card w-full lg:w-4/12 p-4 lg:fixed lg:top-10 lg:left-0 ">
            <div className=' mb-3 h-48  rounded-xl shadow-inner bg-neutral-200 p-2 '>
                <h2 className=' font-bold text-xl text-neutral-500 text-center mb-4 '>
                    Seu Perfil
                </h2>
                <div className=' w-full flex justify-center'>
                    <img className=' border-4 border-sch-green rounded-full w-24 h-24' src={user.fotoDePerfil} alt="foto de perfil" />
                    <div className=' flex flex-col justify-center ml-4 text-neutral-800'>
                        <p className=''>Nome: {user.nome}</p>
                        <p className=''>Email: {user.email}</p>
                        <p className=' font-serif'>&quot;{user.titulo}&quot;</p>
                        <p className=' text-green-800'>Pontuação: <FontAwesomeIcon icon={faHeart} /> {user.pontos} </p>
                        <p className=' text-xs '> Ranking mensal: 24° lugar. </p>
                    </div>
                </div>
            </div> 
            <div className=' mb-2 pt-3 font-bold shadow w-full rounded-xl border bg-gray-50 flex justify-center items-center'>
                <Quiz/>
            </div>
            
        </div>
    )
}