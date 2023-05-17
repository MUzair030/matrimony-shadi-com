import React from 'react'
import "./MyMatchesFilter.css"
import {
    UncontrolledAccordion,
    AccordionItem,
    AccordionHeader,
    AccordionBody
} from "reactstrap"
import { FormGroup, Label, Input } from 'reactstrap';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const MyMatchesFilter = () => {
    return (
        <div className="my_matches_filter_wrapper py-0 mx-1">
            <div className="my_matches_filter_box">
                <UncontrolledAccordion
                    defaultOpen={[
                        '1',
                        '2',
                        '3',
                        '4',
                        '5'
                    ]}
                    stayOpen
                >
                    <AccordionItem className='py-1 px-3 accordion_title'>
                        <FilterAltOutlinedIcon className="filter_icon" />
                        <p className='mb-0'>Filter Matches</p>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="1">
                            Near Me
                        </AccordionHeader>
                        <AccordionBody accordionId="1">
                            <FormGroup className="my_matches_radio_box">
                                <Label check style={{ display: 'flex' }}>
                                    <Input type="radio" name="radio_1" />  Within 50 kms(5)
                                </Label>
                                <Label>
                                    <Input type="radio" name="radio_1" />  Within 100 kms(55)
                                </Label>
                                <Label>
                                    <Input type="radio" name="radio_1" />  Within 250 kms(97)
                                </Label>
                            </FormGroup>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="2">
                            Photo Settings
                        </AccordionHeader>
                        <AccordionBody accordionId="2">
                            <FormGroup className="my_matches_radio_box">
                                <Label check style={{ display: 'flex' }}>
                                    <Input type="radio" name="radio_2" />  All
                                </Label>
                                <Label>
                                    <Input type="radio" name="radio_2" />  Visible to all(3)
                                </Label>
                                <Label>
                                    <Input type="radio" name="radio_2" />  Protected Phot...(2)
                                </Label>
                            </FormGroup>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="3">
                            Recently Joined
                        </AccordionHeader>
                        <AccordionBody accordionId="3">
                            <FormGroup className="my_matches_radio_box">
                                <Label check style={{ display: 'flex' }}>
                                    <Input type="radio" name="radio_3" />  All
                                </Label>
                                <Label>
                                    <Input type="radio" name="radio_3" />  Within a week(3)
                                </Label>
                                <Label>
                                    <Input type="radio" name="radio_3" />  Within a month(11)
                                </Label>
                            </FormGroup>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="4">
                            Active Members
                        </AccordionHeader>
                        <AccordionBody accordionId="4">
                            <FormGroup className="my_matches_radio_box">
                                <Label check style={{ display: 'flex' }}>
                                    <Input type="radio" name="radio_4" />  All
                                </Label>
                                <Label>
                                    <Input type="radio" name="radio_4" />  Within a week(6)
                                </Label>
                                <Label>
                                    <Input type="radio" name="radio_4" />  Within a month(17)
                                </Label>
                            </FormGroup>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="5">
                            Annual Income
                        </AccordionHeader>
                        <AccordionBody accordionId="5">
                            <FormGroup className="my_matches_radio_box">
                                <Label check style={{ display: 'flex' }}>
                                    <Input type="radio" name="radio_5" />  All
                                </Label>
                                <Label>
                                    <Input type="radio" name="radio_5" />  Upto PKR 1 Lak...(54)
                                </Label>
                                <Label>
                                    <Input type="radio" name="radio_5" />  PKR 1 Lakh to ...(16)
                                </Label>
                            </FormGroup>
                        </AccordionBody>
                    </AccordionItem>
                </UncontrolledAccordion>
            </div>
        </div>
    )
}

export default MyMatchesFilter