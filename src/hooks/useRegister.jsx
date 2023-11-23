import useRegisterStore from "../store/registerStore"
import useNotificationStore from "../store/notificationStore"
import { ApiUrl } from "../services/apiurl"
import useLoadingStore from "../store/loadingStore"
import { useNavigate } from "react-router-dom"
import useSessionStore from "../store/sesionStore"
import request from "../services/request2"
const useRegister = () => {
    const navigate = useNavigate()
    const { setSession } = useSessionStore()
    const { setLoading } = useLoadingStore()
    const { formData, setFormData } = useRegisterStore()
    const { setNotification } = useNotificationStore()

    const handleChange = ({ target }) => setFormData(target)

    const formValidation = (_formData) => {
        return _formData.confirmPass === _formData.password
    }

    const sendRegisterForm = async (e) => {
        e.preventDefault()
        setLoading(true)
        if (formValidation(formData)) {
            const url = ApiUrl + "/users"
            const res = await request.post(url, formData)
            if(res.status){
                localStorage.setItem("user", JSON.stringify(res.body))
                setSession(true)
                setLoading(false)
                navigate('/')
                return
            }
            setNotification(res.message)
            setLoading(false)


           /*  fetch(fetchUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
                .then(res => res.json())
                .then(res => {
                    const session = localStorage.setItem("user", res)
                    setSession(true)
                    navigate('/')
                    console.log(session)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    setLoading(false)
                }) */

            return
        }
        setNotification('Las contraseñas no coinciden')
    }

    return {
        handleChange,
        sendRegisterForm
    }
}
export default useRegister 