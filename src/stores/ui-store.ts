import { create } from 'zustand';

interface UIStore {
  showCommands: boolean;
  toggleCommands: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  showCommands: false,
  toggleCommands: () => set((state) => ({ showCommands: !state.showCommands })),
}));
