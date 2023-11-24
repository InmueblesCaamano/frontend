import AdminModal from '../../components/modals/adminModal'
import useUsers from '../../hooks/useUsers'
import DeleteUserModal from '../../components/modals/deleteUserModal'
const Usuarios = () => {

    const { users, makeAdmin, userToDelete, modalDeleteUser,
        adminModal, userAdmin, setAdminModal, sendAdminModify,
        adminLevel, deleteUser,setModalDeleteUser,sendDeleteUser } = useUsers()

    return (<div className='p-2'>

        {modalDeleteUser && <DeleteUserModal sendDeleteUser={sendDeleteUser} setModalDeleteUser={setModalDeleteUser} user={userToDelete} />}
        {adminModal && <AdminModal sendAdminModify={sendAdminModify} user={userAdmin} setAdminModal={setAdminModal} adminLevel={adminLevel} />}
        <h4> usuarios </h4>

        <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>Nombre</th>
                    <th scope='col'>Correo</th>
                    <th scope='col'>Telefono</th>
                    <th scope='col'>Administrador</th>
                </tr>
            </thead>
            <tbody>

                {users && users.map((user, index) => {
                    return (<tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.level === 999 ?
                            <button className='btn btn-warning bg-warning w-100' onClick={() => makeAdmin(user, 1)} > Admin </button>
                            :
                            <button className='btn btn-default border border-dark w-100' onClick={() => makeAdmin(user, 999)} > hacer admin </button>
                        }

                        </td>
                        <td>
                            <button onClick={() => deleteUser(user)} className='btn btn-danger'> <i className='bi bi-x' /> </button>
                        </td>
                    </tr>)
                })}
            </tbody>
        </table>
    </div >)
}
export default Usuarios