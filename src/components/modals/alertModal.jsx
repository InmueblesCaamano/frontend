
import useAlertStore from "../../store/alertStore"
const AlertModal = () => {

    const { alertModal, setAlertModal } = useAlertStore()
    if (alertModal) {
        return (<>
            <div className="background-notification">
                <div className="body-admin-modal">
                    <p>
                        {alertModal}
                    </p>
                    <div className="text-center">
                        <button onClick={() => setAlertModal('')} className="btn btn-primary mx-2"> OK </button>
                    </div>
                </div>
            </div>
        </>)
    }
}
export default AlertModal