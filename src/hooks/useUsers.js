import { useEffect } from "react"
import {useUserStore} from '../store/userStore'
import { ApiUrl } from "../services/apiurl"

const useUsers = () =>{
   
    const {users,setUsers} = useUserStore()

    useEffect(()=>{
        getUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getUsers = async () =>{
        const res = await  fetch(ApiUrl+'/users')
        const users = await res.json()
        setUsers(users)
    }

    return {
        users,setUsers
    }
}

export default useUsers