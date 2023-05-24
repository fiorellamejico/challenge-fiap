import './styled.jsx'
import { AreaQuiz } from './styled.jsx'
import { Link } from 'react-router-dom'

export default function Quiz() {
    return (
        <div className=' w-full flex justify-center'>
            <AreaQuiz>
                <div className='container w-full'>
                    <div className=" p-3  w-full rounded-xl ">
                        <h1 className=' font-bold text-2xl text-sch-green text-center '>Quiz diário</h1>
                        <p className=' text-center mt-4 mb-1 text-xs text-neutral-600'>Escolha a opção correta:</p>

                        <div className='perguntas pb-4'>

                            <div className='geralPerguntas'>
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

                            <button className='mb-4'>Verificar</button>
                            <Link className=' self-center w-full h-fit text-gray-700 text-center m-4 underline ' to={'/postagens'}>Retornar</Link>

                        </div>

                    </div>



                </div>

            </AreaQuiz>
        </div >

            )


}