/* eslint-disable react/prop-types */
const LoadImages = ({  previewImage, errorMessage, handleImageChange, setSelectedImage, setPreviewImage, setErrorMessage, labelName }) => {
   
    return (<>
        <div className="">
            <label htmlFor={labelName} className="d-flex justify-content-center">
                <div className="imagesUpload">
                    {previewImage ? <img src={previewImage} alt="Preview" className='preview-img w-100 pb-4' />
                        :
                        <>+ <i className="bi-image" /></>
                    }
                </div>
            </label>
            <div className="text-danger text-sm mb-2">
                {errorMessage}
            </div>
            {/* <div className="text-center px-3">
                <button onClick={()=>{
                    setSelectedImage(null)
                    setPreviewImage(null)
                }} className="btn w-100 btn-danger px-3"> Borrar </button>
            </div> */}
            <input accept="image/*" onChange={(e) => handleImageChange(e, setSelectedImage, setPreviewImage, setErrorMessage)} id={labelName} type="file" style={{ display: "none" }} />
        </div>
    </>)
}
export default LoadImages