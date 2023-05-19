import { AreaHeader } from './styled'
export default function HeaderPage(){
    return(
        <AreaHeader>
            <div className='container'>
                <div className='logo'>
                    <img src='../../../Public/logoschneider.png'/>

                </div>
                <nav>
                    <ul>
                        <li>Tela Inicial</li>
                        <li>Sair</li>
                    </ul>
                </nav>
            </div>
        </AreaHeader>
    );
}