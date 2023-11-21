export default function Article() {
    return (
        <div className='col-12 col-sm-6 col-lg-4 mb-4'>
            <div className="bgArticle">
                <div className='articleImage'>
                    <div className="tittle">
                        San Juan Bautista
                    </div>
                </div>
                <div className="container">
                    <div className="row p-2">
                        <div className="col-4">
                            En Venta
                            <div>
                                <div className="price">$68.000 </div>
                            </div>
                        </div>
                        <div className="col-2 icon-article">
                            <i className="bi bi-door-closed  icono" />
                            <div>
                                3
                            </div>
                        </div>
                        <div className="col-2 icon-article">
                            <i className="bi bi-droplet-half icono" />
                            <div>
                                4
                            </div>
                        </div>
                        <div className="col-2 icon-article">
                            <i className="bi bi-car-front-fill icono" />
                            <div>
                                4
                            </div>
                        </div>
                        <div className="col-2 icon-article">
                            <i className="bi bi-arrows-fullscreen icono" /> 190mts
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
