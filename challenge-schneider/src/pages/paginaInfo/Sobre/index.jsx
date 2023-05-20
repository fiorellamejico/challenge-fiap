
import { Link } from 'react-router-dom';
import { AreaHeader } from "../../../componentes/header/styled";
import logo from "../../../../Public/schneider-logo-white.png"

function Sobre(){
    return(
        <>
            <AreaHeader>
                <div className='container'>
                    <div className='logo'>
                        <img src={logo} alt='logo schneider branca'/>

                    </div>
                    <nav>
                        <ul>
                            <Link to={'/info/pitch'}><li >Pitch</li> </Link>
                            <Link to={'/'} ><li >Voltar</li> </Link>
                        </ul>
                    </nav>
                </div>
            </AreaHeader>   
            <h1>sobre:</h1>       
        </>
          
    );
    
}
export default Sobre;