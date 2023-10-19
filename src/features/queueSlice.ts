import { createSlice } from '@reduxjs/toolkit';



export interface Customer {
  id: string;
  items: number;
}

export interface QueueState {
  customers: Customer[];
}

const initialState: QueueState[] = [
  { customers: [{ id: '1', items: 1 }, { id: '1', items: 2 }] },
  { customers: [{ id: '1', items: 3 }] },
  { customers: [{ id: '1', items: 2 }, { id: '1', items: 2 }, { id: '1', items: 2 }, { id: '1', items: 1 }] },
  { customers: [] },
  { customers: [] },
]
export const queueSlice = createSlice({
  name: 'queues',
  initialState,
  reducers: {
    addCustomerToQueue: (state, action) => {
      const items: number = action.payload;

      const queues = [...state];
      const index = findSmallestQueue(queues);
      const curr = state[index];
      state[index] = { customers: [...curr.customers, { id: '1', items: items }] }
    },
    removeItemFromQueue: (state) => {

      state = state.map(q => {
        q.customers = q.customers.map((c, i) => {
          if (i !== 0) return c;
          if (c.items > 0) {
            c.items--;
          }
          return c
        }).filter(c => c.items > 0);
        return q
      })
    },
  },
})

function findSmallestQueue(queues: QueueState[]): number {
  let index = 0;
  let min = 0;

  for (let i = 0; i < queues.length; i++) {
    const q = queues[i];
    let sum = 0;

    if (q.customers.length === 0) {
      index = i;
      break;
    }
    q.customers.forEach(customer => {
      sum += customer.items
    });
    if (sum === 0) {
      index = i;
      break;
    }
    if (i === 0) {
      min = sum;
    } else {
      if (sum < min) {
        min = sum;
        index = i;
      }
    }
  }

  return index;
}
export const emptyQueue = (state: QueueState[]) => state.every(queue => queue.customers.length === 0);
export const { addCustomerToQueue, removeItemFromQueue } = queueSlice.actions

export default queueSlice.reducer