import { useState } from "react"
/* eslint-disable react/jsx-key */
import municipios from "../../services/ubicaciones"
const Agregar = () => {


    const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/tiff']
    const [selectedImages, setSelectedImages] = useState([])
    const [previewImages, setPreviewImages] = useState([])
    const [errorMessage, setErrorMessage] = useState('')


    const handleImageChange = (e) => {
        const file = e.target.files[0]

        if (file && allowedImageTypes.includes(file.type)) {
            setSelectedImages([...selectedImages, file])
            setErrorMessage('')
            const reader = new FileReader()
            reader.onload = () => {
                /*  console.log(reader.result) */
                setPreviewImages([...previewImages, reader.result])
            }
            reader.readAsDataURL(file)
        } else {
            setErrorMessage('Por favor, selecciona una imagen válida (JPEG, PNG o GIF).')
        }
    }

    const send = () => {
        console.log(selectedImages)
    }

    const setParroquias = (e) => {
        console.log(e)
    }

    return (<>
        <div className="bg-dark text-light pt-5 px-3 pb-2">
            <h3 className="pt-4 text-center">Nuevo inmueble
            </h3>
        </div>

        <div className="bg-gray p-2 vh-100">
            <div className="bg-white p-2">
                <p className="px-3">Agregar imagenes</p>
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-3">
                            <label htmlFor="photo" className="mouseButton">
                                <div className="btn-add-image text-center">
                                    <h1>+</h1>
                                    <h4>
                                        <i className="bi bi-image" /> Agregar imagen
                                    </h4>
                                </div>
                            </label>
                        </div>
                        <input accept="image/*" onChange={(e) => handleImageChange(e)} type="file" name="photo" id="photo" className="d-none" />
                        {/* <div>
                            {previewImage &&
                                <img src={previewImage} alt="Preview" className='preview-kyc pb-4' />
                            }

                            
                        </div> */}
                        {previewImages.length > 0 && previewImages.map((i, index) => {
                            return (<div className="col-3" key={index}>
                                <div className="border border-danger img-lis-preview">
                                    <img src={i} alt="Preview" className='preview-img w-100' />
                                </div>
                            </div>)
                        })}

                    </div>
                    {errorMessage &&
                        <p className='w-100 p-3 text-danger'>
                            <i className='bi bi-exclamation-triangle'></i> {errorMessage}
                        </p>
                    }
                </div>
            </div>

            <div className="bg-white p-2 mt-2">
                <p className="px-3">Espesificaciones</p>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <div className="border border-dark p-3">
                                <div>
                                    <div>Ubicacion</div>
                                    <select onChange={(e) => setParroquias(e.target.value)} name="municipios" id="" className="form-control border-dark">
                                        {municipios.map((i) => {
                                            return (<option key={i.id} value={i.id}>
                                                {i.Municipio}
                                            </option>)
                                        })}
                                    </select>
                                </div>
                                <hr />
                                <div>Descripcion</div>
                                <input className="form-control border border-dark" type="text" name="ubicacion" placeholder="Ingrese la descripcion" required />
                                <hr />
                                <div>Precio</div>
                                <input className="form-control border border-dark" type="number" name="ubicacion" placeholder="Ingrese el precio" required />
                                <hr />
                                <div>Numero de cuartos</div>
                                <input className="form-control border border-dark" type="number" name="ubicacion" placeholder="Ingrese numero de cuartos" required />
                                <hr />
                                <div>Venta o alquiler</div>
                                <select className="form-control border border-dark" name="" id="">
                                    <option value="venta"> Venta </option>
                                    <option value="alquiler"> Alquiler </option>
                                    <option value="ambos"> Ambos </option>
                                </select>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="border border-dark p-3">
                                <div>Numero de baños</div>
                                <input className="form-control border border-dark" type="number" name="ubicacion" placeholder="Ingrese numero de baños" required />
                                <hr />
                                <div>Puestos de estacionamiento</div>
                                <input className="form-control border border-dark" type="number" name="ubicacion" placeholder="Cantidad de puestos de estacionamiento" required />
                                <hr />
                                <div>Metros cuadrados del terreno</div>
                                <input className="form-control border border-dark" type="number" name="ubicacion" placeholder="Metros cuadrados de terreno" required />
                                <hr />
                                <div>Metros cuadrados de construccion</div>
                                <input className="form-control border border-dark" type="number" name="ubicacion" placeholder="Metros cuadrados de construccion" required />
                            </div>
                        </div>
                        <div className="col-12 p-4 text-end m-4">
                            <button onClick={() => send()} className="btn btn-warning btn-lg px-5"> <i className="bi-archive" /> guardar </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Agregar