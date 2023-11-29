
import HomeBody from "../../components/homeBody"
import { useParams } from "react-router-dom"


const Propiedades = () => {
    const {tipo} = useParams()
    return (<>
        <div className="bg-dark p-4">.</div>
        <HomeBody tipo={tipo} />
    </>)
}
export default Propiedades