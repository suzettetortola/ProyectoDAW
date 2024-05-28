import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: []
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload);
            fetch("localhost:3000/tasks/addTasks", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": "123456"
                },
                body: JSON.stringify(action.payload)
            }).catch((err) => {
                console.log(err);
            })
        },
        initAddTasks: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload);
        },
        removeTask: (state, action) => {
            state.value = state.value.filter((task) => task.id !== action.payload);
            fetch("localhost:3000/tasks/removeTasks/" + action.payload, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": "123456"
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }
})

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;