import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import QueueInput from './components/QueueInput';
import QueueList from './components/QueueList';
import { addCustomerToQueue } from './features/queueSlice';
import { RootState } from './store/store';

function App() {
  const dispatch = useDispatch();
  const queues = useSelector((state: RootState) => state.queues);

  return (
    <div className='flex center flex-col gap-sm'>
      <QueueInput onSubmit={(num: number) => dispatch(addCustomerToQueue(num))}></QueueInput>
      <QueueList data={queues}></QueueList>
    </div>
  )
}

export default App
