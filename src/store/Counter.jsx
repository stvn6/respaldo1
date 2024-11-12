import { create } from 'zustand'

const initialState = {
    counter: 0
}
const useCounter = create(set =>({
    ...initialState,
    counter : 0,
    increment: () => set(state => ({counter: state.counter + 1})),
    decrement: () => set(state => ({counter: state.counter - 1})),
    reset: () => set(initialState),
}))

const Counter =() =>{
    const {counter, increment, decrement, reset} = useCounter(state => state)
    return (
        <>
            <h1>Counter: {counter}</h1>
            <div>
                <button className="m-2" onClick={increment}>Inc</button>
                <button className="m-2" onClick={decrement}>Dec</button>
                <button className="m-2" onClick={reset}>Res</button>
            </div>
        </>
    )
}
export default Counter;