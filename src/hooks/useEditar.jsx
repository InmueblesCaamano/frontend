import { useState } from "react"
import { useEffect } from "react"
import { ApiUrl } from "../services/apiurl"
import request from "../services/request"
import { useParams } from "react-router-dom"
import useAlertStore from "../store/alertStore"
const useEditar = () => {
    const { setAlertModal } = useAlertStore()

    const { id } = useParams()
    const objectEmpty = (object) => Object.keys(object).length === 0

    const [building, setBuilding] = useState({})

    const getBuilding = async (id) => {
        const url = ApiUrl + `/buildings/${id}`
        const build = await request.get(url)
        setBuilding(build.body)
    }

    const saveChanges = async (e) => {
        e.preventDefault()
        const { target } = e
        const body = {
            tipo: target.tipo.value,
            descripcion: target.descripcion.value,
            precio: target.precio.value,
            cantidadCuartos: target.cantidadCuartos.value,
            ventaOAlquiler: target.ventaOAlquiler.value,
            cantidadBanos: target.cantidadBanos.value,
            cantidadEstacionamientos: target.cantidadEstacionamientos.value,
            metrosTerreno: target.metrosTerreno.value,
            metrosConstruccion: target.metrosConstruccion.value,
            tel: target.tel.value,
            ws: target.ws.value
        }
        const url = `${ApiUrl}/buildings/${id}`
        try {
            const res = await request.put(url, body)
            if(res.status){
                setAlertModal('Modificado exitosamente')
            }else{
                setAlertModal('Ocurrio un error inesperado, cod:232x')
            }

        } catch (error) {
            setAlertModal('Ocurrio un error inesperado, cod:233y')
        }
    }

    const handleChange = ({ target }) => {
        const { name, value } = target
        setBuilding({ ...building, [name]: value })
    }

    const [wsAlert, setWsAlert] = useState()
    const [telAlert, setTelAlert] = useState()

    const handleTel = ({ target }) => {
        const { value, name } = target
        const firstNumber = Number(value.split('')[0])
        if (name === 'ws' && firstNumber === 0) {
            setWsAlert('No debe incluir el cero (0)')
            return
        }
        if (name === 'tel' && firstNumber === 0) {
            setTelAlert('No debe incluir el cero (0)')
            return
        }
        setWsAlert('')
        setTelAlert('')
        setBuilding({ ...building, [name]: value })
    }

    useEffect(() => {
        getBuilding(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        building, setBuilding,
        objectEmpty, saveChanges, handleChange,
        handleTel, wsAlert, telAlert
    }
}
export default useEditar