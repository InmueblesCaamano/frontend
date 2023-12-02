import Article from "./article"
import { useBulidingStore } from "../store/buildingStore"
import { useState, useEffect } from "react"

// eslint-disable-next-line react/prop-types
const HomeBody = ({ tipo }) => {

    const { buildings } = useBulidingStore()

    const [actBuildings, setActBuildings] = useState(null)

    useEffect(() => {
        if (tipo) {
            setActBuildings(buildings.filter(building => building.tipo === tipo))
        } else {
            setActBuildings(buildings)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [buildings, tipo])

    const list = {
        casa:'Casas',
        apartamento:'Apartamentos',
        tomhouse:'TomHouse',
        terreno:'Terrenos',
        local:'Locales Comerciales',
    }

    return (<>
        <div className='container-fluid px-5 mt-4 mb-5'>
            <div className='row'>
                <div className="col-12 pt-2">
                    <h4>
                        {list[tipo] && <> {list[tipo]} en Margarita</>} 
                    </h4>
                </div>
                {actBuildings && actBuildings.length > 0 && actBuildings.map((item, index) => {
                    return (<div key={index} className='col-10 offset-1 offset-sm-0 col-md-6 col-lg-3 mb-4 '>
                        <Article item={item} />
                    </div>)
                })}

            </div>
        </div>
    </>)
}

export default HomeBody