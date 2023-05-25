import { useState } from "react"

export default function Pergunta({ pergunta, perfil, pontuar }) {
    const selecionar = (index, pontos, perfilArg) => {
        const updatedSelected = Array(5).fill(false); // Cria um novo array com todos os campos inicializados com o valor 0

        updatedSelected[index] = true; // Atribui o valor 1 ao índice especificado

        setSelected(updatedSelected); // Atualiza o estado com o novo array 'updatedSelected'

        console.log(updatedSelected);
        pontuar(pontos, perfilArg);
    };

    const [selected, setSelected] = useState([false, false, false, false, false]);
    


    return (
        <div className="mb-6">
            <p className=' text-center text-lg'>{pergunta}</p>
            <div className=' flex justify-evenly items-center'>
                <div onClick={() => selecionar(0, -2, perfil)} className={`${selected[0] ? ' bg-sch-green ' : ' '} transition-all cursor-pointer rounded-full w-6  h-6 bg-white hover:bg-green-400  border border-green-400  `}></div>
                <div onClick={() => selecionar(1, -1, perfil)} className={`${selected[1] ? ' bg-sch-green ' : ' '} transition-all cursor-pointer rounded-full w-8 h-8 bg-white hover:bg-green-400 border  border-green-400   `}></div>
                <div onClick={() => selecionar(2, 0, perfil)} className={`${selected[2]  ? ' bg-sch-green ' : ' '} transition-all cursor-pointer rounded-full w-10 h-10 bg-white hover:bg-green-400 border  border-green-400 `} ></div>
                <div onClick={() => selecionar(3, 1, perfil)} className={`${selected[3]  ? ' bg-sch-green ' : ' '} transition-all cursor-pointer rounded-full w-12 h-12 bg-white hover:bg-green-400 border  border-green-400 `} ></div>
                <div onClick={() => selecionar(4, 2, perfil)} className={`${selected[4]  ? ' bg-sch-green ' : ' '} transition-all cursor-pointer rounded-full w-14  h-14 bg-white hover:bg-green-400  border border-green-400 `} ></div>
            </div>
        </div>
    )
}