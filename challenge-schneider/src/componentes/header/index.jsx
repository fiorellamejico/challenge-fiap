import { AreaHeader } from './styled'
import logo from '/images/schneider-logo-white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

export default function HeaderPage() {

    const encerrarSessao = () => {
        let cond = confirm('Tem certeza que deseja sair?')
        if (cond) {
            window.location.href = '/'
        }
    }

    return (
        <AreaHeader>
            <div className=' px-4 h-12 sticky z-50 w-full flex items-center'>
                <div className='logo'>
                    <img src={logo} alt='logo Schneider branco' />
                </div>
                <nav>
                    <ul>
                        <li onClick={() => encerrarSessao()} className=' transition-all hover:bg-white hover:text-sch-green hover:shadow cursor-pointer border border-white p-1.5 rounded-xl flex justify-center items-center'> Encerrar sessão <FontAwesomeIcon className=' ml-2 text-2xl ' icon={faSignOut} /></li>
                    </ul>
                </nav>
            </div>
        </AreaHeader>
    );
}