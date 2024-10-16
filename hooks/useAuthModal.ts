import { create } from "zustand";

interface AuthModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose:() => void;
}

export const useAuthModal = create<AuthModalProps>((set) => ({
    isOpen: false,
    onOpen:() => set({isOpen: true}),
    onClose:() => set({isOpen: false}),
}))