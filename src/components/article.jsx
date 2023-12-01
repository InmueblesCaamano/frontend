/* eslint-disable react/prop-types */
import '../css/article.css'
import { useNavigate } from 'react-router-dom'
export default function Article({ item }) {
    const navigate = useNavigate()
    console.log(item)
    return (<>
        <div onClick={() => navigate('/detallado/' + item._id)} className="bgArticle pb-3">
            <div className='card-article'>
                <div className='articleImage'>
                    {/* {item && item.images.lenght > 0 && console.log(item._id, ' - ',item.images[0].filename)} */}
                    {/* {item?.images.lenght > 0 ? <>
                    {console.log(item)}
                    si imagen */}
                    {/* <img src={item?.images[0].filename && '../files/'+item.images[0].filename} className='img-article' alt="" /> */}
                    {/* </> : <> No image </>} */}
                    {item.images.length > 0 ? <>
                        <img src={'../files/' + item.images[0].filename} className='img-article' alt="" />
                    </> : <div className='noimage' >
                        <i className='bi-image' />
                        <div>
                            Sin imagen
                        </div>
                    </div>}
                    <div className='fondo' />
                    <div className="tittle-article">
                        {item.parroquias}, {item.tipo}
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row pt-2">
                    <div className="col-4">
                        <div className="bg-dark-transparent text-light text-mini text-center rounded p-1">
                            {item.ventaOAlquiler}
                        </div>
                        <div className='text-center'>
                            <div className="price">$ {item.precio} </div>
                        </div>
                    </div>
                    <div className="col-2 icon-article">
                        <i className="bi bi-door-closed  icono" />
                        <div>
                            {item.cantidadCuartos}
                        </div>
                    </div>
                    <div className="col-2 icon-article">
                        <i className="bi bi-droplet-half icono" />
                        <div>
                            {item.cantidadBanos}
                        </div>
                    </div>
                    <div className="col-2 icon-article">
                        <i className="bi bi-car-front-fill icono" />
                        <div>
                            {item.cantidadEstacionamientos}
                        </div>
                    </div>
                    <div className="col-2 icon-article">
                        <i className="bi bi-arrows-fullscreen icono" />
                        <div className="text-center">
                            <div className='text-mini flex-center'>
                                {item.metrosConstruccion} Mts
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
