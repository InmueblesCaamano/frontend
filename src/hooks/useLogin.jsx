import { useNavigate } from "react-router-dom"
import { ApiUrl } from "../services/apiurl"
import request from "../services/request"
import useLoadingStore from "../store/loadingStore"
import useNotificationStore from "../store/notificationStore"
import useSession from "./useSession"
const useLogin = () => {
    const { setSession,setUser } = useSession()
    const navigate = useNavigate()
    const { setNotification } = useNotificationStore()
    const { setLoading } = useLoadingStore()
    const login = async (e) => {
        setLoading(true)
        e.preventDefault()

        const password = e.target.password.value
        const email = e.target.email.value
        if (!email || !password) {
            setNotification("Debe ingresar un correo y una contraseña")
            return
        }

        const body = { email, password }
        const url = `${ApiUrl}/users/login`
        const res = await request.post(url, body)

        const user = res.body
        if (res.status) {
            localStorage.setItem('user', JSON.stringify(user))
            setLoading(false)
            setSession(true)
            setUser(user)
            if (user.level === 999) {
                
                navigate('/dashboard')
                return
            }
            navigate('/')
            return
        }
        setLoading(false)
        setNotification(res.message)
    }
    return {
        login
    }
}
export default useLogin