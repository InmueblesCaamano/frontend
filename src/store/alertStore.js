import { createWithEqualityFn } from 'zustand/traditional'

const useAlertStore = createWithEqualityFn((set) => ({
    alertModal: '',
    setAlertModal: (newState) => set(() => ({
        alertModal: newState
    }))
}))

export default useAlertStore