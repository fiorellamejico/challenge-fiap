import './styled.jsx'
import { AreaQuiz } from './styled.jsx'

export default function Quiz(){
   return(
    <AreaQuiz>
        <div className='container' >
            
        
            <header>
                <h1>Veja quanto voce se importa com a sustentabilidade</h1>
            </header>
            <section className='answers'>
                
                    <div id='ansp1' className='ans flex flex-row space-x-2.5 place-content-center'>
                        <input type="radio" name='p1' id='resp1a' value="resp1a" className='resp1a' />
                        <label htmlFor="resp1a">1a</label>
                        <label htmlFor="resp1b">1b</label>
                        <input type="radio" name='p1' id='resp1b' value="resp1b" className='resp1b'/>

                    </div>

                    <div id='ansp2' className='ans flex flex-row space-x-2.5 place-content-center'>
                        <input type="radio" name='p2' id='resp2a' value="resp2a" className='resp2a'/>
                        <label htmlFor="resp2a">2a</label>
                        <label htmlFor="resp2b">2b</label>
                        <input type="radio" name='p2' id='resp2b' value="resp2b" className='resp2b'/>

                    </div>
                    <div id='ansp3' className='ans flex flex-row space-x-2.5 place-content-center'>
                        <input type="radio" name='p3' id='resp3a' value="resp3a" className='resp3a'/>
                        <label htmlFor="resp3a">3a</label>
                        <label htmlFor="resp3b">3b</label>
                        <input type="radio" name='p3' id='resp3b' value="resp3b" className='resp3b'/>
                    </div>
                

            </section>
            <section className='congrats' >
                Great!
            </section>
        </div>
            
    </AreaQuiz>

   )
   
  
}