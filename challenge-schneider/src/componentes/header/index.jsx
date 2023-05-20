import { AreaHeader } from './styled'
import logo from '../../../Public/schneider-logo-white.png'
import { Link } from 'react-router-dom';

export default function HeaderPage(){
    return(
        <AreaHeader>
            <div className='container'>
                <div className='logo'>
                    <img src={logo} alt='logo Schneider branco'/>

                </div>
                <nav>
                    <ul>
                        <Link to={'/'}><li>Sair</li></Link>
                    </ul>
                </nav>
            </div>
        </AreaHeader>
    );
}