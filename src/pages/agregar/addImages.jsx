import request from "../../services/request"
import { useEffect, useState } from "react"
import municipios from "../../services/ubicaciones"
/*import LoadImages from "../../components/loadImages/loadImages" */
import useLoadingStore from "../../store/loadingStore"
import { useParams } from "react-router-dom";
import { ApiUrl } from "../../services/apiurl"
import { useNavigate } from "react-router-dom";
const imgbb = "https://api.imgbb.com/1/upload?key=7931846fbc1c51d230a5ea5e92600423"

const AddImages = () => {

    const navigate = useNavigate()
    const { id, precio, municipio, parroquia } = useParams()

    const { setLoading } = useLoadingStore()
    const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/tiff']
    /* const [errorMessage, setErrorMessage] = useState('') */
    const [images, setImages] = useState([]);

    const getBuilding = async () => {
        const url = ApiUrl + '/buildings/' + id
        const building = await request.get(url)
        const images = building.body.images
        setImages(images)

    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { getBuilding() }, [])

    const addNewImage = async (e) => {
        const file = e.target.files[0]
        if (!file || !allowedImageTypes.includes(file.type)) return

        const data = new FormData()
        data.append('image', file)

        try {
            setLoading(true)
            const response = await fetch(imgbb, {
                method: 'POST',
                body: data,
            })
            const responseData = await response.json()
            const body = { url: responseData.data.url }
            const serverResponse = await request.post(ApiUrl + '/upload/single/' + id, body)
            if (serverResponse.status) {
                await getBuilding()
            } else {
                alert('Ocurrio un error1')
            }
            setLoading(false)
        } catch (error) {
            alert('Ocurrio un error2')
            setLoading(false)
        }
    }

    const deleteOneImage = async (index) => {
        setLoading(true)
        const url = ApiUrl + '/buildings/deleteone/' + id + '/' + index
        await request.delete(url)
        getBuilding()
        setLoading(false)
    }

    return (<>
        <div className="bg-dark py-4">.</div>
        <div className="p-5">
            <div className="bg-white p-2">
                <div className="container-fluid">
                    <div className="row mb-4">
                        <div className="col-12">
                            <div className="tittle-add-images">
                                <div className="hearder-addImages w-100">
                                    <div>
                                        <h4>
                                            {municipios[municipio].Municipio}, {parroquia && parroquia}
                                        </h4>
                                        <h2 className="text-primary" >${precio && precio}</h2>
                                    </div>
                                    <div>
                                        <button onClick={() => navigate('/detallado/' + id)} className="btn btn-primary btn-lg"> Guardar </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12" >
                            <div className="grid pb-5">
                                {images.length > 0 && images.map((image, index) => {
                                    return (<div className="itemgrid" key={index}>
                                        <div className="imagesUpload" >
                                            <img className='preview-img w-100 pb-4' src={image} alt="" />
                                            <div onClick={() => deleteOneImage(index)} className="eraseImage"> x </div>
                                        </div>
                                    </div>
                                    )
                                })}
                                <div className="itemgrid">
                                    <div className="imagesUpload2">
                                        <label htmlFor='newImage' className="d-flex pointer justify-content-center align-items-center w-100 h-100">
                                            + <i className="bi-image" />
                                        </label>
                                    </div>
                                </div>
                                <input onChange={(e) => addNewImage(e)} type="file" name="newImage" id="newImage" style={{ display: "none" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </>)
}

export default AddImages