import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: []
}

export const goalsSlice = createSlice({
    name: 'goals',
    initialState,
    reducers: {
        addGoal: (state, action) => {
            state.value.push(action.payload);
            fetch("localhost:3000/goals/addGoals", {
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
        initAddGoals: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload);
        },
        removeGoal: (state, action) => {
            state.value = state.value.filter((task) => task.id !== action.payload);
            fetch("localhost:3000/goals/removeGoals/" + action.payload, {
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

export const { addGoal } = goalsSlice.actions;
export default goalsSlice.reducer;