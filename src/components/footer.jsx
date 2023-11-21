export default function Footer() {
    return (
        <div>
            <div className="bg-dark">
                <div className="container py-5 text-light">
                    <div className="row">
                        <div className="col-4">
                            <img src='./img/logo2.svg' width={100} height={100} alt="Logo Inmuebles Caamano" />
                            Caamaño Inmuebles
                        </div>
                        <div className="col-4"></div>
                        <div className="col-4"></div>
                    </div>
                    <div className="row mt-4">
                        <hr />
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6 text-end">
                            <h2>
                                Comunicate con
                            </h2>
                            <h4>Nosotros</h4>
                        </div>
                        <div className="col-12 col-md-6 text-start">
                            <a  className="numberContact" href="tel:+584248261631">
                                <i> <i className="bi bi-telephone" /> +58 424-8261631</i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center p-4">
                Todos los derechos reservados © Desarrollado por <a target="blanc" href="https://somosdev.pw"> somosdev.pw </a>  2023
            </div>
        </div>)
}