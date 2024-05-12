import { useContext } from "react"
import { ContextApp } from "../App"
import IconHeart from "./IconHeart"

const Gallery = ({ photos }) => {
  const { liked, setLiked, favorites, setFavorites } = useContext(ContextApp)

  const handleLikeClick = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((itemId) => itemId !== id))
    } else {
      setFavorites([...favorites, id])
    }

    if (liked.includes(id)) {
      setLiked(liked.filter((itemId) => itemId !== id))
    } else {
      setLiked([...liked, id])
    }
  };

  return (
    <div className="gallery grid-columns-5 p-3">
      {Array.isArray(photos) ? (
        photos.map((photo) => (
          <div key={photo.id} className="gallery-item">
            {photo.src && (
              <img
                src={photo.src.tiny}
                alt={photo.alt}
                onClick={() => handleLikeClick(photo.id)}
              />
            )}
            <div className="icon-heart-container">
              <IconHeart
                filled={liked.includes(photo.id)}
                onClick={() => handleLikeClick(photo.id)}
              />
            </div>
          </div>
        ))
      ) : (
        <p>No se han proporcionado fotos.</p>
      )}
    </div>
  )
}

export default Gallery