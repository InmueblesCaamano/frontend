import { createWithEqualityFn } from 'zustand/traditional'

const useCarouselStore = createWithEqualityFn((set) => ({
    pictures: [],
    setPictures: (newState) => set(() => ({
        pictures: newState
    })),
    actualPicture: 0,
    setActualPicture: (newState) => set(() => ({
        actualPicture: newState
    })),
    increment: () => set((state) => {
        if (state.actualPicture === state.pictures.length - 1) {
            return { actualPicture: 0 }
        } else {
            return { actualPicture: state.actualPicture + 1 }
        }
    }),
    decrement: () => set((state) => {
        if (state.actualPicture <= 0 ) {
            return { actualPicture: state.pictures.length -1 };
        } else {
            return { actualPicture: state.actualPicture - 1 }
        }
    }),
    visible: false,
    setVisible: (newState) => set(() => ({
        visible: newState
    }))
}))

export default useCarouselStore