import { useModalDeleteStore } from "../../store/modalDeleteStore"
import useBuilding from '../../hooks/useBuilding'
const ModalDelete = () => {
    const { modalDelete, setModalDelete, id } = useModalDeleteStore()
    const { deleteBuilding } = useBuilding()

    if (modalDelete) {
        return (<div className="background-notification">
            <div className="body-admin-modal-delete bg-light text-dark">
                <div className="mb-4 text-center">
                    Usted esta intentando eliminar esta propiedad
                    <div>
                        {id}
                    </div>
                </div>
                <button onClick={() => { deleteBuilding(id); setModalDelete(false) }} className="btn btn-danger border border-dark mx-2" > Si deseo eliminar esta propiedad </button>
                <button onClick={() => setModalDelete(false)} className="btn btn-primary">  Cancelar </button>

            </div>
        </div>)
    }
}

export default ModalDelete