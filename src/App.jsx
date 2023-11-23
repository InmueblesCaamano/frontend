import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './css/index.css'
import NavBar from "./components/navbar/navBar"
import Router from "./router"
import Notifications from './components/notifications'
import WhatsappButton from './components/whatsappBotton'
import useSessionStore from './store/sesionStore'
import { useEffect } from 'react'
import Loading from './components/loading'
/* import useNotificationStore from './store/notificationStore' */
const App = () => {
  /*   const {setNotification} = useNotificationStore() */
  const { setSession } = useSessionStore()

  const getSession = () => {
    const localStorageUser = localStorage.getItem('user')
    if (localStorageUser) {
      setSession(true)
    }
  }

  useEffect(() => {
    getSession()
  }, [])

  return (
    <>
      <Loading />
      {/* {session ? <> session </> : <>no session</>} */}
      <NavBar />
      <Router />
      <Notifications />
      <WhatsappButton />
      {/* <button onClick={()=>setNotification("Prueba de notificacion")}> encender notificacion </button> */}
    </>
  )
}
export default App

