import { useState } from "react"
import Inmuebles from "./inmuebles"
import Usuarios from "./usuarios"

const Dashboard = () => {
    const [menu, setMenu] = useState(1)
    return (<div>
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
        <hr />
        <div className="p-2">
            {menu === 1 && <Inmuebles />}
            {menu === 2 && <Usuarios />}
        </div>
    </div>)
}

export default Dashboard