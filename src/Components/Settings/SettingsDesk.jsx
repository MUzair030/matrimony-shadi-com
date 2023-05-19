/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Settings.css'
import "./SettingsDesk.css"
import { Button, Card, Form, Col, Container, Row } from "reactstrap";
import PropTypes from 'prop-types';
import { TabContext, TabPanel } from '@mui/lab';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import AccountSettingForm from './Contents/AccountSettingForm';
import ContactFiltersForm from './Contents/ContactFiltersForm';
import PrivacyOptionsForm from './Contents/PrivacyOptionsForm';
import EmailSmsAlertsForm from './Contents/EmailSmsAlertsForm';
import HideDeleteProfileForm from './Contents/HideDeleteProfileForm';
import { useForm, Controller } from "react-hook-form";

const SettingsDesk = () => {

  const [settingsTabValue, setSettingsTabValue] = React.useState('1');

  const handleSettingsTabChange = (event, newValue) => {
    setSettingsTabValue(newValue);
  };

  const initialIsEditButtonMode = {
    emailEdit: false,
    passwordEdit: false,
    phoneNumEdit: false,
    ageEdit: false,
    religionEdit: false,
    communityEdit: false,
    motherTongueEdit: false,
    maritalStatusEdit: false,
    heightEdit: false,
    /** *************** */
    displayNameEdit: false,
    phoneVisibilityEdit: false,
    emailVisibilityEdit: false,
    dateOfBirthVisibilityEdit: false,
    annualIncomeVisibilityEdit: false,
    visitorsSettingEdit: false,
    shortlistSettingEdit: false,
    doNotDisturbEdit: false,
    profilePrivacyEdit: false,
    webNotificationsEdit: false,
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
    <Box className="settings_page_box_desk">
      <TabContext value={settingsTabValue}>
        <div className="settings_left_cont">
          <Card className="SettingsPage__Card">
            <Tabs
              className={`SettingsPage__Tabs`}
              value={settingsTabValue}
              onChange={handleSettingsTabChange}
              orientation="vertical"
              variant="scrollable"
              // scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
            >
              <Tab className={`SettingsPage__Tab`} label="Account Setting" icon={<SettingsOutlinedIcon className="SP_Tab_Icon" />} iconPosition="start" value="1" />
              <Tab className={`SettingsPage__Tab`} label="People Who Can Contact" icon={<PermContactCalendarIcon className="SP_Tab_Icon" />} iconPosition="start" value="2" />
              <Tab className={`SettingsPage__Tab`} label="Privacy Options" icon={<PrivacyTipOutlinedIcon className="SP_Tab_Icon" />} iconPosition="start" value="3" />
              <Tab className={`SettingsPage__Tab`} label="Email/SMS Alerts" icon={<MarkEmailUnreadOutlinedIcon className="SP_Tab_Icon" />} iconPosition="start" value="4" />
              <Tab className={`SettingsPage__Tab`} label="Hide / Delete Profile" icon={<DeleteForeverOutlinedIcon className="SP_Tab_Icon" />} iconPosition="start" value="5" />
            </Tabs>
          </Card>
        </div>
        <div className="settings_details_cont">
          <Form onSubmit={handleSubmit(onSubmitForm)}>
            <Card className="settings_details_cont_card">
              <TabPanel value={"1"}>
                <AccountSettingForm
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
                <ContactFiltersForm
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
                <PrivacyOptionsForm
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
                <EmailSmsAlertsForm
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
                <HideDeleteProfileForm
                  control={control}
                  register={register}
                  setValue={setValue}
                  getValues={getValues}
                  errors={errors}
                  isEditButtonMode={isEditButtonMode}
                  setIsEditButtonMode={setIsEditButtonMode}
                />
              </TabPanel>
              <div className="settings_update_button_box">
                <Button color="danger">Update</Button>
              </div>
            </Card>
          </Form>
        </div>
      </TabContext>
    </Box>
  )
}

export default SettingsDesk