/* eslint-disable react/prop-types */
const AdminModal = ({user,setAdminModal,sendAdminModify,adminLevel}) => {
    return (<>
        <div className="background-notification">
            <div className="body-admin-modal">
                <p>
                    Ingrese su clave para continuar
                </p>
                <div>
                    usuario: {user.name}
                </div>
                <div>
                    Id: {user._id}
                </div>
                <form onSubmit={(e)=>sendAdminModify(e,adminLevel)} className="d-flex mt-4 mb-4">
                    <input name="password" placeholder="ingrese su clave" required type="password" className="form-control mx-2 input-border" />
                    <button  className="btn btn-primary"> Aceptar </button>
                </form>
                <hr />
                <div className="text-center">
                    <button onClick={()=>setAdminModal(false)}  className="btn btn-danger mt-2"> <i className="bi bi-x"/> Cancelar</button>
                </div>
            </div>
        </div>
    </>)
}
export default AdminModal