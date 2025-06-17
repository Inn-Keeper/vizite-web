// import { configureStore } from '@reduxjs/toolkit';
// import { useDispatch, useSelector } from 'react-redux';
// import themeReducer, { ThemeState } from './slices/themeSlice';
// // redux-persist imports
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { combineReducers } from 'redux';

// // Define the initial state type
// export interface RootState {
//   theme: ThemeState;
// }

// // Combine reducers
// const rootReducer = combineReducers({
//   theme: themeReducer,
// });

// // Persist config for user slice
// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Create the store
// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false, // required for redux-persist
//     }),
// });

// export const persistor = persistStore(store);

// // Export typed hooks
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector = <T>(selector: (state: RootState) => T) => useSelector<RootState, T>(selector); 