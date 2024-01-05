import useCarouselStore from "../../store/carouselStore"
// eslint-disable-next-line react/prop-types
const ImgModal = () => {


    const { actualPicture, pictures, visible, setVisible, decrement, increment } = useCarouselStore()

    if (visible) {
        return (<div className="background-img-modal">
            <div className="body-img-modal">
                <img className="actualPicture-modal" src={pictures[actualPicture]} alt="" />
                <button onClick={() => setVisible(false)} className="px-5 close-btn-modal-img  modal-btn"> <i className="bi-x" /> Cerrar </button>
                <div onClick={decrement} className=" ant-btn-modal-img  modal-btn laterals">{'<'}</div>
                <div onClick={increment} className=" sig-btn-modal-img  modal-btn laterals">{'>'}</div>
            </div>
        </div>)
    }
    return (<></>)
}
export default ImgModal