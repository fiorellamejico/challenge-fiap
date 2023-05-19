import { Link } from "react-router-dom"

export default function FormularioDeLogin() {
    return (

        <form className=" mt-2 max-h-1/2">
            <h1 className=' text-sch-green text-2xl mb-2 text-center'>Fazer Login</h1>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Digite seu email" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Senha
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Digite sua senha" />
            </div>
            <div className="flex flex-col items-center">
                <Link className=" w-full mb-2 bg-sch-green hover:bg-sch-green-dark text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline" to={'/postagens'} ><button type="button">
                    Entrar
                </button></Link>
                <a className="text-sm text-sch-green hover:text-sch-green-dark" href="#">Esqueci minha senha</a>
            </div>
        </form>
    )
}