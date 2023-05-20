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
      <div className={`${commentsActive ? 'mt-2 ' : 'my-2 rounded-xl '} rounded-t-xl bg-neutral-50 flex flex-col items-center w-5/6 sm:w-3/5 md:w-2/5 shadow-md h-1/2`}>
        <div className=' flex w-full  h-full'>
          <img src={imagemUrl.url} alt={imagemUrl.alt} className="rounded-t-xl object-cover w-full h-64" />
        </div>
        <div className=' flex flex-col justify-between w-full h-full '>
          <div className=' flex items-center rounded-br-xl w-full p-4'>
            <img src={usuario.fotoDePerfil} alt={`foto de perfil`} className=" mr-2 rounded-full object-cover w-16 h-16" />
            <div>
              <span className=" text-neutral-800 text-lg ">{usuario.nome}</span>
              <p className=' text-gray-600'> Postou:</p>
            </div>
          </div>
          <div className=' w-full h-4/6 p-4 '>
            <h2 className="text-2xl font-bold mb-2">{titulo}</h2>
            <p className=" text-sm text-gray-600 mb-4">{conteudo}</p>
          </div>
          <div className=' flex justify-end items-center rounded-br-xl h-1/6 w-full'>
            <div className=' w-2/3'>
              <span className=" font-bold text-sch-green text-sm ml-4">{like ? 'Você e outras ' : ''} {likes} pessoas curtiram </span>
            </div>
            <div className=' w-1/3 flex h-full items-center justify-end pr-4 pb-4'>
              <FontAwesomeIcon onClick={() => setCommentsActive(!commentsActive)} className=' mr-2 text-3xl opacity-80 hover:opacity-100 text-neutral-800 cursor-pointer transition after: ' icon={faComment} />
              <span className="absolute mr-8 mb-4 inline-flex items-center justify-center w-4 h-4 bg-red-500 text-xs text-white font-bold rounded-full">{comentarios.length}</span>
              <FontAwesomeIcon onClick={() => setLike(!like)} className={`${like ? 'text-sch-green like-animation ' : 'text-gray-600 opacity-80 '}  text-3xl  cursor-pointer transition hover:opacity-100 `} icon={like ? faHeart : faHeartEmpty} />
            </div>
          </div>
        </div>

      </div>
      {
        commentsActive &&
        <div className=' rounded-b-xl flex flex-col items-center p-4 w-5/6 sm:w-3/5 md:w-2/5 mb-2 bg-gradient-to-b from-gray-100 to-white   '>
          {comentarios.map((comentario, index) => (
            <div key={index} className=' flex border border-gray-300 bg-gray-200 w-4/5 text-neutral-800 rounded-lg mb-2'>
              <div className=' w-1/5 flex justify-center items-center '>
                <img src={comentario.fotoDePerfil} alt={"foto de perfil"} className=" rounded-full w-16 h-16" />
              </div>
              <div className=" p-2 w-3/5 ">
                <div className=" text-neutral-800 text-lg ">{comentario.usuario}: </div>
                <div className=' text-neutral-800 text-sm '>{comentario.conteudo}</div>
              </div>
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
  usuario: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    fotoDePerfil: PropTypes.string.isRequired,
  }),
  likes: PropTypes.number.isRequired,
  comentarios: PropTypes.arrayOf(
    PropTypes.shape({
      usuario: PropTypes.string.isRequired,
      fotoDePerfil: PropTypes.string.isRequired,
      conteudo: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ).isRequired,
};
