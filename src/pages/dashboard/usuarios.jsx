import useUsers from '../../hooks/useUsers'
const Usuarios = () => {
    const { users } = useUsers()
    return (<div>
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
                            <div className='bg-warning text-center p-2' > Admin </div> :
                            <button> hacer admin </button>} 
                        </td>
                        <td>
                            <button className='btn btn-success'> Guardar </button>
                        </td>
                    </tr>)
                })}
            </tbody>
        </table>
    </div >)
}
export default Usuarios

/* 


*/

{/* hola
       */}