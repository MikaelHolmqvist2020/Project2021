import { userState, createContext, children } from 'react';

export const UsercContext = createContext<any>(null);

export const UserProvider = (props) => {
  const [authUser, setAuthUser] = useState()
  const { children } = props

  return (
    <UsercContext.Provider value={[authUser, setAuthUser]}>
      {props.children}
    </UsercContext.Provider>
  )
}