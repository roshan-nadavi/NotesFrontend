import UserDisplay from './components/UserDisplay'
import { useQuery } from 'urql'
import { GetUsersDocument } from './graphql/generated'

function App() {
  const [results] = useQuery({
    query: GetUsersDocument
  })

  return (
    
    <div className=" items-center justify-center">
      <h1 className='justify-center items-center bold'>Roomate Notes</h1>
      {
        results.data?.users.map((user, i) => <UserDisplay user={user} key={i}/>)
      }
    </div>
  )
}

export default App