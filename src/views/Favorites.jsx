import { useContext } from "react"
import { ContextApp } from "../App"
import Gallery from "../components/Gallery"

const Favorites = () => {
  const { favorites } = useContext(ContextApp)

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <Gallery photos={favorites} />
    </div>
  )
}

export default Favorites
