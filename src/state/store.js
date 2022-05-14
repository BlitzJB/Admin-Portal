import { configureStore } from "@reduxjs/toolkit";

import { pageActionsSlice } from "./slices/pageActionsSlice";
import { enquirySlice } from "./slices/enquirySlice";
// import { navToggledSelector } from "./selectors/pageActions";

export const store = configureStore({
    reducer: {
        pageActions: pageActionsSlice.reducer,
        enquiry: enquirySlice.reducer,
    }
})

window.store = store // for debugging

// setInterval(() => {
//     console.log(navToggledSelector(store.getState()));
// }, 1000);