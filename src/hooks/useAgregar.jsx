import request from "../services/request"
import { ApiUrl } from "../services/apiurl"
import useSessionStore from "../store/sesionStore"
import useLoadingStore from "../store/loadingStore"
import { useState } from "react"
import { useBulidingStore } from "../store/buildingStore"
import { useNavigate } from "react-router-dom"
import useNotificationStore from "../store/notificationStore"
import municipios from "../services/ubicaciones"
const useAgregar = () => {

    const navigate = useNavigate()
    const { setBuilding } = useBulidingStore()
    const [parroquias, setParroquias] = useState([])
    const { setNotification } = useNotificationStore()
    const { setLoading } = useLoadingStore()
    const { user } = useSessionStore()

    const sendForm = async (e) => {
        setLoading(true)
        e.preventDefault()
        const body = {
            municipios: e.target.municipios.value,
            parroquias: e.target.parroquias.value,
            descripcion: e.target.descripcion.value,
            precio: e.target.precio.value,
            cantidadCuartos: e.target.cantidadCuartos.value,
            ventaOAlquiler: e.target.ventaOAlquiler.value,
            cantidadBanos: e.target.cantidadBanos.value,
            cantidadEstacionamientos: e.target.cantidadEstacionamientos.value,
            metrosTerreno: e.target.metrosTerreno.value,
            metrosConstruccion: e.target.metrosConstruccion.value,
            idPublicante: user._id,
            tipo: e.target.tipo.value,
            publish: e.target.publish.value,
            ws: e.target.ws.value,
            tel: e.target.tel.value
        }

        const url = ApiUrl + "/buildings"
        const res = await request.post(url, body)
        if (res.status) {
            setBuilding(res.body)
            navigate('/addimages/' + res.body._id + '/' + res.body.precio + '/' + res.body.municipios + '/' + res.body.parroquias)
            setLoading(false)
            return
        }
        setLoading(false)
        setNotification(res.message)
    }

    const handleParroquias = (value) => {
        if (value) {
            setParroquias(municipios[value].parroquias)
        } else {
            setParroquias([])
        }
    }

    const [wsAlert, setWsAlert] = useState()
    const [telAlert, setTelAlert] = useState()

    const handleTel = (e) => {
        const tel = e.target.value
        const firstNumber = tel.split('')[0]
        if (firstNumber == 0) {
            setTelAlert('No debe incluir el cero (0) , ejemplo: 4141220527')
        } else {
            setTelAlert('')
        }
    }

    const handleWs = (e) => {
        const ws = e.target.value
        const firstNumber = ws.split('')[0]
        if (firstNumber == 0) {
            setWsAlert('No debe incluir el cero (0) , ejemplo: 4141220527')
        } else {
            setWsAlert('')
        }
    }

    return {
        sendForm, handleParroquias, handleTel, handleWs,
        wsAlert, setWsAlert, telAlert, setTelAlert,parroquias
    }
}

export default useAgregar