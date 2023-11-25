import { Link } from "react-router-dom"
import useSession from "../../hooks/useSession"
import useNavStore from "../../store/navStore"
import useSessionStore from "../../store/sesionStore"
useSessionStore
const LoginButton = () => {
    const { setUser } = useSessionStore()
    const { collapse } = useNavStore()
    const { session, closeSession } = useSession()
    return (<>
        {session ? <>
            <button onClick={() => { closeSession(); collapse(); setUser({}) }} className="btn btn-warning" > Cerrar Sesion <i className="bi bi-arrow-right" /></button>
        </> : <>
            <Link onClick={collapse} to='/login'>
                <button className="btn btn-warning" type="submit"> <i className="bi arrow-right-circle-fill"></i> Iniciar Sesion</button>
            </Link>
        </>}
    </>)
}
export default LoginButton