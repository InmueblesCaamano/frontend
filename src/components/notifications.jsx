import useNotificationStore from "../store/notificationStore"
const Notifications = () => {
    const { notification, setNotification } = useNotificationStore()
    return (<>
        {notification &&
            <div className="background-notification">
                <div className="body-notification">
                    <div>
                        {notification}
                    </div>
                    <button className="mt-4 notification-btn-close" onClick={() => setNotification("")}> <i className="bi bi-x "  /> Cerrar </button>
                </div>
            </div>
        }
    </>
    )
}
export default Notifications