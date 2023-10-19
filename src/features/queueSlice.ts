import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface Items<T> {
  items: T[];
}

export interface Customer extends Items<number> {
  id: string;
}

export interface QueueState {
  customers: Customer[];
}

const initialState: QueueState[] = [
  { customers: [{ id: '1', items: [1, 2, 3, 4] }, { id: '1', items: [1, 2, 3, 4] }] },
  { customers: [{ id: '1', items: [1, 2, 3] }] },
  { customers: [{ id: '1', items: [1, 2, 3, 4] }, { id: '1', items: [1, 2, 3, 4, 5, 6] }, { id: '1', items: [1, 2, 3, 4] }, { id: '1', items: [1, 2, 3, 4, 5, 6, 7] }] },
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
      state[index] = { customers: [...curr.customers, { id: '1', items: new Array(items).fill(0)}]}
      // find queue with the least number of items
      // add
      // start removing n items every second
    },
    // removeCustomerFromQueue: (state, action) => {
    //   const { payload } = action.payload;
    //   // 
    // },
    // removeItemFromCustomer: (state) => {

    // },

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
      sum += customer.items.length
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

// function removeLastItemFromList<T>(items: T[]) {
//   return items.slice(0, items.length - 1);
// }

// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

// Action creators are generated for each case reducer function
export const { addCustomerToQueue } = queueSlice.actions

export default queueSlice.reducer