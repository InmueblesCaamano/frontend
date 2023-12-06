import { Link } from 'react-router-dom'
import '../../css/inmueble.css'
import { useBulidingStore } from '../../store/buildingStore'
import municipios from '../../services/ubicaciones'
import { useNavigate } from 'react-router-dom'
import { useModalDeleteStore } from '../../store/modalDeleteStore'
import ModalDelete from './modalDelete'
import useBuilding from '../../hooks/useBuilding'

const Inmuebles = () => {
    
    const { setPublishState } = useBuilding()
    const { setModalDelete, setId } = useModalDeleteStore()
    const navigate = useNavigate()

    const { buildings } = useBulidingStore()

    const redirect = (item) => navigate(`/addimages/${item._id}/${item.precio}/${item.municipios}/${item.parroquias}`)


    return (<div className="container-fluid p-2 inmuebles-body">
        <ModalDelete />
        <div className="bg-white p-3 text-center mb-2" >
            <Link className='decoration-none' to='/agregar'>
                <div className='btn-agregar-inmueble'>
                    <h1> + </h1>
                    <div>Click aqui para</div>
                    <h3>Agregar Un Inmueble</h3>
                </div>
            </Link>
        </div>
        <div className=''>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-12 text-center p-2 bg-white">
                        <h4>
                            Inmuebles Disponibles
                        </h4>
                    </div>
                </div>
                {buildings && buildings.map((item, i) => {

                    const { precio, cantidadCuartos, parroquias, descripcion,
                        cantidadBanos, cantidadEstacionamientos, metrosTerreno,
                        metrosConstruccion, ventaOAlquiler, tipo } = item

                    return (<div className='row bg-white mt-2' key={i}>
                        <div className='col-2 p-3'>
                            <div className='picture border border-dark'>
                                {item.images.length === 0 ? <>
                                    <button onClick={() => redirect(item)} className='btn btn-primary d-flex'>
                                        <h1>+</h1>
                                        <i className='bi-image' />
                                    </button>
                                </> : <>
                                    <img onClick={() => redirect(item)} className='pictureAdmin' src={item.images[0]} alt="" />
                                </>}
                            </div>
                        </div>
                        <div className='col-8 p-3'>
                            <div>
                                <div>
                                    <div className='between'>
                                        <h3>
                                            {tipo} , {municipios[item.municipios].Municipio}
                                        </h3>
                                        <div>
                                            <i className='p-2 px-3 text-white bg-dark rounded'>{ventaOAlquiler}</i>
                                        </div>
                                    </div>
                                    <p>{parroquias}</p>
                                </div>
                                <div>
                                    {descripcion}
                                </div>
                                <div className='iconos d-flex'>
                                    <div className='px-3'><i className="bi bi-door-closed  icono px-1" /> {cantidadCuartos} </div>
                                    <div className='px-3'><i className="bi bi-droplet-half icono px-1" /> {cantidadBanos}</div>
                                    <div className='px-3'><i className="bi bi-car-front-fill icono px-1" />{cantidadEstacionamientos}</div>
                                    <div className='px-3'><i className="bi bi-arrows-fullscreen icono px-1" />{metrosTerreno}</div>
                                    <div className='px-3'><i className='bi-envelope icono' /> {metrosConstruccion} </div>
                                </div>
                                <div>
                                    <h2 className='text-primary'>
                                        <i className='bi-enveope' /> $ {precio}
                                    </h2>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className='col-2 p-3'>
                            <button onClick={() => { setModalDelete(true); setId(item._id) }} className='btn btn-danger w-100 mb-3' > Eliminar esta propiedad </button>
                            {/*  <button className='btn btn-primary w-100'> Editar </button> */}

                            {item.publish ? <button onClick={() => setPublishState(item._id)} className='btn btn-warning w-100'> Publicado </button> : <button onClick={() => setPublishState(item._id)} className='btn btn-default border border-danger w-100'> No Visible </button>}
                        </div>
                    </div>)
                })}
            </div>
        </div>
    </div>)
}
export default Inmuebles