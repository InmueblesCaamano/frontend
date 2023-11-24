import { useState } from "react"

const useProtect = () => {

    const [admin,setAdmin] = useState(false)

    const protect = () => {
        const token = localStorage.getItem('user')
        if (!token) {
            window.location.href = '/login'
            setAdmin(false)
            return
        }
        
        const user = JSON.parse(token)
        if (user.level === 999) {
            setAdmin(true)
        }else{
            window.location.href = '/login'
            setAdmin(false)
        }
    }

    return {
        protect,
        admin
    }
}
export default useProtect