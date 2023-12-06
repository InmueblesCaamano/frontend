import { ApiUrl } from "../services/apiurl"
import request from "../services/request"
import useInitApp from "./useInitApp"
import useLoadingStore from "../store/loadingStore"
import useAlertStore from "../store/alertStore"
const useBuilding = () => {
    const { setAlertModal } = useAlertStore()
    const { setLoading } = useLoadingStore()
    const initApp = useInitApp()

    const deleteBuilding = async (id) => {
        setLoading(true)
        const response = await request.delete(ApiUrl + '/buildings/' + id)
        if (!response.status) {
            setAlertModal("A ocurrido un error al intentar eliminar el inmueble")
        }
        await initApp()
        setLoading(false)
    }

    const setPublishState = async (id) => {
        setLoading(true)
        try {
            const response = await request.put(ApiUrl + '/buildings/publish/' + id)
            if (!response) {
                setAlertModal("A ocurrido un error al intentar publicar la propiedad")
                return
            }

            await initApp()
            setLoading(false)
            
            if (response.response.publish) {
                setAlertModal('Publicacion Pausada')
            } else {
                setAlertModal('Publicada Corectamente')
            }
        } catch (error) {
            setAlertModal("A ocurrido un error de comunicacion con la base de datos")
            setLoading(false)
        }

    }

    return {
        deleteBuilding,
        setPublishState
    }
}
export default useBuilding