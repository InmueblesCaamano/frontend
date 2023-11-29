import municipios from "./ubicaciones"
const getMunicipio = (id) => {
    if(id){
        return municipios[id].Municipio
    }
    return "No encontrado"
}

export default getMunicipio