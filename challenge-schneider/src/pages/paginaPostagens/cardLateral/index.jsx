import './card.css'

export default function Card() {
    return (
        <div className='fixed right-0 fade-in-card w-4/12 p-4 '>
            <div className=' mb-2 pt-3 font-bold shadow w-full rounded-xl border bg-gray-50 flex justify-center items-center'>
                <h1 className=' select-none text-4xl text-neutral-800 text-center '>News</h1>
            </div>
            <div className=" p-4 shadow w-full rounded-xl border bg-gray-50">
                <h2 className=' font-bold text-xl text-sch-green text-center mb-4 '>
                    Convite: Innovation Summit Brasil 2023
                </h2>
                <div>
                    <iframe height="100%" width="100%" className=' w-full h-64' src="https://www.youtube.com/embed/_lctOs3xoJg" title="CONVITE ESPECIAL: Innovation Summit Brasil 2023" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
                <p className=' text-justify mt-2 text-xs text-neutral-600'>Regis Ataides, nosso VP de Indústria e digitalização, tem um recado para você: Nos dias 19 e 20 de junho, em Belo Horizonte, você descobrirá o que os líderes da indústria e especialistas globais têm a dizer sobre as principais tendências para o caminho da sustentabilidade e digitalização.</p>
            </div>
        </div>
    )
}