import { Link } from "react-router-dom";
export default function Login() {
    return (<>
        <div className='container-fluid bg-dark py-5 vh-100'>
            <div className='row'>
                <div className='col-md-4 offset-4'>
                    <div className='p-5 radius-5 mt-5'>
                        <div className='text-center'>
                            <img src='./img/logo2.svg' className='logo-nav' alt='logo caamano inmuebles' />
                        </div>
                        <h1 className='text-light'>Iniciar sesión</h1>
                        <form>
                            <input className='form-control mt-4' type="text" placeholder="Correo electrónico" />
                            <input className='form-control mt-4' type="password" placeholder="Contraseña" />
                            <button className='btn btn-primary mt-4' >Iniciar sesión</button>
                        </form>
                        <div className='text-warning text-center pt-4'>
                            Aun no tienes una cuenta? 
                            <Link to="/registro" className='text-warning mx-2'>
                                Registrate
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}