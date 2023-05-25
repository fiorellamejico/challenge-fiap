import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './css/Cadastrese.css'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './schemas/cadastroSchema';
import { Link } from 'react-router-dom';
import { AreaHeader } from '../../componentes/header/styled';
import logo from "../../../Public/schneider-logo-white.png"
import Pergunta from './pergunta';

function Cadastrese() {

    const [getPerfil, setPerfil] = useState({})

    useEffect(() => {
        setPerfil({
            "Energia Verde": 0,
            "Ciclista Sustentável": 0,
            "Campeão da Reciclagem": 0
        })
    }, [])

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const [listaClientes, setListaClientes] = useState([])

    function inserirCliente(cliente) {
        setListaClientes([...listaClientes, cliente])
    }

    const pontuar = (pontos, perfil) => {
        getPerfil[perfil] = pontos
        console.log(getPerfil)
    }

    return (

        <>
            <AreaHeader>
                <div className='container'>
                    <div className='logo'>
                        <img src={logo} alt='logo schneider branco' />

                    </div>
                    <nav>
                        <ul>
                            <Link to={'/info/pitch'}><li >Pitch</li> </Link>
                            <Link to={'/info/sobre'}><li >Sobre Nós</li> </Link>
                            <Link to={'/'} ><li >Tela Inicial</li> </Link>
                        </ul>
                    </nav>
                </div>
            </AreaHeader>

            <div className='  flex items-center justify-center'>
                <form onSubmit={handleSubmit(inserirCliente)}>
                    <fieldset className=' overflow-scroll p-5  text-gray-700 bg-gray-50'>
                        <h1 id='titulo' className=''>Criar seu perfil</h1>
                        <label>Nome:
                            <input className=' bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 ' placeholder='Insira seu nome' type="text" {...register('nome')} />
                            <span>{errors.nome?.message}</span>
                        </label>
                        <label>Email:
                            <input className=' bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 ' placeholder='Insira seu e-mail' type="text" {...register('email')} />
                            <span>{errors.email?.message}</span>
                        </label>

                        {/* <label>ID de funcionário:
                            <input disabled className=' bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 ' placeholder='Insira seu ID de funcionário' type="text" {...register('id')} />
                            <span>{errors.id?.message}</span>
                        </label> */}

                        <label>Senha:
                            <input className=' bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5 ' placeholder='Insira a senha' type="password" {...register('senha')} />
                            <span>{errors.senha?.message}</span>
                        </label>
                        <label>Repita a senha:
                            <input className=' bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 ' placeholder='Insira a senha novamente' type="password" {...register('senhaConfirma')} />
                            <span>{errors.senhaConfirma?.message}</span>
                        </label>


                        <div>
                            <Pergunta pergunta="Estou sempre em busca de tecnologias mais eficientes em termos de consumo de energia." perfil='Energia Verde' pontuar={pontuar} />
                            <Pergunta pergunta="Uso a bicicleta como meio de transporte principal no meu dia-a-dia." perfil='Ciclista Sustentável' pontuar={pontuar} />
                            <Pergunta pergunta="Pratico a separação correta dos resíduos e incentivo outros a fazerem o mesmo." perfil='Campeão da Reciclagem' pontuar={pontuar} />
                        </div>

                        <button type='submit' className='botaoentrar w-full bg-sch-green hover:bg-sch-green-dark text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline botaocriar'>Criar</button>
                        <Link to={'/'} className=' cancelartexto text-sm w-1/2 text-gray-400 underline cursor-pointer'><p >Cancelar</p></Link>

                    </fieldset>

                </form>

            </div>
        </>


    )
}
export default Cadastrese;