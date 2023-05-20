import PropTypes from 'prop-types';
import heartEmpty from '../../../../Public/svgIcons/heart-empty.svg'
import heartFull from '../../../../Public/svgIcons/heart-full.svg'
import comments from '../../../../Public/svgIcons/comments.svg'
import { ReactSVG } from 'react-svg';
import './post.css'

export const Post = ({ titulo, conteudo, imagemUrl, usuario, likes, comentarios }) => {
  return (
    <div className=" rounded-xl flex my-2 w-full sm:w-4/5 lg:w-1/2 bg-white shadow-md h-96 ">
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
          <div className=' w-1/4 flex h-full items-center justify-evenly '>
          <ReactSVG src={heartEmpty} className="svg-icon-green" />
            <ReactSVG src={comments} alt="Comments Icon" className="w-12 h-12 hover:scale-105 transition-all cursor-pointer" />
          </div>
        </div>
      </div>

      {/* <div className="flex items-center mb-4">
        
      </div>
      <div className="flex items-center mb-4">
        <span className="mr-2">{likes} Likes</span>
        <span>{comentarios.length} Comentários</span>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Comentários:</h3>
        {comentarios.map((comentario, index) => (
          <div key={index} className="bg-gray-100 p-2 rounded-lg mb-2">
            <span className="font-medium">{comentario.usuario}: </span>
            <span>{comentario.conteudo}</span>
          </div>
        ))}
      </div> */}
    </div>
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
