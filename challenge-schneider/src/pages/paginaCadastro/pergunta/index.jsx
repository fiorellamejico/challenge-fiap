import { useState } from "react"
import PropTypes from 'prop-types';
import './pergunta.css'

export default function Pergunta({ pergunta, perfil, pontuar }) {

    const [target, setTarget] = useState(2)

    const selecionar = (i, pontos) => {
        console.log('index: ' + i + ', target: ' + target)
        if (target != i) {
            setTarget(i);
            pontuar(pontos, perfil);
        } else {
            setTarget(-1)
        }
    };

    return (
        <div className="mb-6">
            <p className=' text-lg'>{pergunta}</p>
            <div className=' mt-4 flex justify-evenly items-center'>
                <div onClick={() => selecionar(0, -2)} className={` ${target === 0 ? '  set-bg ' : ' '}  transition-all cursor-pointer rounded-full w-6  h-6  bg-white border border-sch-green `}>{target === 0 ? <div className=" fill-animation h-full w-full  bg-green-200 rounded-full" /> : ''}</div>
                <div onClick={() => selecionar(1, -1)} className={` ${target === 1 ? '  set-bg ' : ' '} transition-all cursor-pointer rounded-full w-8  h-8  bg-white  border border-sch-green `}>{target === 1 ? <div className="  fill-animation h-full w-full bg-green-200 rounded-full" /> : ''}</div>
                <div onClick={() => selecionar(2, 0)} className={`  ${target === 2 ? '  set-bg ' : ' '} transition-all cursor-pointer rounded-full w-10 h-10 bg-white  border border-sch-green `}>{target === 2 ? <div className="  fill-animation h-full w-full bg-green-200 rounded-full" /> : ''}</div>
                <div onClick={() => selecionar(3, 1)} className={`  ${target === 3 ? '  set-bg ' : ' '} transition-all cursor-pointer rounded-full w-12 h-12 bg-white  border border-sch-green `}>{target === 3 ? <div className="  fill-animation h-full w-full bg-green-200 rounded-full" /> : ''}</div>
                <div onClick={() => selecionar(4, 2)} className={`  ${target === 4 ? '  set-bg ' : ' '} transition-all cursor-pointer rounded-full w-14 h-14 bg-white  border border-sch-green `}>{target === 4 ? <div className="  fill-animation h-full w-full bg-green-200 rounded-full" /> : ''}</div>
            </div>
            <div className=" mt-2 w-full text-sm text-neutral-400 flex justify-between">
                <p>discordo</p> <p>concordo</p> </div>
        </div>
    )


}

Pergunta.propTypes = {
    pergunta: PropTypes.string.isRequired,
    perfil: PropTypes.any.isRequired,
    pontuar: PropTypes.func.isRequired,
};