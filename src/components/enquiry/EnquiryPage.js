import { createStyles, InputWrapper } from "@mantine/core";
import { Courses, Clarifications } from "./Chips";
import { SpecificEnquiries } from "./SpecificEnq";
import { Result } from "./Result";
import { NameField } from "./Name";

export default function EnquiryPage() {
  return (
  <div className='enquiry__container'>
    <h1>Enquiries</h1>
    <NameField />
    <SpecificEnquiries />
    <InputWrapper
      id="specific"
      required
      label="Select Courses"
      description="Toggle courses for which to add the course details"
    >
      <Courses />
    </InputWrapper>
    <InputWrapper
      id="specific"
      required
      label="Select Courses"
      description="Toggle courses for which to add the course details"
    >
      <Clarifications />
    </InputWrapper>
    <Result/>
  </div>);
}