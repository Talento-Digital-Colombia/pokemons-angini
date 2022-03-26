import axios from 'axios'
import { useEffect, useState } from 'react'

interface PokemonImageProps {
  url: string
}

export const PokemonImage: React.VFC<PokemonImageProps> = ({ url }) => {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    async function getImage() {
      try {
        const res = await axios.get(url)

        setImageUrl(res.data.sprites.front_default)
      } catch (err) {
        console.error(err)
      }
    }

    getImage()
  }, [url])

  return (
    <figure>
      <img src={imageUrl} alt="Shoes" />
    </figure>
  )
}
