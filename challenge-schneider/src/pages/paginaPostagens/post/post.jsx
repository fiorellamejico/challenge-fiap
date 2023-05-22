import PropTypes from 'prop-types';
import './post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartEmpty } from '@fortawesome/free-regular-svg-icons'
import { useState, useEffect } from 'react';
import getUserData from '../schemas/usuarioTesteSchema';


export const Post = ({ titulo, conteudo, imagemUrl, usuario, likes, comentarios }) => {

  const [like, setLike] = useState(false)
  const [commentsActive, setCommentsActive] = useState(false)

  const [user, setUser] = useState([])

  useEffect(() => {
    setUser(getUserData())
    console.log(user)
  }, [])


  return (
    <>
      <div className={`${commentsActive ? 'mt-2 ' : 'my-2 rounded-xl '} rounded-t-xl bg-neutral-50 flex flex-col items-center w-full shadow-md `}>
        <div className=' flex w-full  h-full'>
          <img src={imagemUrl.url} alt={imagemUrl.alt} className="rounded-t-xl object-cover w-full h-64" />
        </div>
        <div className=' flex flex-col justify-between w-full h-full '>
          <div className=' flex items-center rounded-br-xl w-full p-4'>
            <img src={usuario.fotoDePerfil} alt={`foto de perfil`} className=" mr-2 rounded-full object-cover w-10 h-10" />

            <div>
              <p className=" text-neutral-800 text-sm font-bold ">{usuario.nome}</p>
              <p className=' italic text-xs text-neutral-600 mb-1'>&quot;{usuario.titulo}&quot;</p>
            </div>
          </div>
          <div className=' w-full h-4/6 p-4 '>
            <h2 className="text-2xl font-bold mb-2 text-neutral-800">{titulo}</h2>
            <p className=" text-neutral-600 mb-4 text-xs">{conteudo}</p>
          </div>
          <div className=' flex justify-end items-center rounded-br-xl h-1/6 w-full'>
            <div className=' w-2/3'>
              <span className=" text-sch-green text-xs ml-4">{like ? 'Você e outras ' : ''} {likes} pessoas curtiram </span>
            </div>
            <div className=' w-1/3 flex h-full items-center justify-end pr-4 pb-4'>
              <FontAwesomeIcon onClick={() => setCommentsActive(!commentsActive)} className=' z-0 mr-2 text-3xl opacity-80 hover:opacity-100 text-neutral-800 cursor-pointer transition after: ' icon={faComment} />
              <span className="absolute mr-8 mb-4 inline-flex items-center justify-center w-4 h-4 bg-red-500 text-xs text-white font-bold rounded-full">{comentarios.length}</span>
              <FontAwesomeIcon onClick={() => setLike(!like)} className={` z-0 ${like ? 'text-sch-green like-animation ' : 'text-gray-600 opacity-80 '}  text-3xl  cursor-pointer transition hover:opacity-100 `} icon={like ? faHeart : faHeartEmpty} />
            </div>
          </div>
        </div>

      </div>
      {
        commentsActive &&
        <div className=' rounded-b-xl flex flex-col items-center p-4 w-full mb-2 bg-gradient-to-b from-gray-50 via-gray-100 to-green-100   '>
          {comentarios.map((comentario, index) => (
            <div key={index} className=' p-2 flex border border-gray-300 bg-gray-200 w-full text-neutral-800 rounded-lg mb-2'>
              <div className=' w-1/5 flex justify-center items-center '>
                <img src={comentario.fotoDePerfil} alt={"foto de perfil"} className=" rounded-full w-16 h-16" />
              </div>
              <div className=" p-2 w-3/5 ">
                <div className=" text-neutral-800 text-lg ">{comentario.usuario}: </div>
                <p className=' italic text-xs text-neutral-600 mb-2'>&quot;{comentario.titulo}&quot;</p>
                <div className=' text-neutral-800 text-sm '>{comentario.conteudo}</div>
              </div>
              <div className=' w-1/5 flex justify-center items-center'>
                {comentario.likes} <FontAwesomeIcon className=' ml-2 text-lg' icon={faHeart} />
              </div>
            </div>
          ))}
          <div className=' flex w-full justify-evenly items-center'>
            <img src={user.fotoDePerfil} alt={`foto de perfil`} className=" mr-2 rounded-full object-cover w-14 h-14" />
            <input disabled value={"Quack!"} className=' w-3/4 p-1 text-neutral-400 text-lg' type="text" />
            <button className=' transition-all w-12 h-12 rounded-full text-white bg-sch-green border border-sch-green hover:bg-white hover:text-sch-green'><FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
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
    titulo: PropTypes.string.isRequired,
  }),
  likes: PropTypes.number.isRequired,
  comentarios: PropTypes.arrayOf(
    PropTypes.shape({
      usuario: PropTypes.string.isRequired,
      fotoDePerfil: PropTypes.string.isRequired,
      conteudo: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      titulo: PropTypes.string.isRequired,
    })
  ).isRequired,
};
