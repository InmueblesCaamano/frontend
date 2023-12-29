import { Link } from "react-router-dom"
import useNavStore from "../store/navStore"
import LoginButton from "./navbar/loginButton"
import useSessionStore from "../store/sesionStore"
export default function NavbarCollapse() {
    const { user } = useSessionStore()
    const { collapse } = useNavStore()
    return (
        <div className="bg-nav">
            <div className="NavbarCollapse">
                
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li onClick={collapse} className="nav-item collapseLI">
                        <Link to='/propiedades/casa' className="nav-link" aria-current="page">
                            <i className="bi bi-house" />   Casas
                        </Link>
                    </li>
                    <li onClick={collapse} className="nav-item collapseLI">
                        <Link to='/propiedades/apartamento' className="nav-link" aria-current="page">
                            <i className="bi bi-building" /> Apartamentos
                        </Link>
                    </li>
                    <li onClick={collapse} className="nav-item collapseLI">
                        <Link to='/propiedades/tomhouse' className="nav-link" aria-current="page">
                            <i className="bi bi-buildings" /> TomHouse
                        </Link>
                    </li>
                    <li onClick={collapse} className="nav-item collapseLI">
                        <Link to='/propiedades/terreno' className="nav-link" aria-current="page">
                            <i className="bi bi-pin-map" />Terrenos
                        </Link>
                    </li>
                    <li onClick={collapse} className="nav-item collapseLI">
                        <Link to='/propiedades/local' className="nav-link" aria-current="page">
                            <i className="bi bi-shop" /> Locales
                        </Link>
                    </li>
                    <li>
                        {user.level === 999 &&
                            <Link to='/dashboard'>
                                <button onClick={collapse} className="btn btn-danger my-3" > <i className="bi-people"></i> Administracion </button>
                            </Link>
                        }
                    </li>
                    <li>
                        <LoginButton />
                    </li>
                </ul>
            </div>
        </div>
    )
}