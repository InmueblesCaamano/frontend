import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Inmuebles from "./pages/inmuebles"
import Login from "./pages/login/login"
import Registro from "./pages/registro/registro"
import Dashboard from "./pages/dashboard/dashboard"
import Agregar from "./pages/agregar/aregar"
const Router = () => {
    return (<>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/inmuebles" element={<Inmuebles />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/agregar" element={<Agregar />} />
            <Route path="/*" element={<div className="404">404 Not found</div>} />
        </Routes>
    </>)
}

export default Router