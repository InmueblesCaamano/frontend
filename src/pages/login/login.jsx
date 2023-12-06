import { Link } from "react-router-dom";
import LogoRounded from "../../components/logoRounded";
import useLogin from "../../hooks/useLogin";
import useLoadingStore from "../../store/loadingStore";
export default function Login() {
    const { login } = useLogin()
    const { loading } = useLoadingStore()
    return (<>
        <div className='container-fluid bg-dark py-5 vh-100'>
            <div className='row'>
                <div className='col-sm-10 offset-sm-1 col-md-6 offset-md-3 col-lg-4 offset-lg-4'>
                    <div className='p-5 radius-5 mt-5'>
                        <div className="d-flex justify-content-center">
                            <LogoRounded width={150} height={150} />
                        </div>
                        <h1 className='text-light'>Iniciar sesión</h1>
                        <form onSubmit={(e) => login(e)}>
                            <input  required name="email" id="email" className='form-control mt-4' type="email" placeholder="Correo electrónico" />
                            <input  required name="password" id="password" className='form-control mt-4' type="password" placeholder="Contraseña" />
                            {loading ? <>cargando</> :<button className='btn btn-primary mt-4' >Iniciar sesión</button>}
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