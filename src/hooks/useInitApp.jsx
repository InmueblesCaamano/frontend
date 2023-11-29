import request from '../services/request'
import useSessionStore from '../store/sesionStore'
import { ApiUrl } from '../services/apiurl'
import { useBulidingStore } from '../store/buildingStore'
const useInitApp = () => {

    const { setSession, setUser } = useSessionStore()
    const { setBuildings } = useBulidingStore()

    const initApp = () => {
        const localStorageUser = localStorage.getItem('user')
        if (localStorageUser) {
            setSession(true)
            const user = JSON.parse(localStorageUser)
            setUser(user)
        }
        getBuildings()
    }

    const getBuildings = async () => {
        const url = ApiUrl + '/buildings'
        const response = await request.get(url)
        if (response.status) {
            setBuildings(response.body)
            return
        }
        console.log('No se pudieron obtener los buildings')
    }

    return initApp
    
}

export default useInitApp