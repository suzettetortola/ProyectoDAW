import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        value: 'tasks'
        value: [
            {
                'name': '',
                'description': '',
                'dueDate': ''
            }
        ]
    },
    reducers: {
        addTask: (state, action) => {
            state.value.push(action.payload);
        }
    }
})

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;