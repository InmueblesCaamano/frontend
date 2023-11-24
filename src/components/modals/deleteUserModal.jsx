/* eslint-disable react/prop-types */
const DeleteUserModal = ({user,setModalDeleteUser,sendDeleteUser}) => {
    return (<>
        <div className="background-notification">
            <div className="body-admin-modal-delete bg-danger text-light">
                <p>
                    Esta eliminando al usuario:
                </p>
                <h2 className="border border-light rouded p-2">
                     {user.name}
                </h2>
                <div>
                    Id: {user._id}
                </div>
                <form onSubmit={(e)=>{ sendDeleteUser(e,user._id) }} className="d-flex mt-4 mb-4">
                    <input name="password" placeholder="ingrese su clave" required type="password" className="form-control mx-2 input-border" />
                    <button  className="btn btn-primary"> Aceptar </button>
                </form>
                <hr />
                <div className="text-center">
                    <button onClick={()=>setModalDeleteUser(false)} className="btn btn-warning mt-2"> <i className="bi bi-x"/> Cancelar</button>
                </div>
            </div>
        </div>
    </>)
}
export default DeleteUserModal