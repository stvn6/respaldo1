import { create } from 'zustand'

export const useStore = create((set) => ({
    user: null
    login: (LoginUser) => set({user: LoginUser}),
    logout: () => set({user: null}),
}))
