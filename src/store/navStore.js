import { createWithEqualityFn } from 'zustand/traditional'

const useNavStore = createWithEqualityFn((set) => ({
    isCollapsed: true,
    collapse: () => set((state) => ({
        isCollapsed: !state.isCollapsed
    }))
}))

export default useNavStore
