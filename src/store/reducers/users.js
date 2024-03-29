import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    hasError: false,
    submittedData: {},
    isSubmitted: false
}

const usersReducer = createSlice({
    name: "users",
    initialState,
    reducers: {
        submissionInitialized: (state) => {
            state.loading = true;
        },
        submissionSuccessful: (state, action ) => {
            state.loading = false;
            state.submittedData = action.payload;
        },
        submissionFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload
            state.hasError = true
        }, 
        hideError: (state) => {
            state.hasError = false
        }
    }
});

export const { submissionFailed, submissionInitialized, submissionSuccessful, hideError } = usersReducer.actions;
export default usersReducer.reducer;