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
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CrossIcon from '@mui/icons-material/HighlightOff';

const PrivacyOptionsForm = (props) => {
  const { control, register, setValue, getValues, errors, isEditButtonMode, setIsEditButtonMode } = props;

  const tempPrivacyOptionsData = {
    full_name: "Abubakar Saif Wahla",
    phone_visibility: [
      { id: 1, value: "Only Premium Members you like", },
      { id: 2, value: "Visible to all Premium Members", },
      { id: 3, value: "Visible to All Members", },
      { id: 4, value: "Hide", },
    ],
    email_visibility: [
      { id: 1, value: "Visible to all Premium Members", },
      { id: 2, value: "Visible to All Members", },
      { id: 3, value: "Hide", },
    ],
    dateofbirth_visibility: [
      { id: 1, value: "Show my full Date of Birth (dd/mm/yyyy)", },
      { id: 2, value: "Show my full Date of Birth (dd/mm)", },
      { id: 3, value: "Show my full Date of Birth (mm/yyyy)", },
      { id: 4, value: "Show my full Date of Birth (dd/yyyy)", },
    ],
    annual_income_visibility: [
      { id: 1, value: "Visible to all Members", },
      { id: 2, value: "Visible to Premium Members", },
      { id: 3, value: "Hide", },
    ],
    visitors_setting: [
      { id: 1, value: "Let other Members know that I have visited their Profile", },
      { id: 2, value: "Visible to all Members", },
      { id: 3, value: "Visible to Premium Members", },
      { id: 4, value: "Hide", },
    ],
    shortlist_setting: [
      { id: 1, value: "Let other Members know that I have shortlisted their Profile" },
      { id: 2, value: "Visible to all Members", },
      { id: 3, value: "Visible to Premium Members", },
      { id: 4, value: "Hide", },
    ],
    do_not_disturb: [
      { id: 1, value: "Shaadi.com can call me for Premium Membership related offers and on behalf of Premium Members" },
      { id: 2, value: "Apply to all Premium Members", },
      { id: 3, value: "Apply to all Members", },
      { id: 4, value: "Don't Apply", },
    ],
    profile_privacy: [
      { id: 1, value: "Visible to all, including unregistered visitors (Photo and Name will not be visible on Profile)" },
      { id: 2, value: "Visible to all Members", },
      { id: 3, value: "Visible to Premium Members", },
      { id: 4, value: "Hide", },
    ],
    web_notifications: [
      { id: 1, value: "Unsubscribed", },
      { id: 2, value: "Subscribed", },
      { id: 3, value: "Option-3", },
      { id: 4, value: "Option-4", },
    ],
  }

  return (
    <div className="settings_form_data_wrapper">

      {/* Display Name */}
      <div className="settings_form_data_box">
        <div className="sfdb_label_side">
          <h4 className='sfdb_label_title'>Display Name</h4>
        </div>
        <div className="sfdb_field_side">
          <div className="sfdb_field_side_body">
            <Controller
              control={control}
              name='full_name'
              rules={{
                required: true,
                pattern: /^[a-zA-Z0-9_ -]*$/,
              }}
              defaultValue={tempPrivacyOptionsData.full_name}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  multiline
                  inputProps={
                    { readOnly: isEditButtonMode.displayNameEdit == false, }
                  }
                  className="mui_text_field"
                  label=" "
                  InputLabelProps={{ shrink: false, disableUnderline: true, }}
                  disableUnderline={true}
                  onChange={(event) => {
                    setValue("full_name", event.target.value)
                  }}
                />
              )}
            />
            <span className="field_error">
              {errors.full_name?.type == "required" && "Full Name is required"}
              {errors.full_name?.type == "pattern" && "Please write Alphanumeric Values"}
            </span>
          </div>
        </div>
        <div className="sfdb_btns_side">
          {
            isEditButtonMode.displayNameEdit == false ? (
              <Button className="sfdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, displayNameEdit: true })}>Edit</Button>
            ) : (
              <Button className="sfdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, displayNameEdit: false });
                setValue("full_name", tempPrivacyOptionsData.full_name)
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

      {/* Phone */}
      <div className="settings_form_data_box">
        <div className="sfdb_label_side">
          <h4 className='sfdb_label_title'>Phone</h4>
        </div>
        <div className="sfdb_field_side">
          <div className="sfdb_field_side_body">
            <Controller
              control={control}
              name='phone_visibility'
              rules={{
                required: true,
              }}
              defaultValue={tempPrivacyOptionsData.phone_visibility[0]}
              render={({ field }) => (
                isEditButtonMode.phoneVisibilityEdit == false ? (
                  <TextField
                    {...field}
                    fullWidth
                    multiline
                    inputProps={
                      { readOnly: isEditButtonMode.phoneVisibilityEdit == false, }
                    }
                    className="mui_text_field"
                    label=" "
                    value={field.value?.value}
                    InputLabelProps={{ shrink: false, disableUnderline: true, }}
                    disableUnderline={true}
                    onChange={(event) => {
                      setValue("phone_visibility", event.target.value)
                    }}
                  />
                ) : (
                  <Autocomplete
                    className="mui_autocomplete_field"
                    {...field}
                    popupIcon={<KeyboardArrowDownIcon />}
                    options={tempPrivacyOptionsData.phone_visibility}
                    autoHighlight
                    getOptionLabel={(option) => option?.value || ""}
                    isOptionEqualToValue={(option, value) => option?.value || ""}
                    onChange={(event, newValue) => {
                      setValue("phone_visibility", newValue);
                    }}
                    getOptionProps={false}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        multiline
                        className="mui_text_field"
                        label=" "
                        InputLabelProps={{ shrink: false, disableUnderline: true, }}
                        disableUnderline={true}
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: 'off',
                        }}
                      />
                    )}
                    renderOption={(props, option) => (
                      <MenuList {...props} className="mui_options_menu_list_render">
                        <MenuItem className="mui_options_menu_item_render">{option.value}</MenuItem>
                      </MenuList>
                    )}
                  />
                )
              )}
            />
            <span className="field_error">
              {errors.phone_visibility?.type == "required" && "Field is required"}
            </span>
          </div>
        </div>
        <div className="sfdb_btns_side">
          {
            isEditButtonMode.phoneVisibilityEdit == false ? (
              <Button className="sfdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, phoneVisibilityEdit: true })}>Edit</Button>
            ) : (
              <Button className="sfdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, phoneVisibilityEdit: false });
                setValue("phone_visibility", tempPrivacyOptionsData.phone_visibility[0])
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

      {/* Email */}
      <div className="settings_form_data_box">
        <div className="sfdb_label_side">
          <h4 className='sfdb_label_title'>Email</h4>
        </div>
        <div className="sfdb_field_side">
          <div className="sfdb_field_side_body">
            <Controller
              control={control}
              name='email_visibility'
              rules={{
                required: true,
              }}
              defaultValue={tempPrivacyOptionsData.email_visibility[0]}
              render={({ field }) => (
                isEditButtonMode.emailVisibilityEdit == false ? (
                  <TextField
                    {...field}
                    fullWidth
                    multiline
                    inputProps={
                      { readOnly: isEditButtonMode.emailVisibilityEdit == false, }
                    }
                    className="mui_text_field"
                    label=" "
                    value={field.value?.value}
                    InputLabelProps={{ shrink: false, disableUnderline: true, }}
                    disableUnderline={true}
                    onChange={(event) => {
                      setValue("email_visibility", event.target.value)
                    }}
                  />
                ) : (
                  <Autocomplete
                    className="mui_autocomplete_field"
                    {...field}
                    popupIcon={<KeyboardArrowDownIcon />}
                    options={tempPrivacyOptionsData.email_visibility}
                    autoHighlight
                    getOptionLabel={(option) => option?.value || ""}
                    isOptionEqualToValue={(option, value) => option?.value || ""}
                    onChange={(event, newValue) => {
                      setValue("email_visibility", newValue);
                    }}
                    getOptionProps={false}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        multiline
                        className="mui_text_field"
                        label=" "
                        InputLabelProps={{ shrink: false, disableUnderline: true, }}
                        disableUnderline={true}
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: 'off',
                        }}
                      />
                    )}
                    renderOption={(props, option) => (
                      <MenuList {...props} className="mui_options_menu_list_render">
                        <MenuItem className="mui_options_menu_item_render">{option.value}</MenuItem>
                      </MenuList>
                    )}
                  />
                )
              )}
            />
            <span className="field_error">
              {errors.email_visibility?.type == "required" && "Field is required"}
            </span>
          </div>
        </div>
        <div className="sfdb_btns_side">
          {
            isEditButtonMode.emailVisibilityEdit == false ? (
              <Button className="sfdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, emailVisibilityEdit: true })}>Edit</Button>
            ) : (
              <Button className="sfdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, emailVisibilityEdit: false });
                setValue("email_visibility", tempPrivacyOptionsData.email_visibility[0])
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

      {/* Date of Birth */}
      <div className="settings_form_data_box">
        <div className="sfdb_label_side">
          <h4 className='sfdb_label_title'>Date of Birth</h4>
        </div>
        <div className="sfdb_field_side">
          <div className="sfdb_field_side_body">
            <Controller
              control={control}
              name='dateofbirth_visibility'
              rules={{
                required: true,
              }}
              defaultValue={tempPrivacyOptionsData.dateofbirth_visibility[0]}
              render={({ field }) => (
                isEditButtonMode.dateOfBirthVisibilityEdit == false ? (
                  <TextField
                    {...field}
                    fullWidth
                    multiline
                    inputProps={
                      { readOnly: isEditButtonMode.dateOfBirthVisibilityEdit == false, }
                    }
                    className="mui_text_field"
                    label=" "
                    value={field.value?.value}
                    InputLabelProps={{ shrink: false, disableUnderline: true, }}
                    disableUnderline={true}
                    onChange={(event) => {
                      setValue("dateofbirth_visibility", event.target.value)
                    }}
                  />
                ) : (
                  <Autocomplete
                    className="mui_autocomplete_field"
                    {...field}
                    popupIcon={<KeyboardArrowDownIcon />}
                    options={tempPrivacyOptionsData.dateofbirth_visibility}
                    autoHighlight
                    getOptionLabel={(option) => option?.value || ""}
                    isOptionEqualToValue={(option, value) => option?.value || ""}
                    onChange={(event, newValue) => {
                      setValue("dateofbirth_visibility", newValue);
                    }}
                    getOptionProps={false}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        multiline
                        className="mui_text_field"
                        label=" "
                        InputLabelProps={{ shrink: false, disableUnderline: true, }}
                        disableUnderline={true}
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: 'off',
                        }}
                      />
                    )}
                    renderOption={(props, option) => (
                      <MenuList {...props} className="mui_options_menu_list_render">
                        <MenuItem className="mui_options_menu_item_render">{option.value}</MenuItem>
                      </MenuList>
                    )}
                  />
                )
              )}
            />
            <span className="field_error">
              {errors.dateofbirth_visibility?.type == "required" && "Field is required"}
            </span>
          </div>
        </div>
        <div className="sfdb_btns_side">
          {
            isEditButtonMode.dateOfBirthVisibilityEdit == false ? (
              <Button className="sfdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, dateOfBirthVisibilityEdit: true })}>Edit</Button>
            ) : (
              <Button className="sfdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, dateOfBirthVisibilityEdit: false });
                setValue("dateofbirth_visibility", tempPrivacyOptionsData.dateofbirth_visibility[0])
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

      {/* Annual Income */}
      <div className="settings_form_data_box">
        <div className="sfdb_label_side">
          <h4 className='sfdb_label_title'>Annual Income</h4>
        </div>
        <div className="sfdb_field_side">
          <div className="sfdb_field_side_body">
            <Controller
              control={control}
              name='annual_income_visibility'
              rules={{
                required: true,
              }}
              defaultValue={tempPrivacyOptionsData.annual_income_visibility[0]}
              render={({ field }) => (
                isEditButtonMode.annualIncomeVisibilityEdit == false ? (
                  <TextField
                    {...field}
                    fullWidth
                    multiline
                    inputProps={
                      { readOnly: isEditButtonMode.annualIncomeVisibilityEdit == false, }
                    }
                    className="mui_text_field"
                    label=" "
                    value={field.value?.value}
                    InputLabelProps={{ shrink: false, disableUnderline: true, }}
                    disableUnderline={true}
                    onChange={(event) => {
                      setValue("annual_income_visibility", event.target.value)
                    }}
                  />
                ) : (
                  <Autocomplete
                    className="mui_autocomplete_field"
                    {...field}
                    popupIcon={<KeyboardArrowDownIcon />}
                    options={tempPrivacyOptionsData.annual_income_visibility}
                    autoHighlight
                    getOptionLabel={(option) => option?.value || ""}
                    isOptionEqualToValue={(option, value) => option?.value || ""}
                    onChange={(event, newValue) => {
                      setValue("annual_income_visibility", newValue);
                    }}
                    getOptionProps={false}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        multiline
                        className="mui_text_field"
                        label=" "
                        InputLabelProps={{ shrink: false, disableUnderline: true, }}
                        disableUnderline={true}
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: 'off',
                        }}
                      />
                    )}
                    renderOption={(props, option) => (
                      <MenuList {...props} className="mui_options_menu_list_render">
                        <MenuItem className="mui_options_menu_item_render">{option.value}</MenuItem>
                      </MenuList>
                    )}
                  />
                )
              )}
            />
            <span className="field_error">
              {errors.annual_income_visibility?.type == "required" && "Field is required"}
            </span>
          </div>
        </div>
        <div className="sfdb_btns_side">
          {
            isEditButtonMode.annualIncomeVisibilityEdit == false ? (
              <Button className="sfdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, annualIncomeVisibilityEdit: true })}>Edit</Button>
            ) : (
              <Button className="sfdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, annualIncomeVisibilityEdit: false });
                setValue("annual_income_visibility", tempPrivacyOptionsData.annual_income_visibility[0])
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

      {/* Visitors Setting */}
      <div className="settings_form_data_box">
        <div className="sfdb_label_side">
          <h4 className='sfdb_label_title'>Visitors Setting</h4>
        </div>
        <div className="sfdb_field_side">
          <div className="sfdb_field_side_body">
            <Controller
              control={control}
              name='visitors_setting'
              rules={{
                required: true,
              }}
              defaultValue={tempPrivacyOptionsData.visitors_setting[0]}
              render={({ field }) => (
                isEditButtonMode.visitorsSettingEdit == false ? (
                  <TextField
                    {...field}
                    fullWidth
                    multiline
                    inputProps={
                      { readOnly: isEditButtonMode.visitorsSettingEdit == false, }
                    }
                    className="mui_text_field"
                    label=" "
                    value={field.value?.value}
                    InputLabelProps={{ shrink: false, disableUnderline: true, }}
                    disableUnderline={true}
                    onChange={(event) => {
                      setValue("visitors_setting", event.target.value)
                    }}
                  />
                ) : (
                  <Autocomplete
                    className="mui_autocomplete_field"
                    {...field}
                    popupIcon={<KeyboardArrowDownIcon />}
                    options={tempPrivacyOptionsData.visitors_setting}
                    autoHighlight
                    getOptionLabel={(option) => option?.value || ""}
                    isOptionEqualToValue={(option, value) => option?.value || ""}
                    onChange={(event, newValue) => {
                      setValue("visitors_setting", newValue);
                    }}
                    getOptionProps={false}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        multiline
                        className="mui_text_field"
                        label=" "
                        InputLabelProps={{ shrink: false, disableUnderline: true, }}
                        disableUnderline={true}
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: 'off',
                        }}
                      />
                    )}
                    renderOption={(props, option) => (
                      <MenuList {...props} className="mui_options_menu_list_render">
                        <MenuItem className="mui_options_menu_item_render">{option.value}</MenuItem>
                      </MenuList>
                    )}
                  />
                )
              )}
            />
            <span className="field_error">
              {errors.visitors_setting?.type == "required" && "Visitors Setting is required"}
            </span>
          </div>
        </div>
        <div className="sfdb_btns_side">
          {
            isEditButtonMode.visitorsSettingEdit == false ? (
              <Button className="sfdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, visitorsSettingEdit: true })}>Edit</Button>
            ) : (
              <Button className="sfdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, visitorsSettingEdit: false });
                setValue("visitors_setting", tempPrivacyOptionsData.visitors_setting[0])
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

      {/* Shortlist Setting */}
      <div className="settings_form_data_box">
        <div className="sfdb_label_side">
          <h4 className='sfdb_label_title'>Shortlist Setting</h4>
        </div>
        <div className="sfdb_field_side">
          <div className="sfdb_field_side_body">
            <Controller
              control={control}
              name='shortlist_setting'
              rules={{
                required: true,
              }}
              defaultValue={tempPrivacyOptionsData.shortlist_setting[0]}
              render={({ field }) => (
                isEditButtonMode.shortlistSettingEdit == false ? (
                  <TextField
                    {...field}
                    fullWidth
                    multiline
                    inputProps={
                      { readOnly: isEditButtonMode.shortlistSettingEdit == false, }
                    }
                    className="mui_text_field"
                    label=" "
                    value={field.value?.value}
                    InputLabelProps={{ shrink: false, disableUnderline: true, }}
                    disableUnderline={true}
                    onChange={(event) => {
                      setValue("shortlist_setting", event.target.value)
                    }}
                  />
                ) : (
                  <Autocomplete
                    className="mui_autocomplete_field"
                    {...field}
                    popupIcon={<KeyboardArrowDownIcon />}
                    options={tempPrivacyOptionsData.shortlist_setting}
                    autoHighlight
                    getOptionLabel={(option) => option?.value || ""}
                    isOptionEqualToValue={(option, value) => option?.value || ""}
                    onChange={(event, newValue) => {
                      setValue("shortlist_setting", newValue);
                    }}
                    getOptionProps={false}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        multiline
                        className="mui_text_field"
                        label=" "
                        InputLabelProps={{ shrink: false, disableUnderline: true, }}
                        disableUnderline={true}
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: 'off',
                        }}
                      />
                    )}
                    renderOption={(props, option) => (
                      <MenuList {...props} className="mui_options_menu_list_render">
                        <MenuItem className="mui_options_menu_item_render">{option.value}</MenuItem>
                      </MenuList>
                    )}
                  />
                )
              )}
            />
            <span className="field_error">
              {errors.shortlist_setting?.type == "required" && "Shortlist Setting is required"}
            </span>
          </div>
        </div>
        <div className="sfdb_btns_side">
          {
            isEditButtonMode.shortlistSettingEdit == false ? (
              <Button className="sfdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, shortlistSettingEdit: true })}>Edit</Button>
            ) : (
              <Button className="sfdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, shortlistSettingEdit: false });
                setValue("shortlist_setting", tempPrivacyOptionsData.shortlist_setting[0])
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

      {/* Do Not Disturb */}
      <div className="settings_form_data_box">
        <div className="sfdb_label_side">
          <h4 className='sfdb_label_title'>Do Not Disturb</h4>
        </div>
        <div className="sfdb_field_side">
          <div className="sfdb_field_side_body">
            <Controller
              control={control}
              name='do_not_disturb'
              rules={{
                required: true,
              }}
              defaultValue={tempPrivacyOptionsData.do_not_disturb[0]}
              render={({ field }) => (
                isEditButtonMode.doNotDisturbEdit == false ? (
                  <TextField
                    {...field}
                    fullWidth
                    multiline
                    inputProps={
                      { readOnly: isEditButtonMode.doNotDisturbEdit == false, }
                    }
                    className="mui_text_field"
                    label=" "
                    value={field.value?.value}
                    InputLabelProps={{ shrink: false, disableUnderline: true, }}
                    disableUnderline={true}
                    onChange={(event) => {
                      setValue("do_not_disturb", event.target.value)
                    }}
                  />
                ) : (
                  <Autocomplete
                    className="mui_autocomplete_field"
                    {...field}
                    popupIcon={<KeyboardArrowDownIcon />}
                    options={tempPrivacyOptionsData.do_not_disturb}
                    autoHighlight
                    getOptionLabel={(option) => option?.value || ""}
                    isOptionEqualToValue={(option, value) => option?.value || ""}
                    onChange={(event, newValue) => {
                      setValue("do_not_disturb", newValue);
                    }}
                    getOptionProps={false}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        multiline
                        className="mui_text_field"
                        label=" "
                        InputLabelProps={{ shrink: false, disableUnderline: true, }}
                        disableUnderline={true}
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: 'off',
                        }}
                      />
                    )}
                    renderOption={(props, option) => (
                      <MenuList {...props} className="mui_options_menu_list_render">
                        <MenuItem className="mui_options_menu_item_render">{option.value}</MenuItem>
                      </MenuList>
                    )}
                  />
                )
              )}
            />
            <span className="field_error">
              {errors.do_not_disturb?.type == "required" && "Field is required"}
            </span>
          </div>
        </div>
        <div className="sfdb_btns_side">
          {
            isEditButtonMode.doNotDisturbEdit == false ? (
              <Button className="sfdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, doNotDisturbEdit: true })}>Edit</Button>
            ) : (
              <Button className="sfdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, doNotDisturbEdit: false });
                setValue("do_not_disturb", tempPrivacyOptionsData.do_not_disturb[0])
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

      {/* Profile Privacy */}
      <div className="settings_form_data_box">
        <div className="sfdb_label_side">
          <h4 className='sfdb_label_title'>Profile Privacy</h4>
        </div>
        <div className="sfdb_field_side">
          <div className="sfdb_field_side_body">
            <Controller
              control={control}
              name='profile_privacy'
              rules={{
                required: true,
              }}
              defaultValue={tempPrivacyOptionsData.profile_privacy[0]}
              render={({ field }) => (
                isEditButtonMode.profilePrivacyEdit == false ? (
                  <TextField
                    {...field}
                    fullWidth
                    multiline
                    inputProps={
                      { readOnly: isEditButtonMode.profilePrivacyEdit == false, }
                    }
                    className="mui_text_field"
                    label=" "
                    value={field.value?.value}
                    InputLabelProps={{ shrink: false, disableUnderline: true, }}
                    disableUnderline={true}
                    onChange={(event) => {
                      setValue("profile_privacy", event.target.value)
                    }}
                  />
                ) : (
                  <Autocomplete
                    className="mui_autocomplete_field"
                    {...field}
                    popupIcon={<KeyboardArrowDownIcon />}
                    options={tempPrivacyOptionsData.profile_privacy}
                    autoHighlight
                    getOptionLabel={(option) => option?.value || ""}
                    isOptionEqualToValue={(option, value) => option?.value || ""}
                    onChange={(event, newValue) => {
                      setValue("profile_privacy", newValue);
                    }}
                    getOptionProps={false}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        multiline
                        className="mui_text_field"
                        label=" "
                        InputLabelProps={{ shrink: false, disableUnderline: true, }}
                        disableUnderline={true}
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: 'off',
                        }}
                      />
                    )}
                    renderOption={(props, option) => (
                      <MenuList {...props} className="mui_options_menu_list_render">
                        <MenuItem className="mui_options_menu_item_render">{option.value}</MenuItem>
                      </MenuList>
                    )}
                  />
                )
              )}
            />
            <span className="field_error">
              {errors.profile_privacy?.type == "required" && "Profile Privacy is required"}
            </span>
          </div>
        </div>
        <div className="sfdb_btns_side">
          {
            isEditButtonMode.profilePrivacyEdit == false ? (
              <Button className="sfdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, profilePrivacyEdit: true })}>Edit</Button>
            ) : (
              <Button className="sfdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, profilePrivacyEdit: false });
                setValue("profile_privacy", tempPrivacyOptionsData.profile_privacy[0])
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

      {/* Web Notifications */}
      <div className="settings_form_data_box">
        <div className="sfdb_label_side">
          <h4 className='sfdb_label_title'>Web Notifications</h4>
        </div>
        <div className="sfdb_field_side">
          <div className="sfdb_field_side_body">
            <Controller
              control={control}
              name='web_notifications'
              rules={{
                required: true,
              }}
              defaultValue={tempPrivacyOptionsData.web_notifications[0]}
              render={({ field }) => (
                isEditButtonMode.webNotificationsEdit == false ? (
                  <TextField
                    {...field}
                    fullWidth
                    multiline
                    inputProps={
                      { readOnly: isEditButtonMode.webNotificationsEdit == false, }
                    }
                    className="mui_text_field"
                    label=" "
                    value={field.value?.value}
                    InputLabelProps={{ shrink: false, disableUnderline: true, }}
                    disableUnderline={true}
                    onChange={(event) => {
                      setValue("web_notifications", event.target.value)
                    }}
                  />
                ) : (
                  <Autocomplete
                    className="mui_autocomplete_field"
                    {...field}
                    popupIcon={<KeyboardArrowDownIcon />}
                    options={tempPrivacyOptionsData.web_notifications}
                    autoHighlight
                    getOptionLabel={(option) => option?.value || ""}
                    isOptionEqualToValue={(option, value) => option?.value || ""}
                    onChange={(event, newValue) => {
                      setValue("web_notifications", newValue);
                    }}
                    getOptionProps={false}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        multiline
                        className="mui_text_field"
                        label=" "
                        InputLabelProps={{ shrink: false, disableUnderline: true, }}
                        disableUnderline={true}
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: 'off',
                        }}
                      />
                    )}
                    renderOption={(props, option) => (
                      <MenuList {...props} className="mui_options_menu_list_render">
                        <MenuItem className="mui_options_menu_item_render">{option.value}</MenuItem>
                      </MenuList>
                    )}
                  />
                )
              )}
            />
            <span className="field_error">
              {errors.web_notifications?.type == "required" && "Field is required"}
            </span>
          </div>
        </div>
        <div className="sfdb_btns_side">
          {
            isEditButtonMode.webNotificationsEdit == false ? (
              <Button className="sfdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, webNotificationsEdit: true })}>Edit</Button>
            ) : (
              <Button className="sfdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, webNotificationsEdit: false });
                setValue("web_notifications", tempPrivacyOptionsData.web_notifications[0])
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

    </div>
  )
}

export default PrivacyOptionsForm