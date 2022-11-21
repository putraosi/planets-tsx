import {configureStore} from '@reduxjs/toolkit';
import sliceReduces from './slices';

const store = configureStore({
  reducer: {
    global: sliceReduces,
  },
});

export default store;
