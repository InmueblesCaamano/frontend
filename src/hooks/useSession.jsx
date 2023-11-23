import { useNavigate } from "react-router-dom"
import useSessionStore from "../store/sesionStore"
const useSession = () => {
    const navigate = useNavigate()
    const { session, setSession } = useSessionStore()

    const closeSession = () => {
        localStorage.removeItem("user")
        setSession(false)
        navigate('/')
    }

    return {
        closeSession,
        session, setSession
    }
}
export default useSession