import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faHeart as faHeartEmpty } from '@fortawesome/free-regular-svg-icons'
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import '../post.css'

export const Comentario = ({ comentario }) => {

    const [like, setLike] = useState(0)

    useEffect(() => {
        setLike(comentario.likes)
    }, [])

    const addLike = () => {
        if (like == comentario.likes) {
            setLike(like + 1)
        } else if (like == (comentario.likes + 1)) {
            setLike(like - 1)
        }
    }

    return (
        <div className=' flex border border-gray-300 bg-gray-200 w-full text-neutral-800 rounded-lg mb-2'>
            <div className=' w-1/5 flex justify-center items-center '>
                <img src={comentario.fotoDePerfil} alt={"foto de perfil"} className=" rounded-full w-12 h-12" />
            </div>
            <div className=" p-2 w-3/5 ">
                <div className=" text-neutral-800 text-xs font-bold ">{comentario.usuario}: </div>
                <p className='text-xs text-neutral-600 mb-2'>&quot;{comentario.titulo}&quot;</p>
                <div className=' text-neutral-600 text-xs '>{comentario.conteudo}</div>
            </div>
            <div className=' w-1/5 flex justify-center items-center'>
                {like}  <FontAwesomeIcon onClick={() => addLike()} className={` z-0 ${like > comentario.likes ? 'text-sch-green like-animation ' : 'text-gray-600 opacity-80 '}  text-xl ml-2 cursor-pointer transition hover:opacity-100 `} icon={like ? faHeart : faHeartEmpty} />
            </div>
        </div>
    )
}

Comentario.propTypes = {
    comentario: PropTypes.shape({
        usuario: PropTypes.string.isRequired,
        fotoDePerfil: PropTypes.string.isRequired,
        conteudo: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        titulo: PropTypes.string.isRequired,
    })
};

export default Comentario
