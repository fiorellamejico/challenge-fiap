import './styled.jsx'
import { AreaQuiz } from './styled.jsx'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

export default function Quiz() {

    const [remainingTime, setRemainingTime] = useState(10000); // Defina o tempo inicial aqui em segundos

    // Função para formatar o tempo restante
    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;

        return `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const action = () => {
        alert('Obrigado pela resposta!')
        window.location.href = '/postagens'
    }

    useEffect(() => {


        // Função para atualizar o tempo restante a cada segundo
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 1);
        }, 1000);

        // Limpar intervalo quando o componente é desmontado
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full   flex flex-col justify-center items-center">
            <div className=' my-4 flex flex-col justify-center items-center'>
                <p className=''>Tempo restante para completar o quiz:</p>
                <div className=' select-none p-4  text-4xl '>{formatTime(remainingTime)}</div>
            </div>

            <AreaQuiz>
                <div className='container w-full'>
                    <div className=" p-3  w-full rounded-xl ">
                        <h1 className=' font-bold text-2xl text-sch-green text-center '>Quiz diário</h1>


                        <div className='p-4 mt-4 perguntas'>
                            <div className='geralPerguntas'>
                                <p className=' text-center mt-2 mb-4 text-neutral-600'>Escolha a opção correta:</p>
                                <p>1. Qual é o processo de decomposição de matéria orgânica?</p>
                                <div id='ansp1' className='ans flex flex-row space-x-2.5 place-content-center'>
                                    <input type="radio" name='p1' id='resp1a' value="resp1a" className='resp1a' />
                                    <label htmlFor="resp1a">Compostagem</label>
                                    <input type="radio" name='p1' id='resp1b' value="resp1b" className='resp1b' />
                                    <label htmlFor="resp1b">Reciclagem</label>


                                </div>
                            </div>

                            <div className='geralPerguntas'>
                                <p>2. Qual é a fonte de energia renovável mais comum?</p>
                                <div id='ansp2' className='ans flex flex-row space-x-2.5 place-content-center'>

                                    <input type="radio" name='p2' id='resp2a' value="resp2a" className='resp2a' />
                                    <label htmlFor="resp2a">Solar</label>

                                    <input type="radio" name='p2' id='resp2b' value="resp2b" className='resp2b' />
                                    <label htmlFor="resp2b">Eólica</label>
                                </div>
                            </div>

                            <div className='geralPerguntas'>
                                <p>3. Qual é a prática de plantar árvores para recuperar áreas degradadas? </p>
                                <div id='ansp3' className='ans flex flex-row space-x-2.5 place-content-center'>
                                    <input type="radio" name='p3' id='resp3a' value="resp3a" className='resp3a' />
                                    <label htmlFor="resp3a">Reflorestamento</label>

                                    <input type="radio" name='p3' id='resp3b' value="resp3b" className='resp3b' />
                                    <label htmlFor="resp3b">Conservação</label>
                                </div>
                            </div>

                            <button onClick={() => action()} className=' mb-4'>Verificar</button>
                            <Link className=' self-center w-full h-fit text-gray-700 text-center m-4 underline ' to={'/postagens'}>Retornar</Link>

                        </div>

                    </div>



                </div>

            </AreaQuiz>
        </div >

    )


}