import './DesktopNavigation.css'
import Logtype from '../../../shared/images/Logotyp.svg'
import { useHistory } from 'react-router-dom '
import RoutingPath from '../../../routes/RoutingPath'
import { UserContext } from '../../../shared/provider/UserProvider'

export const DesktopNavigation = () => {
  const history = useHistory()
  const [authUser, setAuthUser] = useContext(UserContext)
  
  const displaySignInButtonOrUsernameDependingOnAuthentication = () => {
    return authUser
      ? authUser.username
      : <span onClick={() => history.push(RoutingPath.signInView)}>Signin</span>
      
  }

  return (
    <div className='desktopNavigationWrapper'>
      <img className='navigationLogotype'
        src={Logotype}
        alt={''} />
      <span onClick={() => history.push(RoutingPath.homeView)}>Products</span>
      <span onClick={() => history.push(RoutingPath.homeView)}>Brands</span>
      <span onClick={() => history.push(RoutingPath.homeView)}>News</span>
      <span onClick={() => history.push(RoutingPath.homeView)}>Guideline</span>
      <span onClick={() => history.push(RoutingPath.signInView)}>Signin</span>
      <span>{authUser?.username}</span>
    </div>
  )
}

