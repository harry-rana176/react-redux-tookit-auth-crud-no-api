import { createAsyncThunk } from '@reduxjs/toolkit'

export const AddTask = createAsyncThunk(
    'add', async (payload) => {
        try {
            let TaskList;
            let taskDetails = localStorage.getItem('taskDetails')
            if (taskDetails) {
                let newTask = JSON.parse(taskDetails);
                let newPayload = { ...payload, id: Number(newTask.length) + 1 }
                let finalTaskList = [...newTask, newPayload];
                TaskList = finalTaskList
                localStorage.setItem('taskDetails', JSON.stringify(finalTaskList))
            } else {
                let newPayload = { ...payload, id: 1 }
                TaskList = [newPayload]
                localStorage.setItem('taskDetails', JSON.stringify([newPayload]))
            }
            return TaskList
        }
        catch (err) {

        }
    }
)

export const deleteTask = createAsyncThunk(
    'delete', async (payload) => {
        try {
            let taskDetails = JSON.parse(localStorage.getItem('taskDetails'))
            let filterData = taskDetails.filter(_x => _x.id !== payload)
            localStorage.setItem('taskDetails', JSON.stringify(filterData))
            return filterData
        }
        catch (err) {

        }
    }
)

export const editTask = createAsyncThunk(
    'edit', async (payload) => {
        try {
            let taskDetails = JSON.parse(localStorage.getItem('taskDetails'))
            let filterData = taskDetails.filter(_x => _x.id !== payload.id)
            filterData.push(payload)
            localStorage.setItem('taskDetails', JSON.stringify(filterData))
            return filterData
        }
        catch (err) {

        }
    }
)