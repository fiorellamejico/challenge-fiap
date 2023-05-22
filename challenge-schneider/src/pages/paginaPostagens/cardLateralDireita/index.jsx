import './card.css'

export default function Perfil() {
    return (
        <div className=' flex flex-col items-center lg:items-start fade-in-card w-full lg:w-4/12 lg:fixed lg:right-0 lg:top-10 p-4'>
            <div className=' pt-3 font-bold  w-2/3'>
                <h1 className=' hidden lg:block select-none text-xl text-neutral-600 '>News</h1>
            </div>
            <div className=" p-4 w-2/3 rounded-xl border shadow-inner bg-neutral-200">
                <h2 className=' text-lg text-neutral-600 text-center mb-2 '>
                    Convite: Innovation Summit Brasil 2023
                </h2>
                <div>
                    <iframe className=' w-full h-64' src="https://www.youtube.com/embed/_lctOs3xoJg" title="CONVITE ESPECIAL: Innovation Summit Brasil 2023" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
                <p className=' text-justify mt-2 text-xs text-neutral-600'>Regis Ataides, nosso VP de Indústria e digitalização, tem um recado para você: Nos dias 19 e 20 de junho, em Belo Horizonte, você descobrirá o que os líderes da indústria e especialistas globais têm a dizer sobre as principais tendências para o caminho da sustentabilidade e digitalização.</p>
            </div>
            {/* <div className=' h-48 w-full flex-col rounded-xl shadow-inner bg-gray-50 p-2 '>
                <h2 className=' font-bold text-l text-sch-green text-center mb-1 '>
                    Próxima sessão da tarde: Wall-e
                </h2>
                <div>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/m5_lIuBXKWk" title="Wall-e"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                </div>
            </div> */}
        </div>
    )
}