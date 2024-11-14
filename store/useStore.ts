// zustand
import { create } from 'zustand';

interface StoreState {
  selectedDate: string;
  setSelectedDate: (date: string) => void;

  guestCount: number;
  setGuestCount: (count: number) => void;

  selectedTableId: number | null;
  setSelectedTable: (tableId: number) => void;

  selectedTime: string;
  setSelectedTime: (time: string) => void;
}

const useStore = create<StoreState>((set) => ({
  selectedDate: "",
  setSelectedDate: (date) => set({ selectedDate: date }),

  guestCount: 1,
  setGuestCount: (count) => set({ guestCount: count }),

  selectedTableId: null,
  setSelectedTable: (tableId) => set({ selectedTableId: tableId }),

  selectedTime: "",
  setSelectedTime: (time) => set({ selectedTime: time }),
}));

export default useStore;
