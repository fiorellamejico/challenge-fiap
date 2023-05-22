import '../cardLateralDireita/card.css'

export default function Card() {
    return (
        <div className=" flex justify-center w-full lg:w-4/12 p-4 lg:fixed lg:top-10 lg:left-0 ">
            <div className=' h-48 w-full rounded-xl shadow-inner bg-neutral-200 p-2 '>
                <h2 className=' font-bold text-xl text-neutral-500 text-center mb-4 '>
                    Olá, Teste!
                </h2>
            </div>
        </div>
    )
}