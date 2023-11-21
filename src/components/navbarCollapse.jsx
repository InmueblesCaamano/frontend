import useStore from "../store/navStore"
export default function NavbarCollapse() {
    const { collapse } = useStore()
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
                        <button className="btn btn-warning mt-4" type="submit">
                            <i className="bi arrow-right-circle-fill"></i> Iniciar Sesion
                        </button>
                    </li>
                </ul>
            </div>

        </div>
    )
}