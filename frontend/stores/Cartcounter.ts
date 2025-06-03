import { create } from 'zustand';

// define the type
type CounterStore = {
    count : number;
    increment : () => void;
    decrement : () => void;
}

export const UseCounterStore = create<CounterStore>((set) => ({
    count : 1,
    increment : () => {
        set((state) => ({count: state.count + 1}));
    },
    decrement : () => {
        // if(count === 1){
        // }else (
        //     "the minimum quantity for this item is 1"
        // )
        set((state) => ({count: state.count - 1}));
    }
}));