
import {create} from "zustand";

//custom hook you can use in a react component
export const useCounterStore = create ((set) => ({
    count: 0,
    Increment : ()=> {
        set((state) => ({count: state.count+1}) );
    } ,
    IncrementAsync : async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
         set((state) => ({count: state.count+1}) );

    },
    Decrement :  ()=> {
        set((state) => ({count: state.count-1}) );
    },
    DecrementAsync : async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
         set((state) => ({count: state.count-1}) );
    }

}));

