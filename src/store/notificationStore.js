import { createWithEqualityFn } from 'zustand/traditional'

const useNotificationStore = createWithEqualityFn((set) => ({
    notification: '', //warning{text:'',icon:'info'}
    setNotification: (status)   => set(() => ({ notification: status }))
}))

export default useNotificationStore