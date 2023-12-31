import { createWithEqualityFn } from 'zustand/traditional'

const useSessionStore = createWithEqualityFn((set) => ({
    session: false,
    setSession: (newSession) => set(() => {
        if (newSession === false || newSession === true) {
            return ({ session: newSession })
        } else {
            throw new Error('session store is not boolean')
        }
    }),
    user: {},
    setUser: (newUser) => set(() => ({ user: newUser })),

}))

export default useSessionStore