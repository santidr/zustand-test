import { Repository } from "../hooks/types"
import { useFavReposStore } from "../store/favReposStore"

type Props = {
  repo: Repository
  isFavorite: boolean
}

const Card = ({ repo, isFavorite }: Props) => {

  const { addFavRepo, removeFavRepo } = useFavReposStore()

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavRepo(repo.id)
      return
    }

    addFavRepo(repo.id)
  }

  return (
    <div>
      <h2>{ repo.name }</h2>
      <button onClick={ toggleFavorite }>
        { isFavorite ? 'Dislike' : 'Like' }
      </button>
    </div>
  )
}

export default Card