import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface State {
  value: number;
}
const initialState: State = {
  value: 2,
};

const elementSize = createSlice({
  name: 'elementSize',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { update } = elementSize.actions;

export default elementSize;
