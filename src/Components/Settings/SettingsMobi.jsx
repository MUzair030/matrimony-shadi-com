/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Settings.css'
import "./SettingsMobi.css"
import { Box, } from '@mui/material';
import {
  UncontrolledAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody
} from "reactstrap"
import { FormGroup, Button, Form, Label, Input } from 'reactstrap';
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

const SettingsMobi = () => {

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
    <Box className="settings_page_box_mobi">
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
          <AccordionItem className="settings_pg_box_mobi_accordion_item">
            <AccordionHeader targetId="1">
              <SettingsOutlinedIcon /> Account Setting
            </AccordionHeader>
            <AccordionBody accordionId="1">
              <AccountSettingForm
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
          <AccordionItem className="settings_pg_box_mobi_accordion_item">
            <AccordionHeader targetId="2">
              <PermContactCalendarIcon /> People Who Can Contact
            </AccordionHeader>
            <AccordionBody accordionId="2">
              <ContactFiltersForm
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
          <AccordionItem className="settings_pg_box_mobi_accordion_item">
            <AccordionHeader targetId="3">
              <PrivacyTipOutlinedIcon /> Privacy Options
            </AccordionHeader>
            <AccordionBody accordionId="3">
              <PrivacyOptionsForm
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
          <AccordionItem className="settings_pg_box_mobi_accordion_item">
            <AccordionHeader targetId="4">
              <MarkEmailUnreadOutlinedIcon /> Email / SMS Alerts
            </AccordionHeader>
            <AccordionBody accordionId="4" className="settings_pg_sms_alert_body">
              <EmailSmsAlertsForm
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
          <AccordionItem className="settings_pg_box_mobi_accordion_item">
            <AccordionHeader targetId="5">
              <DeleteForeverOutlinedIcon /> Hide / Delete Profile
            </AccordionHeader>
            <AccordionBody accordionId="5">
              <HideDeleteProfileForm
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
          <div className="settings_update_button_box">
            <Button color="danger">Update</Button>
          </div>
        </Form>
      </UncontrolledAccordion>
    </Box>
  )
}

export default SettingsMobi