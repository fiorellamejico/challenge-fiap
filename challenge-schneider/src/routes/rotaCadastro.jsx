// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastrese from '../pages/paginaCadastro/index'
import FooterPage from '../componentes/footer';

export default function RotaCadastro() {
    return (
        <>
            <Routes path='/'>
                <Route path='/' Component={Cadastrese} />
            </Routes>
            <FooterPage />
        </>
    )
}