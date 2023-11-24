import { useEffect, useState } from "react"
import Inmuebles from "./inmuebles"
import Usuarios from "./usuarios"
import useProtect from "../../hooks/useProtect"
const Dashboard = () => {
    const { protect, admin } = useProtect()
    useEffect(() => {
        protect()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [menu, setMenu] = useState(1)

    return (<div>

        {admin ? <>

            <div className="bg-dark text-light pt-5 px-3 pb-2">
                <h3 className="pt-4 text-center">Administracion</h3>
            </div>
            <div className="pt-2">
                <button onClick={() => { setMenu(1) }} className="btn mb-2 btn-dark mx-2 btn-lg">
                    <i className="bi bi-house" /> Administrar Inmuebles
                </button>
                <button onClick={() => { setMenu(2) }} className="btn mb-2 btn-dark mx-2 btn-lg">
                    <i className="bi bi-people" /> Administrar  Usuarios
                </button>
            </div>
            
            <div className="">
                {menu === 1 && <Inmuebles />}
                {menu === 2 && <Usuarios />}
            </div>
        </> : <div className="text-center p-5">
            <h2>
                Acceso denegado !!!
            </h2>
        </div>}

    </div>)
}

export default Dashboard