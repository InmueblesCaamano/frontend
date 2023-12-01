/* import { Link } from "react-router-dom" */
/* import { ApiUrl } from "../../services/apiurl" */
import request from "../../services/request"
import { useState } from "react"
import municipios from "../../services/ubicaciones"
import LoadImages from "../../components/loadImages/loadImages"
import useLoadingStore from "../../store/loadingStore"
import { useParams } from "react-router-dom";
const AddImages = () => {

    const { id, precio, municipio, parroquia } = useParams()

    const { setLoading } = useLoadingStore()
    /* const { building = { municipios: 1, parroquias: "", precio: 0 } } = useBulidingStore() */
    const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/tiff'];
    const [selectedImage1, setSelectedImage1] = useState(null);
    const [selectedImage2, setSelectedImage2] = useState(null);
    const [selectedImage3, setSelectedImage3] = useState(null);
    const [selectedImage4, setSelectedImage4] = useState(null);
    const [selectedImage5, setSelectedImage5] = useState(null);
    const [selectedImage6, setSelectedImage6] = useState(null);

    const [previewImage1, setPreviewImage1] = useState(null);
    const [previewImage2, setPreviewImage2] = useState(null);
    const [previewImage3, setPreviewImage3] = useState(null);
    const [previewImage4, setPreviewImage4] = useState(null);
    const [previewImage5, setPreviewImage5] = useState(null);
    const [previewImage6, setPreviewImage6] = useState(null);

    const [errorMessage1, setErrorMessage1] = useState('');
    const [errorMessage2, setErrorMessage2] = useState('');
    const [errorMessage3, setErrorMessage3] = useState('');
    const [errorMessage4, setErrorMessage4] = useState('');
    const [errorMessage5, setErrorMessage5] = useState('');
    const [errorMessage6, setErrorMessage6] = useState('');

    const handleImageChange = async (e, setImage, setPreview, setErrorMessage) => {
        const file = e.target.files[0]
        setLoading(true)
        console.log(file)
        if (file && allowedImageTypes.includes(file.type)) {
            setErrorMessage('')
            setImage(file);
            try {
                const blobUrl = "https://blob-starter-rosy.vercel.app/api/upload"
                const response = await request.post(blobUrl)
                console.log(response)
                
            } catch (error) {
                setLoading(false)
            }

            const reader = new FileReader();
            reader.onload = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImage(null);
            setPreview(null);
            setErrorMessage('Por favor, selecciona una imagen válida (JPEG, PNG o GIF).');
        }
        setLoading(false)
    }

    /* const handleUpload = () => {
        if (selectedImage1) {
           
            const formData = new FormData()
            formData.append('image', selectedImage1)
            formData.append('image', selectedImage2)
            formData.append('image', selectedImage3)
            formData.append('image', selectedImage4)
            formData.append('image', selectedImage5)
            formData.append('image', selectedImage6)

            // 'http://localhost:4000/api/v1/upload/'
            fetch(ApiUrl + "/upload/" + building._id, {
                method: 'POST',
                body: formData,
            })
                .then(res => res.json())
                .then(data => {
                    console.log('Imágenes cargadas con éxito:', data);
                    alert('Imagenes cargadas con exito')
                })
                .catch(error => {
                    alert('Error al cargar las imagenes')
                    console.error('Error al cargar las imágenes:', error);
                })
        } else {
            alert('Debe seleccionar almenos 1 imagen')
        }
    } */

    return (<>
        <div className="bg-dark py-4">.</div>
        <div className="p-5">
            <div className="bg-white p-2">
                <div className="container-fluid">
                    <div className="row mb-4">
                        <div className="col-12">
                            <div className="tittle-add-images">
                                <div>
                                    <h4>
                                       {municipios[municipio].Municipio}, {parroquia && parroquia}
                                    </h4>
                                    <h2 className="text-primary" >${precio && precio}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="gridImages">
                                <LoadImages labelName="file-input1" setSelectedImage={setSelectedImage1} setPreviewImage={setPreviewImage1} setErrorMessage={setErrorMessage1} previewImage={previewImage1} errorMessage={errorMessage1} handleImageChange={handleImageChange} />
                                <LoadImages labelName="file-input2" setSelectedImage={setSelectedImage2} setPreviewImage={setPreviewImage2} setErrorMessage={setErrorMessage2} previewImage={previewImage2} errorMessage={errorMessage2} handleImageChange={handleImageChange} />
                                <LoadImages labelName="file-input3" setSelectedImage={setSelectedImage3} setPreviewImage={setPreviewImage3} setErrorMessage={setErrorMessage3} previewImage={previewImage3} errorMessage={errorMessage3} handleImageChange={handleImageChange} />
                                <LoadImages labelName="file-input4" setSelectedImage={setSelectedImage4} setPreviewImage={setPreviewImage4} setErrorMessage={setErrorMessage4} previewImage={previewImage4} errorMessage={errorMessage4} handleImageChange={handleImageChange} />
                                <LoadImages labelName="file-input5" setSelectedImage={setSelectedImage5} setPreviewImage={setPreviewImage5} setErrorMessage={setErrorMessage5} previewImage={previewImage5} errorMessage={errorMessage5} handleImageChange={handleImageChange} />
                                <LoadImages labelName="file-input6" setSelectedImage={setSelectedImage6} setPreviewImage={setPreviewImage6} setErrorMessage={setErrorMessage6} previewImage={previewImage6} errorMessage={errorMessage6} handleImageChange={handleImageChange} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </>)
}

export default AddImages

