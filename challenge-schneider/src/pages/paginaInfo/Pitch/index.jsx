
import { Link } from 'react-router-dom';
import { AreaHeader } from "../../../componentes/header/styled";
import logo from "/images/schneider-logo-white.png"
import { AreaPitch } from './styled';

function Pitch() {
    return (
        <>
            <AreaHeader>
                <div className='container'>
                    <div className='logo'>
                        <img src={logo} alt='logo Schneider'/>
                    </div>
                    <nav>
                        <ul>
                            <Link to={'/info/sobre'}><li >Sobre Nós</li> </Link>
                            <Link to={'/'} ><li >Voltar</li> </Link>
                        </ul>
                    </nav>
                </div>
            </AreaHeader>
            <AreaPitch>
            <div className='justify-center items-center'>
                        <h1 className='cabecalho'>Pitch</h1>
            </div>
            <div >
            <iframe className='video w-full aspect-video'  src="https://www.youtube.com/embed/CFO5nT12kHY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>
            </AreaPitch>
        </>

    );

}
export default Pitch;