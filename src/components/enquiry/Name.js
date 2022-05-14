import { InputWrapper, Input } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import { updateName } from "../../state/slices/enquirySlice";
import { nameSelector } from "../../state/selectors/enquiry";

export function NameField() {
    const dispatch = useDispatch();
    const name = useSelector(nameSelector);

    return (<>
        <InputWrapper
            className="specific-enquiry-container"
            id="name"
            required
            label="Name"
            description="Fill name of the enquirer if provided or fill in something generic like 'Parent'"
            >
        <Input className="specific-enquiry" value={name} onChange={e => {dispatch(updateName(e.target.value))}} id="name" placeholder="Name of enquirer" />
        </InputWrapper>
    </>)
}