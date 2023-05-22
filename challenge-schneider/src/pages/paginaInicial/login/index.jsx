import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './schemas/loginSchema';
import '../css/login.css'
import { useState } from 'react';

export default function FormularioDeLogin() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const [listaClientes, setListaClientes] = useState([])

    function inserirCliente(cliente) {
        if (cliente.email.trim() === 'teste@email.com' && cliente.senha === 'teste123') {
            setListaClientes([...listaClientes, cliente])
            window.location.href = '/postagens';
        } else {
            alert('Usuário e senha não foram encontrados no banco de dados.')
        }

    }

    return (

        <form onSubmit={(handleSubmit(inserirCliente))} className=" pt-4">
            <h1 className=' text-sch-green text-2xl text-center'>Fazer Login</h1>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Digite seu email"
                    {...register('email')}
                />
                <span>{errors.email?.message}</span>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Senha
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Digite sua senha"
                    {...register('senha')}
                />
                <span>{errors.senha?.message}</span>
            </div>
            <div className="flex flex-col items-center">
                <button className=" w-full bg-sch-green hover:bg-sch-green-dark text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Entrar
                </button>
                <Link to={'/esquecisenha'}><button type="submit" className="text-sm text-sch-green hover:text-sch-green-dark" href="#">Esqueci minha senha</button></Link>
            </div>
        </form>
    )
}