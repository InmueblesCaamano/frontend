import { useState } from "react"
/* eslint-disable react/jsx-key */
import municipios from "../../services/ubicaciones"
import request from "../../services/request"
import { ApiUrl } from "../../services/apiurl"
import useSessionStore from "../../store/sesionStore"
import { useBulidingStore } from "../../store/buildingStore"
import { useNavigate } from "react-router-dom"

import useNotificationStore from "../../store/notificationStore"
import useLoadingStore from "../../store/loadingStore"
const Agregar = () => {

    const { setLoading } = useLoadingStore()
    const { user } = useSessionStore()
    const navigate = useNavigate()
    const { setBuilding } = useBulidingStore()
    const [parroquias, setParroquias] = useState([])
    const { setNotification } = useNotificationStore()

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
            tipo: e.target.tipo.value
        }

       /*  console.log(body) */
        
        const url = ApiUrl + "/buildings"
        const res = await request.post(url, body)
        if (res.status) {
            setBuilding(res.body)
            navigate('/addimages/'+res.body._id+'/'+res.body.precio+'/'+res.body.municipios+'/'+res.body.parroquias)
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

    return (<>
        <div className="bg-dark text-light pt-5 px-3 pb-2">
            <h3 className="pt-4 text-center">Nuevo inmueble
            </h3>
        </div>
        <div className=" p-2 vh-100">
            <div className="bg-white p-2 mt-2">
                <p className="px-3">Espesificaciones</p>
                <div className="container-fluid">
                    <form onSubmit={(e) => sendForm(e)}>
                        <div className="row">
                            <div className="col-md-6 col-sm-12 mb-4">
                                <div className="border p-3 rounded bg-gray">
                                    <div>
                                        <div>Tipo</div>
                                        <select name="tipo" id="tipo" className="form-control border-dark mb-3">
                                            <option value=""> Elija un tipo </option>
                                            <option value="casa"> Casa </option>
                                            <option value="apartamento"> Apartamento </option>
                                            <option value="tomhouse"> TomHouse </option>
                                            <option value="terreno"> Terreno </option>
                                            <option value="local"> Local </option>
                                        </select>
                                        <div>Ubicacion </div>
                                        <select onChange={(e) => handleParroquias(e.target.value)} name="municipios" id="" className="form-control border-dark mb-3">
                                            <option value=""> Elija un municipio </option>
                                            {municipios.map((i, index) => {
                                                return (<option key={i.id} value={index}>
                                                    {i.Municipio}
                                                </option>)
                                            })}
                                        </select>

                                        {parroquias.length > 0 ?
                                            <>
                                                <div>Parroquias</div>
                                                <select name="parroquias" id="parroquias" className="form-control border-dark mb-3">
                                                    <option value=""> Elija una Parroquia </option>
                                                    {parroquias.map((i, index) => {
                                                        return (<option key={index}>
                                                            {i}
                                                        </option>)
                                                    })}
                                                </select>
                                            </> :
                                            <select className="form-control text-gray" id="" disabled>
                                                <option value="">Elija una parroquia</option>
                                            </select>
                                        }
                                    </div>

                                    <div>Descripcion</div>
                                    <textarea className="mb-3 form-control border border-dark " name="descripcion" id="descripcion" cols="30" rows="4"></textarea>

                                    <div>Precio</div>
                                    <input className="mb-3 form-control border border-dark" type="number" name="precio" id="precio" placeholder="Ingrese el precio" required />

                                    <div>Numero de cuartos</div>
                                    <input id="cantidadCuartos" className="mb-3 form-control border border-dark" type="number" name="cantidadCuartos" placeholder="Ingrese numero de cuartos" required />

                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="border bg-gray p-3 rounded">
                                    <div>Venta o alquiler</div>
                                    <select className="mb-3 form-control border border-dark" name="ventaOAlquiler" id="ventaOAlquiler">
                                        <option value="venta"> Venta </option>
                                        <option value="alquiler"> Alquiler </option>
                                        <option value="ambos"> Ambos </option>
                                    </select>

                                    <div>Numero de baños</div>
                                    <input id="cantidadBanos" className="mb-3 form-control border border-dark" type="number" name="cantidadBanos" placeholder="Ingrese numero de baños" required />

                                    <div>Puestos de estacionamiento</div>
                                    <input id="cantidadEstacionamientos" className="mb-3 form-control border border-dark" type="number" name="cantidadEstacionamientos" placeholder="Cantidad de puestos de estacionamiento" required />

                                    <div>Metros cuadrados del terreno</div>
                                    <input id="metrosTerreno" className="mb-3 form-control border border-dark" type="number" name="ubicacion" placeholder="Metros cuadrados de terreno" required />

                                    <div>Metros cuadrados de construccion</div>
                                    <input id="metrosConstruccion" className="mb-3 form-control border border-dark" type="number" name="metrosConstruccion" placeholder="Metros cuadrados de construccion" required />
                                </div>
                                <div className="py-4">
                                    <button className="btn w-100 btn-warning btn-lg mb-3 px-5"> <i className="bi-archive" /> Guardar y Continuar </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>)
}
export default Agregar