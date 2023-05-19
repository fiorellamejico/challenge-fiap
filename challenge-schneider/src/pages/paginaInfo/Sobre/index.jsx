
import { Link } from 'react-router-dom';
import { AreaHeader } from "../../../componentes/header/styled";

function Sobre(){
    return(
        <>
            <AreaHeader>
                <div className='container'>
                    <div className='logo'>
                        <img src='../../../Public/logoschneider.png'/>

                    </div>
                    <nav>
                        <ul>
                            <Link to={'/info/pitch'}><li >Pitch</li> </Link>
                            <Link to={'/'} ><li >Voltar</li> </Link>
                        </ul>
                    </nav>
                </div>
            </AreaHeader>          
        </>
          
    );
    
}
export default Sobre;