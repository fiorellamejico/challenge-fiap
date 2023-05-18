/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RotaPostagens from './rotaPostagens';
import RotaLogin from './rotaLogin';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/login/*" element={<RotaLogin />} />
                <Route path="/postagens/*" element={<RotaPostagens />} />
            </Routes>
        </Router>
    )
}