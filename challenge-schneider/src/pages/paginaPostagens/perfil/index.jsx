import getUserData from '../schemas/usuarioTesteSchema'
import { faEdit, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PopUp from '../../../componentes/popUp/popUp'


export default function MeuPerfil() {

    const [user, setUser] = useState({})

    useEffect(() => {
        setUser(getUserData())
    }, [])

    const [windowOpen, setWindowOpen] = useState(true)

    const action = () => {
        alert("Função não implementada: Editar dados de usuário.")
    }

    return (
        <div className=' w-full h-screen flex flex-col  overflow-hidden justify-center items-center'>
            {windowOpen &&
                <div className=' w-1/2'>
                    <PopUp setWindowOpen={setWindowOpen} message={['Na nossa plataforma, a pontuação e o ranking mensal são utilizados para medir o engajamento e a participação ativa dos usuários.', 'A pontuação é obtida por meio de interações construtivas, compartilhamento de conhecimentos, participação em discussões e acertos nos quizzes. Quanto mais envolvimento, maior será a pontuação.', ' O ranking mensal classifica os usuários com base na pontuação acumulada durante o mês. Parabenizamos o usuário pelo seu atual 24° lugar no ranking e incentivamos a continuidade da participação ativa para alcançar uma posição ainda melhor no próximo mês.']} />
                </div>
            }
            <div className=' mb-3 rounded-xl shadow-inner bg-neutral-200 '>
                <div className=' w-full flex justify-center'>

                    <img className=' w-1/3 rounded-l-xl h-full obj-cover' src={user.fotoDePerfil} alt="foto de perfil" />
                    <div className=' w-2/3 flex flex-col justify-start ml-4 text-neutral-800'>
                        <FontAwesomeIcon onClick={() => action()} className=' hover:cursor-pointer m-4 self-end justify-self-start text-2xl' icon={faEdit} />
                        <div>
                            <p className=' text-xl font-bold '>Nome: {user.nome}</p>
                            <p className=' text-lg'>Email: {user.email}</p>
                            <p className=' text-lg'>Pontuação: <FontAwesomeIcon className=' text-sch-green' icon={faHeart} /> {user.pontos} </p>
                            <p className=' text-lg  '> Ranking mensal: 24° lugar. </p>
                            <p className=' text-neutral-600 text-sm italic'>&quot;{user.titulo}&quot;</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={'/postagens'}><button className=' mt-4 w-48 h-fit text-sch-green text-2xl p-4 border border-sch-green'>Retornar</button></Link>
        </div>
    )
}

