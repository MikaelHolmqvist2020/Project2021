import { useState, useContext } from 'react'
import { loginCredentials } from '../shared/interface/Interface'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import { UserContext } from '../shared/provider/UserProvider'

export function SignInView(): JSX.Element {
  const history = useHistory()
  const [loginCredentials, setloginCredentials] = useState<loginCredentials>({ username: '', password: '' })
  const [authUser, setAuthUser] = useContext(UserContext)

  const signIn = () => {
    localStorage.setItem('user', loginCredentials.username)
    setAuthUser(loginCredentials)
    history.push(RoutingPath.homeView)
  }
  
  return (
    <div>
      <h1>{loginCredentials.username}</h1>
      <form>
        <input
          placeholder='username'
          onChange={event => setloginCredentials({ ...loginCredentials, username: event.target.value })} /> <br / >
        <input
          placeholder='password'
          onChange={event => setloginCredentials({ ...loginCredentials, password: event.target.value })} />
        <button onClick={() => signIn}>Sign in</button>
      </form>
    </div>
  )

  function newFunction() {
    return () => {
      history.push(RoutingPath.homeView)
    }
  }
}