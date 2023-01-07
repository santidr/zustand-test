import Card from "./components/Card"
import { useFetchRepos } from "./hooks/useRepos"
import { useFavReposStore } from "./store/favReposStore"

const App = () => {

  const { data, isLoading } = useFetchRepos('santidr')
  const { favReposIds } = useFavReposStore()

  if (isLoading) return <h3>Loading...</h3>

  return (
    <>
      <h1>Hola mundo!</h1>
      <div className="repos">
        { data?.map(repo => (
          <Card key={ repo.id } repo={ repo } isFavorite={ favReposIds.includes(repo.id) } />
        )) }
      </div>
    </>
  )
}

export default App
