import { useRef } from 'react';
import styles from '../styles/queue.module.css';

interface props {
  onSubmit: (x: number) => void;
}
const QueueInput = ({ onSubmit }: props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className='flex'>
      <input
        name='number'
        ref={ref}
        placeholder='Add to queue'
        type='number'
        min={1}
        max={10}
        className={styles.queue_input}
      ></input>
      <button
        onClick={() => {
          const current = ref.current?.value;
          if (current) {
            onSubmit(+current);
          } else {
            console.log('input not valid');
          }
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default QueueInput;
