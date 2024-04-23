import bg from '../images/r.jpg'

const style = {
    background: `linear-gradient(rgba(0, 0, 0, 0.356), rgba(0, 0, 0, 0.062), rgba(0, 0, 0, 0.062)), url(${bg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

export default function Carousel() {
    return (<div style={style} className='background-img'>
        <div className='imgWrapperx text-center text-light'>
            <div>
                <img src='/img/logoTransparent.png' alt='logo' width={350} />
            </div>
            <div className="text-light">
                <h1 className="m-0">Roraima Inmuebles</h1>
            </div>
            <div>
                <p>Encuentra la propiedad de tus sueños en venezuela</p>
            </div>
        </div>
    </div>
    )
}