import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'

export const Profile = () => {
  const [autUser, setAuthUser] = useContext(UserContext)
  return (
    <div>
      <img className='profiling' src={'https://thispersondoesnotexist.com/image'} alt={''} />
      {autUser.username}
      <div className='profileDropdown'>
        <span>alternativ 1</span>
        <span>alternativ 2</span>
        <span>alternativ 3</span>
        <span>alternativ 4</span>
        <span><button>Logga ut</button></span>
      </div>
    </div>
  )
}