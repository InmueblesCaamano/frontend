import { createWithEqualityFn } from 'zustand/traditional'

const useRegisterStore = createWithEqualityFn((set) => ({
    formData: {
        email: '', phone: '', password: '', confirmPass: '', name: ''
    },
    setFormData: ({ name, value }) => {
        set((data) => ({
            formData: { ...data.formData, [name]: value }
        }))
    }
}))



export default useRegisterStore