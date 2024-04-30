import { configureStore } from "@reduxjs/toolkit";
import goalsSlice from "./Reducers/goalsSlice";
import tasksSlice from "./Reducers/tasksSlice";
import optionSlice from "./Reducers/optionSlice";

export default configureStore({
    refucer: {
        goals: goalReducer,
        tasks: taskReducer,
        option: optionReducer,
    }
})

