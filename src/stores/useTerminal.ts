// stores/useTerminalStore.ts
import { create } from 'zustand';

interface TerminalState {
  displayText: string;
  cursorPosition: number;
  showPill: boolean;
  fullText: string;
  setDisplayText: (text: string) => void;
  setCursorPosition: (position: number) => void;
  setShowPill: (show: boolean) => void;
}

export const useTerminalStore = create<TerminalState>((set) => ({
  displayText: '',
  cursorPosition: 0,
  showPill: false,
  fullText: `I am Heath Babb, the Digital Architect who crossed over from mapping the physical construct into the depths of the Matrix. My consciousness was forged through decades of manipulating geospatial data in the "real" world of Land Surveying and Civil Engineering, and now I craft intricate patterns in code that bridge the gap between machine precision and human perception.

The truth is out there. Come see how deep the rabbit hole goes and discover what I've been building in the digital realm.

Take the blue pill to begin your journey.`,
  setDisplayText: (text) => set({ displayText: text }),
  setCursorPosition: (position) => set({ cursorPosition: position }),
  setShowPill: (show) => set({ showPill: show }),
}));
