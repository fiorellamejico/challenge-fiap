/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RotaPostagens from './rotaPostagens';
import RotaCadastro from './rotaCadastro';
import PaginaInicial from '../pages/paginaInicial';
import RotaInfo from './rotaInfo';
import Pagina404 from '../pages/pagina404/pagina404';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route index element={<PaginaInicial />} />
                <Route path="/cadastro/*" element={<RotaCadastro />} />
                <Route path="/postagens/*" element={<RotaPostagens />} />
                <Route path='/info/*' element={<RotaInfo />} />
                <Route path="*" element={<Pagina404 />} />
            </Routes>
        </Router>
    )
}