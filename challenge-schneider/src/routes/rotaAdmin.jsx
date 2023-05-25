// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaginaAdmin from '../pages/paginaAdmin';
import HeaderAdmin from '../componentes/adminHeader/HeaderAdmin';

export default function RotaAdmin() {
    return (
        <>
            <HeaderAdmin />
            <Routes path='/'>
                <Route index="/" Component={PaginaAdmin} />
            </Routes>
        </>
    )
}