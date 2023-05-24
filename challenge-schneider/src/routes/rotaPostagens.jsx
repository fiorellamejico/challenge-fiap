// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import telaDePostagens from '../pages/paginaPostagens';
import HeaderPage from '../componentes/header';
import '../componentes/App.css';
import MeuPerfil from '../pages/paginaPostagens/perfil';
import News from '../pages/paginaPostagens/news';
import Quiz from '../pages/paginaPostagens/quiz';

export default function RotaPostagens() {
    return (
        <>
            <HeaderPage />
            <Routes path='/'>
                <Route index Component={telaDePostagens} />
                <Route path='/perfil' Component={MeuPerfil} />
                <Route path='/news' Component={News} />
                <Route path='/quiz' Component={Quiz} />
            </Routes>
        </>
    )
}