/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Preferences.css'
import "./PreferencesMobi.css"
import { Box, } from '@mui/material';
import {
  UncontrolledAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody
} from "reactstrap"
import { FormGroup, Button, Form, Label, Input } from 'reactstrap';
import DetailsIcon from '@mui/icons-material/Details';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ProfileIcon from '@mui/icons-material/Portrait';
import BasicDetailsForm from './Contents/BasicDetailsForm';
import LocationDetailsForm from './Contents/LocationDetailsForm';
import EducationAndWorkForm from './Contents/EducationAndWorkForm';
import LocationForm from './Contents/LocationForm';
import ProfileTypeForm from './Contents/ProfileTypeForm';
import { useForm, Controller } from "react-hook-form";

const PreferencesMobi = () => {

  const initialIsEditButtonMode = {
    ageEdit: false,
    heightEdit: false,
    maritalStatusEdit: false,
    religionEdit: false,
    communityEdit: false,
    motherTongueEdit: false,
    /** *************** */
    qualificationEdit: false,
    workingWithEdit: false,
    professionAreaEdit: false,
    annualIncomeEdit: false,
    /** *************** */
    locationMotherTongueEdit: false,
    stateLivingInEdit: false,
    residencyStatusEdit: false,
    /** *************** */
    countryResidenceInEdit: false,
    citylivingInEdit: false,
    /** *************** */
    profileCreatedByEdit: false,
    dietEdit: false,
    /** *************** */
  }

  const [isEditButtonMode, setIsEditButtonMode] = useState(initialIsEditButtonMode);

  const {
    control,
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({ shouldFocusError: true });

  const onSubmitForm = (data) => {
    console.log("onSubmitForm", data)

    setIsEditButtonMode(initialIsEditButtonMode)
  }


  return (
    <Box className="preferences_page_box_mobi">
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
        <Form onSubmit={handleSubmit(onSubmitForm)}>
          <AccordionItem className="preferences_pg_box_mobi_accordion_item">
            <AccordionHeader targetId="1">
              <DetailsIcon /> Basic Details
            </AccordionHeader>
            <AccordionBody accordionId="1">
              <BasicDetailsForm
                control={control}
                register={register}
                setValue={setValue}
                getValues={getValues}
                errors={errors}
                isEditButtonMode={isEditButtonMode}
                setIsEditButtonMode={setIsEditButtonMode}
              />
            </AccordionBody>
          </AccordionItem>
          <AccordionItem className="preferences_pg_box_mobi_accordion_item">
            <AccordionHeader targetId="2">
              <AddLocationAltIcon /> Location Details
            </AccordionHeader>
            <AccordionBody accordionId="2">
              <LocationDetailsForm
                control={control}
                register={register}
                setValue={setValue}
                getValues={getValues}
                errors={errors}
                isEditButtonMode={isEditButtonMode}
                setIsEditButtonMode={setIsEditButtonMode}
              />
            </AccordionBody>
          </AccordionItem>
          <AccordionItem className="preferences_pg_box_mobi_accordion_item">
            <AccordionHeader targetId="3">
              <SchoolIcon /> Education And Work
            </AccordionHeader>
            <AccordionBody accordionId="3">
              <EducationAndWorkForm
                control={control}
                register={register}
                setValue={setValue}
                getValues={getValues}
                errors={errors}
                isEditButtonMode={isEditButtonMode}
                setIsEditButtonMode={setIsEditButtonMode}
              />
            </AccordionBody>
          </AccordionItem>
          <AccordionItem className="preferences_pg_box_mobi_accordion_item">
            <AccordionHeader targetId="4">
              <LocationOnIcon /> Location
            </AccordionHeader>
            <AccordionBody accordionId="4" className="preferences_pg_sms_alert_body">
              <LocationForm
                control={control}
                register={register}
                setValue={setValue}
                getValues={getValues}
                errors={errors}
                isEditButtonMode={isEditButtonMode}
                setIsEditButtonMode={setIsEditButtonMode}
              />
            </AccordionBody>
          </AccordionItem>
          <AccordionItem className="preferences_pg_box_mobi_accordion_item">
            <AccordionHeader targetId="5">
              <ProfileIcon /> Profile Type
            </AccordionHeader>
            <AccordionBody accordionId="5">
              <ProfileTypeForm
                control={control}
                register={register}
                setValue={setValue}
                getValues={getValues}
                errors={errors}
                isEditButtonMode={isEditButtonMode}
                setIsEditButtonMode={setIsEditButtonMode}
              />
            </AccordionBody>
          </AccordionItem>
          <div className="preferences_update_button_box">
            <Button color="danger">Save</Button>
          </div>
        </Form>
      </UncontrolledAccordion>
    </Box>
  )
}

export default PreferencesMobi