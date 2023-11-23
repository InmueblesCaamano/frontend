import { createWithEqualityFn } from 'zustand/traditional'

const useNavStore = createWithEqualityFn((set) => ({
    isCollapsed: true,
    collapse: () => set(() => ({
        isCollapsed: true
    })),
    expand: () => set(() => ({
        isCollapsed: false
    }))
}))

export default useNavStore
