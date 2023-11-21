import '../node_modules/bootstrap/dist/css/bootstrap.css'
import NavBar from "./components/navBar"
import Router from "./router"
import './css/index.css'
function App() {
  return (
    <>
      <a href='#' onClick={()=> window.open('https://wa.me/04248261631', '_blank')} className='ws-button'>
        <img  className='ws-img-btn' src='./img/logo-ws.svg' width={40} height={40} alt='ws' />
      </a>
      <NavBar />
      <Router />
    </>
  )
}
export default App

/* 
import useUsers from "./hooks/useUsers"
const { users } = useUsers()
console.log('App: ', users) */

{/* hola
      {users && users.map((user, index) => {
        return (<div key={index}> {user.name} </div>)
      })} */}