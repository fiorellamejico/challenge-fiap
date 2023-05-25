import { useState } from "react"
import PropTypes from 'prop-types';

export default function Pergunta({ pergunta, perfil, pontuar }) {

    const [target, setTarget] = useState(-1)

    const selecionar = (index, pontos) => {
        if (target != index) {
            setTarget(index);
            console.log(index);
            pontuar(pontos, perfil);
        } else {
            setTarget(-1)
        }

    };

    return (
        <div className="mb-6">
            <p className=' text-lg'>{pergunta}</p>
            <div className=' mt-4 flex justify-evenly items-center'>
                <div onClick={() => selecionar(0, -2)} className={`${target == 0 ? ' bg-green-200 ' : ' '} transition-all cursor-pointer rounded-full w-6  h-6  bg-white hover:bg-green-100 border border-sch-green `}></div>
                <div onClick={() => selecionar(1, -1)} className={`${target == 1 ? ' bg-green-200 ' : ' '} transition-all cursor-pointer rounded-full w-8  h-8  bg-white hover:bg-green-100 border border-sch-green `}></div>
                <div onClick={() => selecionar(2, 0)} className={`${target == 2 ? '  bg-green-200 ' : ' '} transition-all cursor-pointer rounded-full w-10 h-10 bg-white hover:bg-green-100 border border-sch-green `}></div>
                <div onClick={() => selecionar(3, 1)} className={`${target == 3 ? '  bg-green-200 ' : ' '} transition-all cursor-pointer rounded-full w-12 h-12 bg-white hover:bg-green-100 border border-sch-green `}></div>
                <div onClick={() => selecionar(4, 2)} className={`${target == 4 ? '  bg-green-200 ' : ' '} transition-all cursor-pointer rounded-full w-14 h-14 bg-white hover:bg-green-100 border border-sch-green `}></div>
            </div>
        </div>
    )


}

Pergunta.propTypes = {
    pergunta: PropTypes.string.isRequired,
    perfil: PropTypes.any.isRequired,
    pontuar: PropTypes.func.isRequired,
};