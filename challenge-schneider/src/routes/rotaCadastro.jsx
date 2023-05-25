// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastrese from '../pages/paginaCadastro/index'

export default function RotaCadastro() {
    return (
        <>
            <Routes path='/'>
                <Route path='/' Component={Cadastrese} />
            </Routes>
        </>
    )
}