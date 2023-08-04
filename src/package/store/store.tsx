import {PayloadAction, configureStore, createSlice} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

// Define the state type
interface State {
  counter: Record<number, number>;
}

// Initial state
const initialState: State = {
  counter: {},
};

// Create the counter slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCounter: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const currentState = state.counter[id];
      state.counter[id] = currentState ? currentState + 1 : 1;
    },
  },
});

// Extract the reducer and actions from the slice
export const {incrementCounter} = counterSlice.actions;
const counterReducer = counterSlice.reducer;

// Create the root reducer
const rootReducer = combineReducers({
  counter: counterReducer,
});

// Persist config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['counter'],
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create the persistor
export const persistor = persistStore(store);

// Define the root state type
export type RootState = ReturnType<typeof rootReducer>;
