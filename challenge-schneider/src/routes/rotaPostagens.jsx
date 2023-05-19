// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import telaDePostagens from '../pages/paginaPostagens';
import HeaderPage from '../componentes/header';
import '../componentes/App.css';

export default function RotaPostagens() {
    return (
        <>
            <HeaderPage />
            <Routes path='/'>
                <Route index Component={telaDePostagens} />
            </Routes>
        </>
    )
}