import { Link } from 'react-router-dom'
import '../../css/inmueble.css'
const Inmuebles = () => {
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
        <div className='bg-white p-3'>
            Lista de inmuebles
        </div>
    </div>)
}
export default Inmuebles