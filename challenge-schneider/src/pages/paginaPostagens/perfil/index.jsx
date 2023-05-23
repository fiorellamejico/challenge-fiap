import getUserData from '../schemas/usuarioTesteSchema'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function MeuPerfil() {

    const [user, setUser] = useState({})

    useEffect(() => {
        setUser(getUserData())
    }, [])


    return (
        <div className=' h-screen w-full flex flex-col  overflow-hidden justify-center items-center'>
            <div className=' mb-3 h-48 rounded-xl shadow-inner bg-neutral-200 px-6 py-2 '>
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
            <Link to={'/postagens'}><button className=' mt-4 w-48 h-fit text-sch-green text-2xl p-4 border border-sch-green'>Retornar</button></Link>
        </div>
    )
}

