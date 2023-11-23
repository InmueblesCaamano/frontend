import { Link } from "react-router-dom"
import useRegister from "../../hooks/useRegister"
import LogoRounded from "../../components/logoRounded"
const Registro = () => {

    const { handleChange, sendRegisterForm } = useRegister()
    
    return (<>
        <div className='container-fluid bg-dark py-5'>
            <div className='row'>
                <div className='col-12  col-md-8 col-lg-6 offset-lg-3 offset-md-2'>
                    <div className='p-5 radius-5 mt-5'>
                        <div className="d-flex justify-content-center">
                            <LogoRounded width={150} height={150} />
                        </div>
                        <h3 className='text-light'>Registro</h3>
                        <form onSubmit={(e) => sendRegisterForm(e)}>
                            <label className="label-form mt-4" htmlFor="email">Correo</label>
                            <input required autoComplete='on' onChange={handleChange} className='form-control' type="email" name="email" id="email" placeholder="Correo" />

                            <label className="label-form mt-4" htmlFor="name">Nombre</label>
                            <input required autoComplete='on' onChange={handleChange} className='form-control' type="text" name='name' id='name' placeholder="Nombre" />

                            <label className="label-form mt-4" htmlFor="phone" >Telefono</label>
                            <input required autoComplete='on' onChange={handleChange} className='form-control' name='phone' id='phone' type="text" placeholder="Telefono" />

                            <label className="label-form mt-4" htmlFor="password" >Contraseña</label>
                            <input required onChange={handleChange} className='form-control' name='password' id='password' type="password" placeholder="Contraseña" />

                            <label className="label-form mt-4" htmlFor="confirmPass" >Repetir Contraseña</label>
                            <input required onChange={handleChange} className='form-control' type="password" placeholder="Repetir Contraseña" name='confirmPass' id='confirmPass' />

                            <button className='btn btn-primary mt-4' >Enviar</button>
                        </form>
                        <div className='text-warning text-center pt-4'>
                            ¿Ya tienes una cuenta?
                            <Link to="/login" className='text-warning mx-2'>
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Registro