import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import QueueInput from './components/QueueInput';
import QueueList from './components/QueueList';
import { addCustomerToQueue, emptyQueue, removeItemFromQueue } from './features/queueSlice';
import { RootState } from './store/store';

const TIMEOUT = 1000;

function App() {
  const dispatch = useDispatch();
  const queues = useSelector((state: RootState) => state.queues);
  const [start, setStart] = useState<boolean>(false);
  const isQueueEmpty = useSelector((state: RootState) => emptyQueue(state.queues));

  useEffect(() => {
    let interval = -1;
    if (start) {
      interval = setInterval(() => {
        dispatch(removeItemFromQueue());
      }, TIMEOUT);
    }
    if (isQueueEmpty) {
      clearInterval(interval);
      setStart(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [start, isQueueEmpty]);

  return (
    <div className='flex center flex-col gap-sm h-full'>
      <QueueInput
        onSubmit={(x) => {
          dispatch(addCustomerToQueue(x));
          setStart(true);
        }}
      />
      <QueueList data={queues}></QueueList>
    </div>
  );
}

export default App;
