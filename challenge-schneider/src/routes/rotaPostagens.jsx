// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import telaDePostagens from '../postagens';
import HeaderPage from '../componentes/HeaderPage';

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