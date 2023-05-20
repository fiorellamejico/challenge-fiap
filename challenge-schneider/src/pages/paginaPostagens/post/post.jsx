import PropTypes from 'prop-types';
import './post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartEmpty } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react';


export const Post = ({ titulo, conteudo, imagemUrl, usuario, likes, comentarios }) => {

  const [like, setLike] = useState(false)
  const [commentsActive, setCommentsActive] = useState(false)

  return (
    <>
      <div className={`${commentsActive ? 'mt-2 rounded-t-xl' : 'my-2 rounded-xl '}  flex  w-full sm:w-4/5 lg:w-1/2 bg-white shadow-md h-96`}>
        <div className=' w-1/3 h-full'>
          <img src={imagemUrl.url} alt={imagemUrl.alt} className=" rounded-l-xl object-cover w-full h-full" />
        </div>
        <div className=' flex flex-col justify-between w-2/3 h-full '>
          <div className=' rounded-br-xl w-full p-2'>
            <span className=" text-sch-blue font-medium text-lg">{usuario} postou:</span>
          </div>
          <div className=' w-full h-4/6 p-4 '>
            <h2 className="text-2xl font-bold mb-2">{titulo}</h2>
            <p className=" text-sm text-gray-600 mb-4">{conteudo}</p>
          </div>
          <div className=' flex justify-end items-center border rounded-br-xl h-1/6 w-full'>
            <div className=' w-2/3'>
              <span className=" text-sch-green text-lg ml-4">{like ? 'Você e outras ' : ''} {likes} pessoas curtiram </span>
            </div>
            <div className=' w-1/3 flex h-full items-center justify-evenly '>
              <FontAwesomeIcon onClick={() => setCommentsActive(!commentsActive)} className=' text-4xl opacity-80 hover:opacity-100 text-neutral-800 cursor-pointer transition after: ' icon={faComment} />
              <span className="absolute mr-5 mb-4 inline-flex items-center justify-center w-5 h-5 bg-red-500 text-xs text-white font-bold rounded-full">{comentarios.length}</span>
              <FontAwesomeIcon onClick={() => setLike(!like)} className={`${like ? 'text-sch-green ' : 'text-gray-600 opacity-80  '} text-4xl  cursor-pointer transition hover:opacity-100 `} icon={like ? faHeart : faHeartEmpty} />
            </div>
          </div>
        </div>

      </div>
      {
        commentsActive &&
        <div className=' flex flex-col items-center p-4 sm:w-4/5 lg:w-1/2 h-48 mb-2 bg-gradient-to-b from-gray-100 to-white overflow-y-scroll  '>
          {comentarios.map((comentario, index) => (
            <div key={index} className=" border border-gray-300 bg-gray-200 w-3/4 text-neutral-800 p-2 rounded-lg mb-2">
              <div className=" text-neutral-800 text-lg ">{comentario.usuario}: </div>
              <div className=' text-neutral-800 text-sm'>{comentario.conteudo}</div>

            </div>
          ))}
        </div>
      }
    </>
  );
};

Post.propTypes = {
  titulo: PropTypes.string.isRequired,
  conteudo: PropTypes.string.isRequired,
  imagemUrl: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  usuario: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comentarios: PropTypes.arrayOf(
    PropTypes.shape({
      usuario: PropTypes.string.isRequired,
      conteudo: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ).isRequired,
};
