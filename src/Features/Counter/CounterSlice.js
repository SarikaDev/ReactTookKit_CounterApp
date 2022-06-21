import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: 0
}

const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 },
        reset: (state) => { state.value = 0 },
        incrementByAmount: {
            reducer: (state, action) => {
                state.value += action.payload
            },
            prepare:(amount)=>{
                return {payload:amount}
            }
        }
    }
})

export const CounterSelector = (state) => state.counter.value;
export const { increment, decrement, reset, incrementByAmount } = CounterSlice.actions;
export default CounterSlice.reducer;