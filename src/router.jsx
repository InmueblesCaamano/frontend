import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Login from "./pages/login/login"
import Registro from "./pages/registro/registro"
import Dashboard from "./pages/dashboard/dashboard"
import Agregar from "./pages/agregar/aregar"
import AddImages from "./pages/agregar/addImages"
import Deatallado from "./pages/detallado/detallado"
import Propiedades from "./pages/propiedades/propiedades"
import Editar from "./pages/editar/editar"
const Router = () => {
    return (<>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/agregar" element={<Agregar />} />
            <Route path="/addimages/:id/:precio/:municipio/:parroquia" element={<AddImages />} />
            <Route path="/detallado/:id" element={<Deatallado />} />
            <Route path="/:id" element={<Deatallado />} />
            <Route path="/propiedades/:tipo" element={<Propiedades />} />
            <Route path="/editar/:id" element={<Editar />} />
            <Route path="/*" element={<div className="404">404 Not found</div>} />
        </Routes>
    </>)
}

export default Router