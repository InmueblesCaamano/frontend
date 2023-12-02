import { useEffect, useState } from "react";
import request from "../../services/request";
import { ApiUrl } from "../../services/apiurl";
import { useParams } from "react-router-dom";
import getMunicipio from "../../services/getMunicipio";
const Deatallado = () => {
    const { id } = useParams()
    const [building, setBuilding] = useState()
    const [actualPicture, setActualPicture] = useState()

    const getBuilding = async (id) => {
        const response = await request.get(ApiUrl + "/buildings/" + id)
        setBuilding(response.body)
        setActualPicture(response.body.images[0])
    }

    useEffect(() => {
        if (id) getBuilding(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return (
        <>
            <div className="bg-dark p-4 ">
                .
            </div>
            <div className="container-fluid mt-4 px-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="mb-4 actualPicture">
                            {building?.images.length > 0 ? <>
                                <img className="imgDetallado" src={actualPicture} />
                            </> : <> Sin imagen </>}
                        </div>
                        <div className="row px-2">
                            {building?.images && building.images.map((foto, index) => {
                                return (<div className="col-2 p-2" key={index}>
                                    <img onClick={() => setActualPicture(foto)} className="imgDisplay" src={foto} />
                                </div>)
                            })}
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="bg-dark text-light p-4 rounded titleDetallado">
                            <h2>  {building?.parroquias} </h2>
                            <div>  {getMunicipio(building?.municipios)}, Nueva Esparta </div>
                            <h1 className=" m-0 p-0" > $ {building?.precio} </h1>
                            <i className="bg-primary p-1 rounded top-left">{building?.tipo} </i>
                        </div>
                        <hr />
                        <div className="p-4 bg-white rounded mt-3">
                            {building?.descripcion}
                        </div>
                        <div className="d-between px-3">
                            <h3>
                                Cantidad de Cuartos
                            </h3>
                            <h2>
                                <i className="bi bi-door-closed" />  {building?.cantidadCuartos}
                            </h2>
                        </div>
                        <hr />
                        <div className="d-between px-3">
                            <h3>
                                Cantidad de Baños
                            </h3>
                            <h2>
                                <i className="bi bi-droplet-half" />  {building?.cantidadBanos}
                            </h2>
                        </div>
                        <hr />
                        <div className="d-between px-3">
                            <h3>
                                Puestos de estacionamiento
                            </h3>
                            <h2>
                                <i className="bi bi-car-front-fill" />  {building?.cantidadEstacionamientos}
                            </h2>
                        </div>
                        <hr />
                        <div className="d-between px-3">
                            <h3>
                                Metros de contruccion
                            </h3>
                            <h2>
                                <i className="bi-building" />  {building?.metrosConstruccion}
                            </h2>
                        </div>
                        <hr />
                        <div className="d-between px-3">
                            <h3>
                                Metros de terreno
                            </h3>
                            <h2>
                                <i className="bi- bi-arrows-fullscreen" />  {building?.metrosTerreno}
                            </h2>
                        </div>
                        <div className="m-5">
                            <div className="row">
                                <div className="col-6">
                                    <button className="btn btn-lg btn-primary w-100"> <i className="bi-telephone" /> Llamar al vendedor </button>
                                </div>
                                <div className="col-6">
                                    <button className="btn btn-lg btn-success w-100"> <i className="bi-telephone" /> Contactar al Whatsapp </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Deatallado