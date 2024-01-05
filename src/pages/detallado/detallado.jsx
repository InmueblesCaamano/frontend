import { useEffect, useState } from "react";
import request from "../../services/request";
import { ApiUrl } from "../../services/apiurl";
import { Link, useParams } from "react-router-dom";
import getMunicipio from "../../services/getMunicipio";
import useLoadingStore from "../../store/loadingStore"
import money from "../../services/money";
import ImgModal from "../../components/modals/imgModal";
import useCarouselStore from "../../store/carouselStore";
const Deatallado = () => {
    const { actualPicture, setPictures, setActualPicture, setVisible } = useCarouselStore()
    const { setLoading } = useLoadingStore();
    const { id } = useParams()
    const [building, setBuilding] = useState()
    /* const [actualPicture, setActualPicture] = useState() */
    const [actualPage, setActualPage] = useState(0)

    const getBuilding = async (id) => {
        setLoading(true)
        const response = await request.get(ApiUrl + "/buildings/" + id)
        if (!response.status) {
            setActualPage(1)
        } else {
            setBuilding(response.body)
            setPictures(response.body.images)
        }
        setLoading(false)
    }

    useEffect(() => {
        if (id) getBuilding(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    if (actualPage === 1) {
        return (<div className="pt-5 text-center">
            <h2>404</h2>
            <h4>Propiedad no encontrada</h4>
            <Link className="btn btn-primary" to='/'> Regresar al inicio </Link>
        </div>)
    }

    return (
        <>
            <ImgModal />
            <div className="bg-dark p-4 ">.</div>
            <div className="container-fluid mt-4 px-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="actualPicture">
                            {building?.images.length > 0 ? <div onClick={() => setVisible(true)} className="hoverPicture">
                                <img className="imgDetallado" src={building?.images[actualPicture]} />
                            </div> : <> Sin imagen </>}
                        </div>
                        <div className="row px-2">
                            {building?.images && building.images.map((foto, index) => {
                                return (<div className="col-2 p-2" key={index}>
                                    <img onClick={() => setActualPicture(index)} className="imgDisplay" src={foto} />
                                </div>)
                            })}
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="bg-light text-dark p-4 rounded titleDetallado">
                            <h2>  {building?.parroquias} </h2>
                            <div>  {getMunicipio(building?.municipios)}, Nueva Esparta </div>
                            <h1 className=" m-0 p-0" > {money(building?.precio)} </h1>
                            <i className="bg-primary text-light p-1 rounded top-left">{building?.tipo} </i>
                        </div>
                        <div className="p-4 bg-white rounded mt-1">
                            {building?.descripcion}
                        </div>
                        <div className="bg-white p-4 mt-1 rounded">
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
                        </div>
                        <div className="mt-3 mb-5">
                            <div className="row">
                                <div className="col-6">
                                    <button onClick={() => window.open("tel:+58" + building?.ws)} className="btn btn-lg btn-primary w-100"> <i className="bi-telephone" /> Llamar al vendedor </button>
                                </div>
                                <div className="col-6">
                                    <button onClick={() => window.open('https://wa.me/+58' + building?.tel, '_blank')} className="btn btn-lg btn-success w-100"> <i className="bi-telephone" /> Contactar al Whatsapp </button>
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