
import { Link } from 'react-router-dom';

import { AreaHeader } from "../../componentes/header/styled";

import FooterPage from "../../componentes/footer";

function Pitch(){
    return(
        <>
            <AreaHeader>
                <div className='container'>
                    <div className='logo'>
                        <img src='../../../Public/logoschneider.png'/>

                    </div>
                    <nav>
                        <ul>
                            <Link to={'/login/sobre'}><li >Sobre Nós</li> </Link>
                            <Link to={'/'} ><li >Voltar</li> </Link>
                        </ul>
                    </nav>
                </div>
            </AreaHeader> 
            <FooterPage/>
        </>
           
    );
    
}
export default Pitch;