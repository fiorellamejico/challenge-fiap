// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import telaDeLogin from '../login';
import Cadastrese from '../login/cadastro';

export default function RotaLogin() {
    return (
        <>
            <Routes path='/'>
                <Route index Component={telaDeLogin} />
                <Route path='/cadastro' Component={Cadastrese} />
            </Routes>
        </>
    )
}