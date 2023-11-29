import { createWithEqualityFn } from 'zustand/traditional'

export const useBulidingStore = createWithEqualityFn((set) => ({
    buildings: [],
    setBuildings: (newBuildings) => set(() => ({ buildings: newBuildings })),
    building: {},
    setBuilding: (newBuilding) => set(() => ({ building: newBuilding }))
}))