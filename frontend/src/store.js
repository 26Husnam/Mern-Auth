import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'
import {apiSlice} from './slices/apiSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});

export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import { apiSlice } from './slices/apiSlice';
// import cartSliceReducer from './slices/cartSlice';
// import authReducer from './slices/authSlice'; // add this line

// const store = configureStore({
//   reducer: {
//     [apiSlice.reducerPath]: apiSlice.reducer,
//     cart: cartSliceReducer,
//     auth: authReducer, // add this line
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
//   devTools: true,
// });

// export default store;