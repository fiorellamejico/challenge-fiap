
import ReactModal from 'react-modal';
import { useState} from 'react';
import '../quiz/styled.jsx'
import { AreaQuiz } from '../quiz/styled.jsx'
import '../../paginaInicial/css/login.css'




const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '400px',
        padding: '40px 80px',
    },
};

// Componente de Nova Postagem
function NewPost() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [postContent, setPostContent] = useState('');

    const handleOpenModal = () => {
        setModalIsOpen(true);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
    };

    const handlePostContentChange = (event) => {
        setPostContent(event.target.value);
    };

    const handlePostSubmit = () => {
        
        console.log('Nova postagem:', postContent);
        setPostContent('');
        handleCloseModal();
    };

    
    return (
                
        
        <AreaQuiz>
            <div className=' my-4 flex flex-col justify-center items-center'>
            <button className=' mb-4' onClick={handleOpenModal}>Novo Post</button>
            
                        

            <ReactModal 
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                style={customStyles}
                contentLabel="Nova Postagem"
            >
                <h2 className=' font-bold text-2xl text-sch-green text-center '>Nova Postagem</h2>
                    <textarea className='border-2 border-green-600/50' style={{ padding: '20px' }}
                    value={postContent}
                    onChange={handlePostContentChange}
                        placeholder="Digite sua postagem..." rows={4} cols={66}
                />
                    <button onClick={handlePostSubmit} style={{ color: '#ffffff', backgroundColor: '#46cd4dde' }}>Publicar</button>
                    <button  onClick={handleCloseModal}>Cancelar</button>
                    

            </ReactModal>
        </div>
        </AreaQuiz>

        
    );
}





export default NewPost;

