import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    jobsList: {

    }
}

const jobsReducer = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        
    }
})

export default jobsReducer;