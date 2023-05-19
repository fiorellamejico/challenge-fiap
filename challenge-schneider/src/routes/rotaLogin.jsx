// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import telaDeLogin from '../login';
import Cadastrese from '../login/cadastro';
import Pitch from '../pages/Pitch';
import Sobre from '../pages/Sobre';

export default function RotaLogin() {
    return (
        <>
            <Routes path='/'>
                <Route index Component={telaDeLogin} />
                <Route path='/cadastro' Component={Cadastrese} />
                <Route exact path="/sobre" Component={Sobre} />
                <Route exact path="/pitch" Component={Pitch}/>
                   
            </Routes>
        </>
    )
}