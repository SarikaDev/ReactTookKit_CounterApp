import React,{useState} from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { CounterSelector } from '../Features/Counter/CounterSlice';
import { increment,decrement,reset,incrementByAmount} from '../Features/Counter/CounterSlice';
const CounterC = () => {
    const count = useSelector(CounterSelector);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState('');

    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

            <input
                type="text"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />

            <div>
                <button onClick={() => dispatch( incrementByAmount(addValue))}>Add Amount</button>
                <button onClick={resetAll}>Reset</button>
            </div>
        </section>
    )
}
export default CounterC