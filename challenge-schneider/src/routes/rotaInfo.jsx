// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pitch from '../pages/paginaInfo/Pitch'
import Sobre from '../pages/paginaInfo/Sobre';
import FooterPage from '../componentes/footer';

export default function RotaInfo() {
    return (
        <>
            <Routes path='/'>
                <Route path="/sobre" Component={Sobre} />
                <Route path="/pitch" Component={Pitch} />
            </Routes>
            <FooterPage />
        </>
    )
}