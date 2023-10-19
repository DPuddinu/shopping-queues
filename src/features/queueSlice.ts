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
  { customers: [{ id: '1', items: [1, 2, 3, 4] }, { id: '1', items: [1, 2, 3, 4] }]},
  { customers: [{ id: '1', items: [1, 2, 3, 4] }] },
  { customers: [{ id: '1', items: [1, 2, 3, 4] }, { id: '1', items: [1, 2, 3, 4, 5, 6] }, { id: '1', items: [1, 2, 3, 4] }, { id: '1', items: [1, 2, 3, 4, 5, 6, 7] }] }
]

export const queueSlice = createSlice({
  name: 'queues',
  initialState,
  reducers: {
    addCustomerToQueue: (state, action) => {
      const customer: Customer = action.payload;
      const { payload } = action.payload;
      console.log(customer);
      console.log(payload);

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

// function findSmallestQueue(arr: QueueState): number {
//   const index = 0;

//   return index;
// }

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