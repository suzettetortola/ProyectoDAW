import { configureStore } from "@reduxjs/toolkit";
import goalsSlice from "./Reducers/goalsSlice";
import tasksSlice from "./Reducers/tasksSlice";
import optionsSlice from "./Reducers/optionsSlice";

export default configureStore({
    reducer: {
        goals: goalsSlice,
        tasks: tasksSlice,
        option: optionsSlice,
    }
})

