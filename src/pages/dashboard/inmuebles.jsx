import { Link } from 'react-router-dom'
import '../../css/inmueble.css'
import { useBulidingStore } from '../../store/buildingStore'
import municipios from '../../services/ubicaciones'
import useBuilding from '../../hooks/useBuilding'
const Inmuebles = () => {
    const { deleteBuilding } = useBuilding()
    const { buildings } = useBulidingStore()
    /*  const urlImages = './files/' */
    return (<div className="container-fluid p-2 inmuebles-body">
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
                            <div className='picture'>
                                <img className='pictureAdmin' src={item.images[0]} alt="" />
                            </div>
                        </div>
                        <div className='col-8 p-3'>
                            <div>
                                <div>
                                    <h3 className='p-0 m-0'>
                                        {tipo} , {municipios[item.municipios].Municipio} <i className='px-1 text-white bg-gray'>{ventaOAlquiler}</i>
                                    </h3>
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
                            <button onClick={() => deleteBuilding(item._id)} className='btn btn-danger' > Eliminar esta propiedad </button>
                            {/*  <button className='btn btn-primary w-100'> Editar </button> */}
                        </div>
                    </div>)
                })}
            </div>
        </div>
    </div>)
}
export default Inmuebles