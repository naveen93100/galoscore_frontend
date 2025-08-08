import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: JSON.parse(sessionStorage.getItem('userData')) || null,
    token: sessionStorage.getItem('token') || null,
    loading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        setLoginUserData: (state, action) => {
            state.user = action.payload;
        },

        setToken: (state, action) => {
            state.token = action.payload;
        },

        setLogoutUser: (state) => {
            state.user = null;
            state.token = null;
        },


        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { setLoginUserData, setLogoutUser, setLoading ,setToken} = authSlice.actions;

export default authSlice.reducer;
