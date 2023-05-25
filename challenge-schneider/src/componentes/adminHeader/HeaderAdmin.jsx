import logo from '/images/schneider-logo-white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'

export default function HeaderAdmin() {

    const action = () => {
        alert('Página em construção.')
    }

    const encerrarSessao = () => {
        window.location.href = '/'
    }

    return (
        <header className=" flex justify-between h-18 bg-neutral-900 text-white w-full">
            <div className=' m-2 flex items-center justify-center h-full'>
                <img className='h-12' src={logo} alt="logo Schneider" />
                <p className=' ml-4 select-none text-xl font-bold '>Admin</p>
            </div>
            <nav className='  h-18 w-fit p-2 flex justify-center items-center'>
                <ul className=' flex h-full justify-center items-center mr-4'>
                    <li onClick={() => action()} className=' cursor-pointer ml-4 hover:underline'>Usuários</li>
                    <li onClick={() => action()} className=' cursor-pointer ml-4 hover:underline'>Notícias</li>
                    <li onClick={() => action()} className=' cursor-pointer ml-4 hover:underline'>Postagens</li>
                    <li onClick={() => encerrarSessao()} className=' ml-8 transition-all hover:bg-white hover:text-neutral-900 hover:shadow cursor-pointer border border-white p-1.5 rounded-xl flex justify-center items-center'> Encerrar sessão <FontAwesomeIcon className=' ml-2 text-2xl ' icon={faSignOut} /></li>
                </ul>
            </nav>
        </header>
    )
}