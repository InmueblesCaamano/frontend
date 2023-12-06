/* eslint-disable react/prop-types */
const LoadImages = ({ imgIndex, previewImage, errorMessage, handleImageChange, setPreviewImage, setErrorMessage, labelName }) => {
   
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
            <input accept="image/*" onChange={(e) => handleImageChange(e, setPreviewImage, setErrorMessage,imgIndex)} id={labelName} type="file" style={{ display: "none" }} />
        </div>
    </>)
}
export default LoadImages