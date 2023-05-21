import { Link } from "react-router-dom";

export default function Pagina404() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold mb-4 text-sch-green">404</h1>
            <p className=" mb-4 text-xl text-gray-600">Desculpe, a página que você está procurando não existe.</p>
            <Link className="className=' bg-sch-green text-white py-2 px-1 text-2xl" to={'/'}><button >Voltar ao Início</button></Link>
        </div>
    );
}


