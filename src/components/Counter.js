import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, decrementbyval, increment, incrementbyval, reset } from '../utils/counterSlice';

const Counter = () => {

    const [data, setData] = useState(0);

    const dispatch = useDispatch();
    const value = useSelector(store=> store.counter.count)

    const addValue = Number(data) || 0;

  return (
    <div className='flex flex-col items-center gap-5'>
        <p className='text-2xl capitalize font-bold'>Counter Application</p>
        <p className='text-xl'>Value : {value}</p>
        <div className='flex gap-4'>
            <button className='py-2 px-4 rounded-xl bg-green-200' onClick={()=> dispatch(increment())}>+</button>
            <button className='py-2 px-4 rounded-xl bg-red-500' onClick={()=> dispatch(decrement())}>-</button>
            <button className='py-2 px-4 rounded-xl bg-blue-400' onClick={()=>dispatch(reset())}>Reset</button>
        </div>
        <h1 className='text-2xl  font-semibold'>+ or - with Value</h1>
        <div className='flex flex-col gap-2'>
            <input type="text" className='h-8 rounded-lg px-4 ' value={data} onChange={(e)=>setData(e.target.value)}/>
            <div className='flex justify-around gap-2'>
                <button className='py-2 px-4 rounded-xl bg-green-200' onClick={()=>dispatch(incrementbyval(addValue))}>increase</button>
                <button className='py-2 px-4 rounded-xl bg-red-500'  onClick={()=>dispatch(decrementbyval(addValue))}>decrease</button>
            </div>
        </div>
    </div>
  )
}

export default Counter