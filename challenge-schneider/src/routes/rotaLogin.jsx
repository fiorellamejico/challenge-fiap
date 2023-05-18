// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import telaDeLogin from '../login';

export default function RotaLogin() {
    return (
        <>
            <Routes path='/'>
                <Route index Component={telaDeLogin} />
            </Routes>
        </>
    )
}