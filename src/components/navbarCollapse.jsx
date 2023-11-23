import useNavStore from "../store/navStore"
import LoginButton from "./navbar/loginButton"
export default function NavbarCollapse() {
    const { collapse } = useNavStore()
    return (
        <div className="bg-nav">
            <div className="NavbarCollapse">
                <div onClick={collapse} className="closeNavbar-collapse"> <i className="bi bi-x" /> </div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item collapseLI">
                        <a className="nav-link" aria-current="page" href="#">
                            <i className="bi bi-house" />   Casas
                        </a>
                    </li>
                    <li className="nav-item collapseLI">
                        <a className="nav-link" href="#">
                            <i className="bi bi-building" /> Apartamentos
                        </a>
                    </li>
                    <li className="nav-item collapseLI">
                        <a className="nav-link" href="#"><i className="bi bi-buildings" /> TomHouse</a>
                    </li>
                    <li className="nav-item collapseLI">
                        <a className="nav-link" href="#"><i className="bi bi-pin-map" />Terrenos</a>
                    </li>
                    <li className="nav-item collapseLI">
                        <a className="nav-link" href="#"><i className="bi bi-shop" />Locales Comerciales</a>
                    </li>
                    <li>
                        <LoginButton/>
                    </li>
                </ul>
            </div>
        </div>
    )
}