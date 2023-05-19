import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './css/Cadastrese.css'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './schemas/cadastroSchema';
import { Link } from 'react-router-dom';
import { AreaHeader } from '../../componentes/header/styled';


function Cadastrese() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const [listaClientes, setListaClientes] = useState([])

    function inserirCliente(cliente) {
        setListaClientes([...listaClientes, cliente])
    }

    return (

        <>
            <AreaHeader>
                <div className='container'>
                    <div className='logo'>
                        <img src='../../../Public/logoschneider.png'/>

                    </div>
                    <nav>
                        <ul>
                            <Link to={'/login/pitch'}><li >Pitch</li> </Link>
                            <Link to={'/login/sobre'}><li >Sobre Nós</li> </Link>
                            <Link to={'/'} ><li >Tela Inicial</li> </Link>
                        </ul>
                    </nav>
                </div>
            </AreaHeader> 

            <div className='  flex items-center justify-center'>
                <form onSubmit={handleSubmit(inserirCliente)}>
                    <fieldset className=' p-5  text-gray-700 bg-gray-50'>
                        <h1 className=' text-2xl'>Criar seu perfil</h1>
                        <label>Nome:
                            <input className=' bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 ' placeholder='Insira seu nome' type="text" {...register('nome')} />
                            <span>{errors.nome?.message}</span>
                        </label>
                        <label>Email:
                            <input className=' bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 ' placeholder='Insira seu e-mail' type="text" {...register('email')} />
                            <span>{errors.email?.message}</span>
                        </label>

                        <label>ID de funcionário:
                            <input className=' bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 ' placeholder='Insira seu ID de funcionário' type="text" {...register('id')} />
                            <span>{errors.id?.message}</span>
                        </label>

                        <label>Senha:
                            <input className=' bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5 ' placeholder='Insira a senha' type="password" {...register('senha')} />
                            <span>{errors.senha?.message}</span>
                        </label>
                        <label>Repita a senha:
                            <input className=' bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 ' placeholder='Insira a senha novamente' type="password" {...register('senhaConfirma')} />
                            <span>{errors.senhaConfirma?.message}</span>
                        </label>
                        <div className=' w-full flex justify-evenly items-center'>
                            <Link to={'/'} className=' text-sm w-1/2 text-gray-400 underline cursor-pointer '><p >Cancelar</p></Link>
                            <button type='submit' className=' text-xl border border-sch-blue w-1/2 transition-all bg-sch-blue text-white hover:text-sch-blue hover:bg-white'>Criar</button>
                        </div>
                    </fieldset>

                </form>

            </div>
        </>

        
    )
}
export default Cadastrese;