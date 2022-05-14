import { InputWrapper, Input, Checkbox } from "@mantine/core";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSpecificEnquiryField, updateSpecificEnquiryValueSelector } from "../../state/slices/enquirySlice";
import { specificEnquiryFieldSelector, specificEnquiryValueSelector } from "../../state/selectors/enquiry";

export function SpecificEnquiries() {
    const dispatch = useDispatch();
    const show = useSelector(specificEnquiryFieldSelector);
    const specificEnquiryValue = useSelector(specificEnquiryValueSelector);

    return (<>
    <div>
        <Checkbox label="Specific Enquiry" onChange={e => {
            dispatch(toggleSpecificEnquiryField())
        }} />
        <InputWrapper
        className="specific-enquiry-container"
        id="specific"
        required
        label="Specific Enquiry Answer"
        description="Answer specific questions they had here. If there are no spcific questions, toggle off specific enquiry"
        hidden={!show}
        >
        <Input className="specific-enquiry" value={specificEnquiryValue} onChange={e => {dispatch(updateSpecificEnquiryValueSelector(e.target.value))}} id="specific" placeholder="Answer to specific enquiries" />
        </InputWrapper>
    </div>
    </>)
}