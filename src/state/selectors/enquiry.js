export function coursesSelector(state) {
  return state.enquiry.selectedCourses;
}

export function clarificaionsSelector(state) {
  return state.enquiry.selectedClarifications;
}

export function specificEnquiryFieldSelector(state) {
  return state.enquiry.specificEnquiryField;
}

export function specificEnquiryValueSelector(state) {
    return state.enquiry.specificEnquiryValue;
}

export function contentSelector(state) {
    return state.enquiry.content;
}

export function nameSelector(state) {
    return state.enquiry.name;
}