import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
};
console.log('Initial userInfo:', initialState.userInfo);


const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers:{
        setCredentials: (state, action) =>{
            console.log('Setting credentials:', action.payload);
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
        },
        logout: (state, action) => {
            console.log('Logging out');
            state.userInfo = null;
            localStorage.removeItem('userInfo');
        },
    },
});

export const{setCredentials, logout} = authSlice.actions;
export default authSlice.reducer;