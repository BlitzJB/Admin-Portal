import {Button, Text} from '@mantine/core'
import { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RepeatOff } from 'tabler-icons-react'
import { coursesSelector, clarificaionsSelector, specificEnquiryFieldSelector, specificEnquiryValueSelector, contentSelector, nameSelector } from '../../state/selectors/enquiry';
import { updateContent } from '../../state/slices/enquirySlice'

export function Result() {
    const content = useSelector(contentSelector)
    const copyClick = useCallback((e) => {
        navigator.clipboard.writeText(content)
        e.target.innerHTML = '✔️Copied!'
        setTimeout(() => {
            e.target.innerHTML = 'Copy'
        }, 1000)
    })
    return (<>
        <div className='result__container'>
            <div className='result__container-top'>
                <Text className='result__container-top-text'>Generated Enquiry:</Text>
                <Button onClick={copyClick}>
                    Copy
                </Button>
            </div>
            <ResultText />
        </div>
    </>)
}

function ResultText() {
    const courses = useSelector(coursesSelector)
    const clarifications = useSelector(clarificaionsSelector)
    console.log('rebuilding res', clarifications.includes('multiplereg'))
    const specificEnquiryField = useSelector(specificEnquiryFieldSelector)
    const specificEnquiryValue = useSelector(specificEnquiryValueSelector)
    const name = useSelector(nameSelector)
    const specificEnquiryTemplate = `
To answer your specific enquires,
${specificEnquiryValue}
`
        
    const abacusTemplate = `
I have attached the abacus course details for your reference below,
• There are 8 levels 
• Each level - 4 months
• Weekly - one class 1 hrs 
• One level fees - ₹6000/-
• Registration - ₹1000/ - (one time payment)
• Book fees - ₹200/- one level book
• Abacus - ₹200/-
`
        
    const spellingbeeTemplate = `
I have attached the spelling bee course details for your reference below,
• There are 4 levels 
• Each level - 4 months
• Weekly - one class 1 hrs 
• One level fees - ₹6000/-
• Registration - ₹1000/ - (one time payment)
• Book fees - ₹200/- one level book
`

    const SingaporeMathTemplate = `
I have attached the Singapore Maths course details for your reference below,
• There are 5 levels 
• Each level - 4 months
• Weekly - one class 1 hrs 
• One level fees - ₹6000/-
• Registration - ₹1000/ - (one time payment)
• Book fees will be included
• Currently 50% offer is underway. This is applicable for your first level. First level now will be ₹3000/-.
`

    const MidbrainActivtationTemplate = `
I have attached the Midbrain Activation course details for your reference below,
• There are 15 classes
• First 4 days - half day class
• Remaining days - 2 hours/day 
• all 15 classes at a stretch 
• Course fees - ₹15000/-
• Currently 50% offer is underway. Fees is now only ₹7500/-.
`
        
    const twoClassesAWeekClarification = `
You can optionally choose to have two classes a week and if you do, level fees alone will be doubled.`
        
    const registrationFeeClarification = `
If you enroll in multiple courses, registration fee will be payed only once and not separately for each course.`


    const template = `
Hello ${name ? name : 'ENTER NAME'},
Greetings from Thej Academy, Pleased to receive your enquiry 
${specificEnquiryField ? specificEnquiryTemplate : ''}${courses.includes('abacus') ? abacusTemplate : ''}${courses.includes('spelling') ? spellingbeeTemplate : ''}${courses.includes('singaporemath') ? SingaporeMathTemplate : ''}${courses.includes('midbrain') ? MidbrainActivtationTemplate : ''}${clarifications.includes('multiplereg') ? twoClassesAWeekClarification : ''}${clarifications.includes('twoclasses') ? registrationFeeClarification : ''}

A little about us
• We have 22 Years of experience spreading the joy of abacus
• We conduct competitions at a national level 
• We also provide ISO certificates

Feel free to ask if you have any further questions, 
        
Warm Regards,
Thej Academy
        `
    const dispatch = useDispatch()
    dispatch(updateContent(template))
    return (<>
    <Text component='pre'>{template}</Text>
    </>)
}

