import { create } from "zustand";

interface NavState {
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
}

export const useNavStore = create<NavState>((set) => ({
    isMobileMenuOpen: false,
    toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
}));