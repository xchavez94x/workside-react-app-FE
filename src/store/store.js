import { configureStore } from "@reduxjs/toolkit"

import usersReducer from "./reducers/users";
import jobsReducer from "./reducers/jobs";

const store = configureStore({
    reducer: {
        users: usersReducer,
        jobs: jobsReducer
    }
})

export default store;
