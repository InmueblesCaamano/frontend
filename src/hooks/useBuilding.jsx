import { ApiUrl } from "../services/apiurl"
import request from "../services/request"
import useInitApp from "./useInitApp"
import useLoadingStore from "../store/loadingStore"
const useBuilding = () => {
    const {setLoading} = useLoadingStore()
    const initApp = useInitApp()
    const deleteBuilding = async (id) => {
        setLoading(true)
        const response = await request.delete(ApiUrl + '/buildings/' + id)
        if (!response.status) {
            alert("A ocurrido un error al intentar eliminar el inmueble")
        }
        initApp()
        setLoading(false)
    }
    return {
        deleteBuilding
    }
}
export default useBuilding