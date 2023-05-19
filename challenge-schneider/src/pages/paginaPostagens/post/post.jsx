import PropTypes from 'prop-types';

export const Post = ({ titulo, conteudo, imagemUrl, usuario, likes, comentarios }) => {
  return (
    <div className=" w-1/2 bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-2">{titulo}</h2>
      <p className="text-gray-600 mb-4">{conteudo}</p>
      <div className="flex items-center mb-4">
        <img src={imagemUrl.url} alt={imagemUrl.alt} className="w-16 h-16 rounded-full mr-4" />
        <span className="text-gray-700 font-medium">{usuario}</span>
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
      </div>
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
