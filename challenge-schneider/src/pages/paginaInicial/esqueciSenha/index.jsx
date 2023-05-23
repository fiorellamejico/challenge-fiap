import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './schemas/esqueciSenhaSchema';
import { useRef, useState } from 'react';

export default function FormularioEsqueciSenha() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const [listaClientes, setListaClientes] = useState([])

    function inserirCliente(cliente) {
        alert(' Foi enviada uma mensagem no seu e-mail.')
        setListaClientes([...listaClientes, cliente])
        window.location.href = '/'
    }

    const botaoPopUp = useRef(HTMLButtonElement);
    const modal = useRef(HTMLDialogElement);
    const botaoModal = useRef(HTMLButtonElement);

    botaoPopUp.onClick = function () {
        modal.show()
    }

    botaoModal.onClick = function () {
        modal.close()
    }



    return (

        <form onSubmit={handleSubmit(inserirCliente)} className=" mt-2 pt-4 h-screen w-full flex justify-center items-center " >
            <div className=" w-5/6 lg:w-1/3 h-fit p-4 border rounded-xl">
                <h1 className=' text-sch-green text-2xl text-center'>Recuperação de Senha</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Digite seu email" {...register('email')} />
                    <span>{errors.email?.message}</span>
                </div>

                <div className="flex flex-col items-center">
                    <button ref={botaoPopUp} type="submit" className=" botaoEsqueciSenha w-full mb-2 bg-sch-green hover:bg-sch-green-dark text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline"  >

                        Enviar minha senha</button>
                    <Link to={'/'}><a className="text-sm text-sch-green hover:text-sch-green-dark" href="#" >Fazer Login</a> </Link>




                </div>
            </div>
        </form>
    )
}