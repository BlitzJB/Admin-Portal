import {createSlice} from '@reduxjs/toolkit';

export const enquirySlice = createSlice({
    name: 'enquiry',
    initialState: {
        selectedCourses: [],
        selectedClarifications: [],
        specificEnquiryField: false,
        specificEnquiryValue: '',
        content: '',
        name: '',
    },
    reducers: {
        toggleCourse: (state, action) => {
            state.selectedCourses = action.payload
        },
        toggleClarification: (state, action) => {
            state.selectedClarifications = action.payload
        },
        toggleSpecificEnquiryField: (state) => {
            state.specificEnquiryField = !state.specificEnquiryField;
        },
        updateSpecificEnquiryValueSelector: (state, action) => {
            state.specificEnquiryValue = action.payload;
        },
        updateContent: (state, action) => {
            state.content = action.payload;
        },
        updateName: (state, action) => {
            state.name = action.payload;
        }
    }
})

export const {
    toggleCourse, 
    toggleClarification, 
    toggleSpecificEnquiryField, 
    updateSpecificEnquiryValueSelector,
    updateContent,
    updateName} = enquirySlice.actions;