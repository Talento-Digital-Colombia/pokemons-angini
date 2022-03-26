import { useEffect, useState } from 'react'
import { Axios } from './axios'
import { PokemonImage } from './components'

type Pokemon = {
  name: string
  url: string
}

const App: React.VFC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    async function getPokemons() {
      const res = await Axios.get('pokemon')

      setPokemons(res.data.results)
    }

    getPokemons()
  }, [])

  return (
    <section className="flex flex-wrap gap-3 p-4 h-full">
      {pokemons.map((pokemon) => (
        <div className="card w-96 bg-base-100 shadow-xl flex flex-col items-center">
          <PokemonImage url={pokemon.url} />

          <div className="card-body">
            <h2 className="card-title">{pokemon.name}</h2>
          </div>
        </div>
      ))}
    </section>
  )
}

export default App
