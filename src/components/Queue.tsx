import { QueueState } from '../features/queueSlice';
import customerStyles from '../styles/customer.module.css';
import styles from '../styles/queue.module.css';

interface props {
  data: QueueState;
  number: number;
}
const Queue = ({ data, number }: props) => {
  return (
    <div className={styles.queue}>
      <div className={styles.check}>Cassa {number}</div>
      {data && (
        <div className='flex center gap-sm flex-col p-2'>
          {data.customers.map((customer) => (
            <div className={customerStyles.customer} key={Math.random() * 1000}>
              {customer.items}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Queue;
