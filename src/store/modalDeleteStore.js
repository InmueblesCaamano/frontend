import { createWithEqualityFn } from 'zustand/traditional'

export var useModalDeleteStore = createWithEqualityFn((set) => ({
    modalDelete: false,
    setModalDelete: (newState) => set(() => ({ modalDelete: newState })),
    id: '',
    setId: (newId) => set(() => ({ id: newId }))
}))


