import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './css/index.css'
import NavBar from "./components/navbar/navBar"
import Router from "./router"
import Notifications from './components/notifications'
import WhatsappButton from './components/whatsappBotton'
import { useEffect } from 'react'
import Loading from './components/loading'
import useInitApp from './hooks/useInitApp'
import AlertModal from './components/modals/alertModal'
const App = () => {
  const initApp = useInitApp()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { initApp() }, [])

  return (
    <>
      <AlertModal />
      <Loading />
      <NavBar />
      <Router />
      <Notifications />
      <WhatsappButton />
    </>
  )
}
export default App

