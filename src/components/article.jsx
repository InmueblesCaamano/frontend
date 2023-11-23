import '../css/article.css'
export default function Article() {
    return (
        <div className='col-12 col-md-6 col-lg-4 mb-4 article-container'>
            <div className="bgArticle pb-3">
                <div className='card-article'>
                    <div className='articleImage'>
                        <img src="./img/bg.webp" className='img-article' alt="" />
                        <div className='fondo' />
                        <div className="tittle-article">
                            San Juan Bautista
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row pt-2">
                        <div className="col-4">
                            <div className="bg-dark-transparent text-light text-mini text-center rounded p-1">
                                En Venta
                            </div>
                            <div className='text-center'>
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
                            <i className="bi bi-arrows-fullscreen icono" />
                            <div className="text-center">
                                <div className='text-mini flex-center'>
                                    190mts
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
