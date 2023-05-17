/* eslint-disable no-unused-vars */
import React from 'react'
import "./SettingsContents.css"
import { Controller } from "react-hook-form";
import {
  FormControl,
  useFormControl,
  FormGroup,
  Autocomplete,
  FormControlLabel,
  Checkbox,
  TextField,
  Stack,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Radio,
  RadioGroup,
  FormLabel,
  FormHelperText,
  Button,
  MenuItem,
  Menu,
  List,
  ListItem,
  MenuList,
  Slider,
  Box,
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const EmailSmsAlertsForm = (props) => {
  const { control, register, setValue, getValues, errors, isEditButtonMode, setIsEditButtonMode } = props;

  return (
    <div className="settings_form_data_wrapper">
      <h2 className='alert_title_top'>My Alerts Manager</h2>
      <p className='alert_para_top'>Manage your subscriptions to Ringseeker.com Alerts on email listed below. You can also subscribe to Shaadi.com and ShaadiTimes Newsletters.</p>
      <div className="HR_Line" />
      <h2 className='alert_title_2'>My Alerts</h2>

      <div className="HR_Line" />

      <Box className="alert_fields_box">
        <h3 className='alert_fields_box_label'>Match Mail & Photo Match Mail</h3>
        <p className='alert_fields_box_text'>Personalized matches for you delivered via email as often as you like. A very effective match-making tool. </p>
        <h3 className='alert_fields_box_label'>Email Alert</h3>
        <div className='alert_controller_box'>
          <Controller
            control={control}
            name='alert_match_mail'
            rules={{
              required: false,
            }}
            defaultValue={2}
            render={({ field }) => (
              <FormControl className="mui_form_control" fullWidth>
                <RadioGroup
                  {...field}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(event) => {
                    setValue("alert_match_mail", event.target.value);
                  }}
                >
                  <FormControlLabel value={1} control={<Radio />} label="Daily" />
                  <FormControlLabel value={2} control={<Radio />} label="Tri-Weekly" />
                  <FormControlLabel value={3} control={<Radio />} label="Weekly" />
                  <FormControlLabel value={4} control={<Radio />} label="Unsubscribe" />
                </RadioGroup>
              </FormControl>
            )}
          />
          <span className="field_error">
            {errors.alert_match_mail?.type == "required" && "Field is required"}
          </span>
        </div>
      </Box>

      <div className="HR_Line" />

      <Box className="alert_fields_box">
        <h3 className='alert_fields_box_label'>Premium Match Mail</h3>
        <p className='alert_fields_box_text'>An email notification containing your Matches who have upgraded to a Premium Membership</p>
        <h3 className='alert_fields_box_label'>Email Alert</h3>
        <div className='alert_controller_box'>
          <Controller
            control={control}
            name='premium_match_mail'
            rules={{
              required: false,
            }}
            defaultValue={2}
            render={({ field }) => (
              <FormControl className="mui_form_control" fullWidth>
                <RadioGroup
                  {...field}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(event) => {
                    setValue("premium_match_mail", event.target.value);
                  }}
                >
                  <FormControlLabel value={1} control={<Radio />} label="Daily" />
                  <FormControlLabel value={2} control={<Radio />} label="Unsubscribe" />
                </RadioGroup>
              </FormControl>
            )}
          />
          <span className="field_error">
            {errors.premium_match_mail?.type == "required" && "Field is required"}
          </span>
        </div>
      </Box>

      <div className="HR_Line" />

      <Box className="alert_fields_box">
        <h3 className='alert_fields_box_label'>Recent Visitors Email</h3>
        <p className='alert_fields_box_text'>An email notification of Members who have recently Viewed your Profile</p>
        <h3 className='alert_fields_box_label'>Email Alert</h3>
        <div className='alert_controller_box'>
          <Controller
            control={control}
            name='recent_visitors_email'
            rules={{
              required: false,
            }}
            defaultValue={2}
            render={({ field }) => (
              <FormControl className="mui_form_control" fullWidth>
                <RadioGroup
                  {...field}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(event) => {
                    setValue("recent_visitors_email", event.target.value);
                  }}
                >
                  <FormControlLabel value={1} control={<Radio />} label="Daily" />
                  <FormControlLabel value={2} control={<Radio />} label="Unsubscribe" />
                </RadioGroup>
              </FormControl>
            )}
          />
          <span className="field_error">
            {errors.recent_visitors_email?.type == "required" && "Field is required"}
          </span>
        </div>
      </Box>

      <div className="HR_Line" />

      <Box className="alert_fields_box">
        <h3 className='alert_fields_box_label'>Members who Shortlisted you Email</h3>
        <p className='alert_fields_box_text'>An email notification of Members who have recently Shortlisted your Profile</p>
        <h3 className='alert_fields_box_label'>Email Alert</h3>
        <div className='alert_controller_box'>
          <Controller
            control={control}
            name='shortlisted_members_email'
            rules={{
              required: false,
            }}
            defaultValue={2}
            render={({ field }) => (
              <FormControl className="mui_form_control" fullWidth>
                <RadioGroup
                  {...field}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(event) => {
                    setValue("shortlisted_members_email", event.target.value);
                  }}
                >
                  <FormControlLabel value={1} control={<Radio />} label="Daily" />
                  <FormControlLabel value={2} control={<Radio />} label="Unsubscribe" />
                </RadioGroup>
              </FormControl>
            )}
          />
          <span className="field_error">
            {errors.shortlisted_members_email?.type == "required" && "Field is required"}
          </span>
        </div>
      </Box>

      <div className="HR_Line" />

      <Box className="alert_fields_box">
        <h3 className='alert_fields_box_label'>Viewed Profiles Email</h3>
        <p className='alert_fields_box_text'>An email reminder containing Profiles you have Viewed recently but have not yet invited to Connect.</p>
        <h3 className='alert_fields_box_label'>Email Alert</h3>
        <div className='alert_controller_box'>
          <Controller
            control={control}
            name='viewed_profiles_email'
            rules={{
              required: false,
            }}
            defaultValue={2}
            render={({ field }) => (
              <FormControl className="mui_form_control" fullWidth>
                <RadioGroup
                  {...field}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(event) => {
                    setValue("viewed_profiles_email", event.target.value);
                  }}
                >
                  <FormControlLabel value={1} control={<Radio />} label="Daily" />
                  <FormControlLabel value={2} control={<Radio />} label="Unsubscribe" />
                </RadioGroup>
              </FormControl>
            )}
          />
          <span className="field_error">
            {errors.viewed_profiles_email?.type == "required" && "Field is required"}
          </span>
        </div>
      </Box>

      <div className="HR_Line" />

      <Box className="alert_fields_box">
        <h3 className='alert_fields_box_label'>Similar Profiles Email</h3>
        <p className='alert_fields_box_text'>An email containing Profiles that are similar to the ones you have liked recently.</p>
        <h3 className='alert_fields_box_label'>Email Alert</h3>
        <div className='alert_controller_box'>
          <Controller
            control={control}
            name='similar_profiles_email'
            rules={{
              required: false,
            }}
            defaultValue={2}
            render={({ field }) => (
              <FormControl className="mui_form_control" fullWidth>
                <RadioGroup
                  {...field}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(event) => {
                    setValue("similar_profiles_email", event.target.value);
                  }}
                >
                  <FormControlLabel value={1} control={<Radio />} label="Bi-Weekly" />
                  <FormControlLabel value={2} control={<Radio />} label="Weekly" />
                </RadioGroup>
              </FormControl>
            )}
          />
          <span className="field_error">
            {errors.similar_profiles_email?.type == "required" && "Field is required"}
          </span>
        </div>
      </Box>

      <div className="HR_Line" />

      <Box className="alert_fields_box">
        <h3 className='alert_fields_box_label'>Contact Alert</h3>
        <p className='alert_fields_box_text'>Alerts you receive every time someone contacts you or you receive a response to a contact initiated by you. Get them in your mailbox at a frequency of your choice. Essential to keep you informed of all responses received.</p>
        <h3 className='alert_fields_box_label'>Email Alert</h3>
        <div className='alert_controller_box'>
          <Controller
            control={control}
            name='contact_alert'
            rules={{
              required: false,
            }}
            defaultValue={2}
            render={({ field }) => (
              <FormControl className="mui_form_control" fullWidth>
                <RadioGroup
                  {...field}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(event) => {
                    setValue("contact_alert", event.target.value);
                  }}
                >
                  <FormControlLabel value={1} control={<Radio />} label="Instant - A mail for every response" />
                  <FormControlLabel value={2} control={<Radio />} label="Daily - A digest of all responses received in a day" />
                  <FormControlLabel value={3} control={<Radio />} label="Unsubscribe" />
                </RadioGroup>
              </FormControl>
            )}
          />
          <span className="field_error">
            {errors.contact_alert?.type == "required" && "Field is required"}
          </span>
        </div>
      </Box>

      <div className="HR_Line" />

      <Box className="alert_fields_box">
        <h3 className='alert_fields_box_label'>Message Received Alert</h3>
        <p className='alert_fields_box_text'>An email notification of new messages received recently.</p>
        <h3 className='alert_fields_box_label'>Email Alert</h3>
        <div className='alert_controller_box'>
          <Controller
            control={control}
            name='message_received_alert'
            rules={{
              required: false,
            }}
            defaultValue={2}
            render={({ field }) => (
              <FormControl className="mui_form_control" fullWidth>
                <RadioGroup
                  {...field}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(event) => {
                    setValue("message_received_alert", event.target.value);
                  }}
                >
                  <FormControlLabel value={1} control={<Radio />} label="Daily - A digest of all messages received in a day" />
                  <FormControlLabel value={2} control={<Radio />} label="Unsubscribe" />
                </RadioGroup>
              </FormControl>
            )}
          />
          <span className="field_error">
            {errors.message_received_alert?.type == "required" && "Field is required"}
          </span>
        </div>
      </Box>

      <div className="HR_Line" />

      <Box className="alert_fields_box">
        <h3 className='alert_fields_box_label'>Shaadi.com Profile</h3>
        <p className='alert_fields_box_text'>Perfect matches for you through profile blaster delivered via email as often as you like. The Exact match-making tool.</p>
        <h3 className='alert_fields_box_label'>Email Alert</h3>
        <div className='alert_controller_box'>
          <Controller
            control={control}
            name='shaadi_profile_alert'
            rules={{
              required: false,
            }}
            defaultValue={2}
            render={({ field }) => (
              <FormControl className="mui_form_control" fullWidth>
                <RadioGroup
                  {...field}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(event) => {
                    setValue("shaadi_profile_alert", event.target.value);
                  }}
                >
                  <FormControlLabel value={1} control={<Radio />} label="Subscribe" />
                  <FormControlLabel value={2} control={<Radio />} label="Unsubscribe" />
                </RadioGroup>
              </FormControl>
            )}
          />
          <span className="field_error">
            {errors.shaadi_profile_alert?.type == "required" && "Field is required"}
          </span>
        </div>
      </Box>

      <div className="HR_Line" />

      <h2 class="alert_title_2">Phone Number Alerts</h2>

      <div className="HR_Line" />

      <Box className="alert_fields_box">
        <h3 className='alert_fields_box_label'>Phone Number Views</h3>
        <div className='alert_controller_box'>
          <Controller
            control={control}
            name='phone_number_views'
            rules={{
              required: false,
            }}
            defaultValue={0}
            render={({ field }) => (
              <FormControl className="mui_form_control" fullWidth>
                <RadioGroup
                  {...field}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(event) => {
                    setValue("phone_number_views", event.target.value);
                  }}
                >
                  <FormControlLabel value={1} control={<Radio />} label="Yes" />
                  <FormControlLabel value={0} control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            )}
          />
          <span className="field_error">
            {errors.phone_number_views?.type == "required" && "Field is required"}
          </span>
        </div>
      </Box>

      <div className="HR_Line" />

      <Box className="alert_fields_box">
        <h3 className='alert_fields_box_label'>Personalized Messages</h3>
        <div className='alert_controller_box'>
          <Controller
            control={control}
            name='personalized_messages'
            rules={{
              required: false,
            }}
            defaultValue={0}
            render={({ field }) => (
              <FormControl className="mui_form_control" fullWidth>
                <RadioGroup
                  {...field}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(event) => {
                    setValue("personalized_messages", event.target.value);
                  }}
                >
                  <FormControlLabel value={1} control={<Radio />} label="Yes" />
                  <FormControlLabel value={0} control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            )}
          />
          <span className="field_error">
            {errors.personalized_messages?.type == "required" && "Field is required"}
          </span>
        </div>
      </Box>

      <div className="HR_Line" />

      <h2 class="alert_title_2">Newsletters</h2>

      <div className="HR_Line" />

      <Box className="alert_fields_box">
        <h3 className='alert_fields_box_label'>Email Alert</h3>
        <div className='alert_controller_box'>
          <Controller
            control={control}
            name='newsletters_email_alert_1'
            rules={{
              required: false,
            }}
            defaultValue={2}
            render={({ field }) => (
              <FormControl className="mui_form_control" fullWidth>
                <RadioGroup
                  {...field}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(event) => {
                    setValue("newsletters_email_alert_1", event.target.value);
                  }}
                >
                  <FormControlLabel value={1} control={<Radio />} label="Occasionally - Not more than twice a month" />
                  <FormControlLabel value={2} control={<Radio />} label="Unsubscribe" />
                </RadioGroup>
              </FormControl>
            )}
          />
          <span className="field_error">
            {errors.newsletters_email_alert_1?.type == "required" && "Field is required"}
          </span>
        </div>
      </Box>

      <div className="HR_Line" />

      <Box className="alert_fields_box">
        <h3 className='alert_fields_box_label'>Email Alert</h3>
        <div className='alert_controller_box'>
          <Controller
            control={control}
            name='newsletters_email_alert_2'
            rules={{
              required: false,
            }}
            defaultValue={2}
            render={({ field }) => (
              <FormControl className="mui_form_control" fullWidth>
                <RadioGroup
                  {...field}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(event) => {
                    setValue("newsletters_email_alert_2", event.target.value);
                  }}
                >
                  <FormControlLabel value={1} control={<Radio />} label="Monthly" />
                  <FormControlLabel value={2} control={<Radio />} label="Unsubscribe" />
                </RadioGroup>
              </FormControl>
            )}
          />
          <span className="field_error">
            {errors.newsletters_email_alert_2?.type == "required" && "Field is required"}
          </span>
        </div>
      </Box>

    </div>
  )
}

export default EmailSmsAlertsForm