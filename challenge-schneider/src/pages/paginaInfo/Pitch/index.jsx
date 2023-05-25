
import { Link } from 'react-router-dom';
import { AreaHeader } from "../../../componentes/header/styled";
import logo from "/images/schneider-logo-white.png"

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
            <h1>PITCH:</h1>
        </>

    );

}
export default Pitch;