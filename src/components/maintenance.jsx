import maintenance from "../services/maintenance"
const Maintenance = () => {
    if (maintenance) {
        return (<div className="maintenance">
            <h1>
                Disculpe, Nos encontramos en mantenimiento!!!
            </h1>
            <p>Por favor, contactar al proveedor de servicio</p>
        </div>)
    }
}
export default Maintenance