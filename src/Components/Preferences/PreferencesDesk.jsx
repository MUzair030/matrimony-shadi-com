/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Preferences.css'
import "./PreferencesDesk.css"
import { Button, Card, Form, Col, Container, Row } from "reactstrap";
import PropTypes from 'prop-types';
import { TabContext, TabPanel } from '@mui/lab';
import { Tabs, Tab, Box, Typography } from '@mui/material';
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

const PreferencesDesk = () => {

  const [settingsTabValue, setSettingsTabValue] = React.useState('1');

  const handleSettingsTabChange = (event, newValue) => {
    setSettingsTabValue(newValue);
  };

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
    <Box className="preferences_page_box_desk">
      <TabContext value={settingsTabValue}>
        <div className="preferences_left_cont">
          <Card className="SettingsPage__Card">
            <Tabs
              className={`PreferencesPage__Tabs`}
              value={settingsTabValue}
              onChange={handleSettingsTabChange}
              orientation="vertical"
              variant="scrollable"
              // scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
            >
              <Tab className={`PreferencesPage__Tab`} label="Basic Details" icon={<DetailsIcon className="SP_Tab_Icon" />} iconPosition="start" value="1" />
              <Tab className={`PreferencesPage__Tab`} label="Location Details" icon={<AddLocationAltIcon className="SP_Tab_Icon" />} iconPosition="start" value="2" />
              <Tab className={`PreferencesPage__Tab`} label="Education And Work" icon={<SchoolIcon className="SP_Tab_Icon" />} iconPosition="start" value="3" />
              <Tab className={`PreferencesPage__Tab`} label="Location" icon={<LocationOnIcon className="SP_Tab_Icon" />} iconPosition="start" value="4" />
              <Tab className={`PreferencesPage__Tab`} label="Profile Type" icon={<ProfileIcon className="SP_Tab_Icon" />} iconPosition="start" value="5" />
            </Tabs>
          </Card>
        </div>
        <div className="preferences_details_cont">
          <Form onSubmit={handleSubmit(onSubmitForm)}>
            <Card className="preferences_details_cont_card">
              <TabPanel value={"1"}>
                <BasicDetailsForm
                  control={control}
                  register={register}
                  setValue={setValue}
                  getValues={getValues}
                  errors={errors}
                  isEditButtonMode={isEditButtonMode}
                  setIsEditButtonMode={setIsEditButtonMode}
                />
              </TabPanel>
              <TabPanel value={"2"}>
                <LocationDetailsForm
                  control={control}
                  register={register}
                  setValue={setValue}
                  getValues={getValues}
                  errors={errors}
                  isEditButtonMode={isEditButtonMode}
                  setIsEditButtonMode={setIsEditButtonMode}
                />
              </TabPanel>
              <TabPanel value={"3"}>
                <EducationAndWorkForm
                  control={control}
                  register={register}
                  setValue={setValue}
                  getValues={getValues}
                  errors={errors}
                  isEditButtonMode={isEditButtonMode}
                  setIsEditButtonMode={setIsEditButtonMode}
                />
              </TabPanel>
              <TabPanel value={"4"}>
                <LocationForm
                  control={control}
                  register={register}
                  setValue={setValue}
                  getValues={getValues}
                  errors={errors}
                  isEditButtonMode={isEditButtonMode}
                  setIsEditButtonMode={setIsEditButtonMode}
                />
              </TabPanel>
              <TabPanel value={"5"}>
                <ProfileTypeForm
                  control={control}
                  register={register}
                  setValue={setValue}
                  getValues={getValues}
                  errors={errors}
                  isEditButtonMode={isEditButtonMode}
                  setIsEditButtonMode={setIsEditButtonMode}
                />
              </TabPanel>
              <div className="preferences_update_button_box">
                <Button color="danger">Save</Button>
              </div>
            </Card>
          </Form>
        </div>
      </TabContext>
    </Box>
  )
}

export default PreferencesDesk