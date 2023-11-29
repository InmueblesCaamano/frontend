export default function Footer() {
    return (
        <div>
            <div className="bg-dark">
                <div className="container py-5 text-light">
                    <div className="row">
                        <div className="col-12 pb-4">
                            <div className="text-center pb-4">
                                <h2>Encuentranos con google map</h2>
                            </div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1164.4873670455368!2d-63.81940239165661!3d10.97446548985621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c318ee24b02281b%3A0x15105594fde99e6f!2sCentro%20Comercial%20Bayside!5e0!3m2!1ses!2sve!4v1701220306257!5m2!1ses!2sve"
                                style={{ width: "100%" }}
                                height="450"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12 col-md-6 text-md-center text-lg-end text-center">
                            <h2>
                                Comunicate con
                            </h2>
                            <h4>Nosotros</h4>
                        </div>
                        <div className="col-12 col-md-6 text-center text-md-start">
                            <a className="numberContact w-100" href="tel:+584248261631">
                                <i> <i className="bi bi-telephone" /> +58 424-8261631</i>
                            </a>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 text-center">
                            <i className="bi bi-pin-map px-2" />
                            Nueva Esparta, Margarita, Centro comercial Bayside Local 1-03
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center p-4">
                Todos los derechos reservados © Desarrollado por <a target="blanc" href="https://somosdev.pw"> somosdev.pw </a>  2023
            </div>
        </div>)
}