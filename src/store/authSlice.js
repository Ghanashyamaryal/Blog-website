
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userdata: null
}

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login:(state, action) =>{
            state.status = true;
            state.userdata = action.payload
        },

        logout: (state, action)=>{
            state.status = false;
            state.userdata = null
        }
    }

})
export const {login,logout} = AuthSlice.actions;
export default AuthSlice.reducer;