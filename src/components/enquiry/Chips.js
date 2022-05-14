import { useState } from 'react';
import { Chips, Chip } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import { coursesSelector, clarificaionsSelector } from '../../state/selectors/enquiry';
import { toggleCourse, toggleClarification } from '../../state/slices/enquirySlice';

export function Courses() {
  // array of strings value when multiple is true
  const [value, setValue] = useState([]);
  const courses = useSelector(coursesSelector);
  const dispatch = useDispatch();
  
  return (
    <Chips value={courses} onChange={e => {console.log(e); dispatch(toggleCourse(e))}} multiple>
      <Chip value="abacus">Abacus</Chip>
      <Chip value="spelling">Spelling Bee</Chip>
      <Chip value="singaporemath">Singapore Maths</Chip>
      <Chip value="midbrain">Midbrain Activity</Chip>
    </Chips>
  );
}

export function Clarifications() {
  // array of strings value when multiple is true
  const [value, setValue] = useState([]);
  const dispatch = useDispatch();
  const clarifications = useSelector(clarificaionsSelector);
  
  return (
    <Chips value={clarifications} onChange={e => {console.log(e); dispatch(toggleClarification(e))}} multiple>
      <Chip value="multiplereg">Multiple Registration Fees</Chip>
      <Chip value="twoclasses">Two classes a Week</Chip>
    </Chips>
  );
}