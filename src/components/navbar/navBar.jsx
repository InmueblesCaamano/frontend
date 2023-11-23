import NavbarCollapse from "../navbarCollapse"
import navScroll from "../../hooks/navScroll"
import useNavStore from "../../store/navStore"
import { Link } from "react-router-dom"
import LogoRounded from "../logoRounded"
import LoginButton from "./loginButton"
export default function NavBar() {

    const { isCollapsed, expand } = useNavStore()
    const { scroll } = navScroll()

    return (<div >
        {!isCollapsed && <NavbarCollapse />}
        <nav className={`navbar navbar-expand-lg navbar-dark navPosition  ${scroll && 'bg-dark'}`} >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <LogoRounded width={"50"} height={"50"} />
                </Link>
                <button onClick={expand} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">

                            <Link to='/filter' className="nav-link" aria-current="page">
                                <i className="bi bi-house" />   Casas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="bi bi-building" /> Apartamentos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="bi bi-buildings" /> TomHouse</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="bi bi-pin-map" />Terrenos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="bi bi-shop" />Locales Comerciales</a>
                        </li>
                    </ul>
                    <LoginButton />
                </div>
            </div>
        </nav>
    </div>)
}