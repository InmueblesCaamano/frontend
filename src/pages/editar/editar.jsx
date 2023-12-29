
import municipios from "../../services/ubicaciones"
import useEditar from "../../hooks/useEditar"
const Editar = () => {

    const { building, handleChange, objectEmpty, saveChanges, handleTel, wsAlert, telAlert } = useEditar()
    if (!objectEmpty(building)) {
        return (<>
            <div className="bg-dark py-4">.</div>
            <div className=" p-2 vh-100">
                <div className="bg-white p-2 mt-2">
                    <p className="px-3">Editando inmueble</p>
                    <div className="container-fluid">
                        <form onSubmit={(e) => saveChanges(e)}>
                            <div className="row">
                                <div className="col-md-6 col-sm-12 mb-4">
                                    <div className="border p-3 rounded bg-gray">
                                        <div>
                                            <div>Tipo</div>
                                            <select defaultValue={building ? building.tipo : ""} name="tipo" id="tipo" className="form-control border-dark mb-3">
                                                <option value=""> Elija un tipo </option>
                                                <option value="casa"> Casa </option>
                                                <option value="apartamento"> Apartamento </option>
                                                <option value="tomhouse"> TomHouse </option>
                                                <option value="terreno"> Terreno </option>
                                                <option value="local"> Local </option>
                                            </select>
                                            <div>Ubicacion </div>
                                            <input value={building ? municipios[building.municipios].Municipio : ""} className="mb-3 form-control border border-dark hoverNone" type="text" disabled />

                                            <div>Parroquia</div>
                                            <input value={building ? building.parroquias : ""} className="mb-3 form-control border border-dark hoverNone" type="text" disabled />
                                        </div>

                                        <div>Descripcion</div>
                                        <textarea defaultValue={building?.descripcion} onChange={handleChange} className="mb-3 form-control border border-dark " name="descripcion" id="descripcion" cols="30" rows="4">
                                            
                                        </textarea>

                                        <div>Precio</div>
                                        <input onChange={handleChange} value={building?.precio} className="mb-3 form-control border border-dark" type="number" name="precio" id="precio" placeholder="Ingrese el precio" required />

                                        <div>Numero de cuartos</div>
                                        <input onChange={handleChange} value={building?.cantidadCuartos} id="cantidadCuartos" className="mb-3 form-control border border-dark" type="number" name="cantidadCuartos" placeholder="Ingrese numero de cuartos" required />

                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="border bg-gray p-3 rounded">
                                        <div>Venta o alquiler</div>
                                        <select defaultValue={building?.ventaOAlquiler} className="mb-3 form-control border border-dark" name="ventaOAlquiler" id="ventaOAlquiler">
                                            <option value="venta"> Venta </option>
                                            <option value="alquiler"> Alquiler </option>
                                            <option value="ambos"> Ambos </option>
                                        </select>

                                        <div>Numero de baños</div>
                                        <input onChange={handleChange} value={building?.cantidadBanos} id="cantidadBanos" className="mb-3 form-control border border-dark" type="number" name="cantidadBanos" placeholder="Ingrese numero de baños" required />

                                        <div>Puestos de estacionamiento</div>
                                        <input onChange={handleChange} value={building?.cantidadEstacionamientos} id="cantidadEstacionamientos" className="mb-3 form-control border border-dark" type="number" name="cantidadEstacionamientos" placeholder="Cantidad de puestos de estacionamiento" required />

                                        <div>Metros cuadrados del terreno</div>
                                        <input onChange={handleChange} value={building?.metrosTerreno} id="metrosTerreno" className="mb-3 form-control border border-dark" type="number" name="ubicacion" placeholder="Metros cuadrados de terreno" required />

                                        <div>Metros cuadrados de construccion</div>
                                        <input onChange={handleChange} value={building?.metrosConstruccion} id="metrosConstruccion" className="mb-3 form-control border border-dark" type="number" name="metrosConstruccion" placeholder="Metros cuadrados de construccion" required />

                                        <div>Publicado</div>
                                        <select defaultValue={building?.publish} name="publish" id="publish" className="mb-3">
                                            <option value="true"> Publicar  </option>
                                            <option value="false"> No Publicar  </option>
                                        </select>

                                        <div>WhatsApp</div>

                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">+58</span>
                                            </div>
                                            <input value={building?.ws} onChange={(e) => handleTel(e)} required type="number" className={wsAlert ? "form-control border border-danger " : "form-control border border-dark "} placeholder="Numero de whatsapp del vendedor" aria-label="Username" aria-describedby="basic-addon1" name="ws" id="ws" />
                                        </div>

                                        {wsAlert && <div className="alert alert-warning" role="alert">
                                            {wsAlert}
                                        </div>}

                                        <div>Telefono</div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">+58</span>
                                            </div>
                                            <input value={building?.tel} onChange={(e) => handleTel(e)} required type="number" className={telAlert ? "form-control border border-danger " : "form-control border border-dark "} placeholder="Numero de telefono del vendedor" aria-label="Username" aria-describedby="basic-addon1" name="tel" id="tel" />
                                        </div>

                                        {telAlert && <div className="alert alert-warning" role="alert">
                                            {telAlert}
                                        </div>}

                                    </div>
                                    <div className="py-4">
                                        <button className="btn w-100 btn-warning btn-lg mb-3 px-5"> <i className="bi-archive" /> Guardar cambios </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>)
    }


}

export default Editar