import { useEffect, useState } from "react"
import { useUserStore } from '../store/userStore'
import { ApiUrl } from "../services/apiurl"
import request from "../services/request"
import useLoadingStore from "../store/loadingStore"
import useNotificationStore from "../store/notificationStore"
const useUsers = () => {
    const { setNotification } = useNotificationStore()
    const { setLoading } = useLoadingStore()
    const { users, setUsers } = useUserStore()
    const [adminModal, setAdminModal] = useState(false)
    const [userAdmin, setUserAdmin] = useState(0)
    const [adminLevel, setAdminLevel] = useState(1)
    const [userToDelete, setUserToDelete] = useState({})
    const [modalDeleteUser, setModalDeleteUser] = useState(false)


    useEffect(() => {
        getUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getUsers = async () => {
        setLoading(true)
        const res = await request.get(ApiUrl + '/users')
        if (!res.status) {
            setLoading(false)
            setNotification(res.message)
            return
        }
        setUsers(res.body)
        setLoading(false)
    }

    const makeAdmin = async (user, _adminLevel) => {
        setAdminLevel(_adminLevel)
        setAdminModal(true)
        setUserAdmin(user)
    }

    const sendAdminModify = async (_adminLevel) => {

        setLoading(true)
        const token = (JSON.parse(localStorage.getItem('user'))).token
        const id = userAdmin._id
        if (!token) return alert('Used no se encuentra autorizado para realizar esta accion, por favor contacte a su proveedor de servicio.')
        if (!id) return alert('Ocurrio un error, por favor intente loguearse nuevamente.')
        const url = ApiUrl + '/users/' + id + '/' + token + '/' + _adminLevel
        const res = await request.put(url)
        if (!res.status) {
            setLoading(false)
            setNotification(res.message)
            return
        }
        getUsers()
        setAdminModal(false)
        setLoading(false)
    }

    const deleteUser = async (user) => {
        setLoading(true)
        setUserToDelete(user)
        setModalDeleteUser(true)
        setLoading(false)
    }

    const sendDeleteUser = async (e, id) => {
        setLoading(true)
        e.preventDefault()
        const pass = e.target.password.value
        const url = ApiUrl + '/users/' + id + '/' + pass
        const res = await request.delete(url)
        if (!res.status) {
            setLoading(false)
            setNotification(res.message)
            return
        }
        getUsers()
        setModalDeleteUser(false)
        setUserToDelete({})
        setLoading(false)
    }

    return {
        users, setUsers,
        userToDelete,
        modalDeleteUser, setModalDeleteUser,
        deleteUser, sendDeleteUser,

        adminModal, setAdminModal, makeAdmin,
        userAdmin, sendAdminModify, adminLevel
    }
}

export default useUsers