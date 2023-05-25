import logo from '/schneider-logo-white.png'

export default function HeaderAdmin() {
    return (
        <header className=" flex justify-between h-18 bg-neutral-900 text-white w-full">
            <div className=' m-2 flex items-center justify-center h-full'>
                <img className='h-12' src={logo} alt="logo Schneider" />
                <p className=' ml-4 select-none text-xl font-bold '>Admin</p>
            </div>
            <nav className='  h-18 w-fit p-2 flex justify-center items-center'>
                <ul className=' flex h-full justify-center items-center mr-4'>
                    <li className=' cursor-pointer ml-4 hover:underline'>Usuários</li>
                    <li className=' cursor-pointer ml-4 hover:underline'>Notícias</li>
                    <li className=' cursor-pointer ml-4 hover:underline'>Postagens</li>
                </ul>
            </nav>
        </header>
    )
}