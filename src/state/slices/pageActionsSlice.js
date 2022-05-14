import { createSlice } from "@reduxjs/toolkit";


export const pageActionsSlice = createSlice({
    name: "pageActions",
    initialState: {
        navClosed: false,
    },
    reducers: {
        toggleNav: (state) => {
            state.navClosed = !state.navClosed;
        }
    }
})

export const { toggleNav } = pageActionsSlice.actions;