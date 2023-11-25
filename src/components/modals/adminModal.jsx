/* eslint-disable react/prop-types */
const AdminModal = ({user,setAdminModal,sendAdminModify,adminLevel}) => {
    return (<>
        <div className="background-notification">
            <div className="body-admin-modal">
                <p>
                    Esta estableciendo al siguiente usuario como administrador
                </p>
                <h2>
                     {user.name}
                </h2>
                <div>
                    Id: {user._id}
                </div>
                <hr />
                <div className="text-center">
                    <button onClick={()=>sendAdminModify(adminLevel)} className="btn btn-primary mx-2"> Aceptar </button>
                    <button onClick={()=>setAdminModal(false)}  className="btn btn-danger mx-2"> <i className="bi bi-x"/> Cancelar</button>
                </div>
            </div>
        </div>
    </>)
}
export default AdminModal