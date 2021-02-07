import { configureStore } from '@reduxjs/toolkit';
import elementSize, { State as ElementSizeState } from './elementSize';

const store = configureStore({
  reducer: {
    elementSize: elementSize.reducer,
  },
});

export interface State {
  elementSize: ElementSizeState;
}

export default store;
