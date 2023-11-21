import { createWithEqualityFn } from 'zustand/traditional'

export var useUserStore = createWithEqualityFn((set) => ({
    users: [],
    setUsers: (newUsers) => set(() => ({ users: newUsers }))
}))


