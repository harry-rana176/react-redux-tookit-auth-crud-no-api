import { createSlice } from '@reduxjs/toolkit'
import { AddTask, deleteTask, editTask } from './HomeAction'

const taskList = localStorage.getItem('taskDetails') ? JSON.parse(localStorage.getItem('taskDetails')) : null

const initialState = {
    taskList,
}

const taskSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        // Add Task
        [AddTask.fulfilled]: (state, { payload }) => {
            state.taskList = payload // Task added successful
        },
        [AddTask.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        // Edit Task
        [editTask.fulfilled]: (state, { payload }) => {
            console.log('payload', payload);
            state.taskList = payload
        },
        // Delete task
        [deleteTask.fulfilled]: (state, { payload }) => {
            state.taskList = payload
        }
    }
})

// export const {taskSlice} = taskSlice.actions

export default taskSlice.reducer