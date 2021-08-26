import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
    name:'Next',
    initialState:{
        users:[]
    },
    reducers:{
        getData: (state, action) => {
            state.users = action.payload
        }
    }
})

export const { getData } = userReducer.actions

export default userReducer.reducer