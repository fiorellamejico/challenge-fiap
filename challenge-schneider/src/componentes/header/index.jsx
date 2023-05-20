import { AreaHeader } from './styled'
import logo from '../../../Public/schneider-logo-white.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function HeaderPage() {
    return (
        <AreaHeader>
            <div className='container'>
                <div className='logo'>
                    <img src={logo} alt='logo Schneider branco' />

                </div>
                <nav>
                    <ul>
                        <Link to={'/'}><li><FontAwesomeIcon className=' text-2xl text-white' icon={faArrowLeft} /></li></Link>
                    </ul>
                </nav>
            </div>
        </AreaHeader>
    );
}