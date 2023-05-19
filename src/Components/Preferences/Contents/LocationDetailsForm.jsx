/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./PreferencesContents.css"
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

const LocationDetailsForm = (props) => {
  const { control, register, setValue, getValues, errors, isEditButtonMode, setIsEditButtonMode } = props;

  const tempLocationDetailsData = {
    location_mother_tongue: [
      { id: 1, value: "Open to all" },
      { id: 2, value: "Open to Premium Members" },
      { id: 3, value: "Hide" },
    ],
    state_living_in_show: [
      { id: 1, value: "Open to all" },
      { id: 2, value: "Open to Premium Members" },
      { id: 3, value: "Hide" },
    ],
    residency_status_show: [
      { id: 1, value: "Open to all" },
      { id: 2, value: "Open to Premium Members" },
      { id: 3, value: "Hide" },
    ],
  }

  return (
    <div className="preferences_form_data_wrapper">

      {/* Mother Tongue */}
      <div className="preferences_form_data_box">
        <div className="pref_fdb_label_side">
          <h4 className='pref_fdb_label_title'>Mother Tongue</h4>
        </div>
        <div className="pref_fdb_field_side">
          <div className="pref_fdb_field_side_body">
            <Controller
              control={control}
              name='location_mother_tongue'
              rules={{
                required: true,
              }}
              defaultValue={tempLocationDetailsData.location_mother_tongue[0]}
              render={({ field }) => (
                <Autocomplete
                  className="mui_autocomplete_field"
                  {...field}
                  disabled={isEditButtonMode.locationMotherTongueEdit == false}
                  inputProps={
                    { readOnly: isEditButtonMode.locationMotherTongueEdit == false, }
                  }
                  popupIcon={<KeyboardArrowDownIcon />}
                  options={tempLocationDetailsData.location_mother_tongue}
                  autoHighlight
                  getOptionLabel={(option) => option?.value || ""}
                  isOptionEqualToValue={(option, value) => option?.value || ""}
                  onChange={(event, newValue) => {
                    setValue("location_mother_tongue", newValue);
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
              )}
            />
            <span className="field_error">
              {errors.location_mother_tongue?.type == "required" && "Field is required"}
            </span>
          </div>
        </div>
        <div className="pref_fdb_btns_side">
          {
            isEditButtonMode.locationMotherTongueEdit == false ? (
              <Button className="pref_fdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, locationMotherTongueEdit: true })}>Edit</Button>
            ) : (
              <Button className="pref_fdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, locationMotherTongueEdit: false });
                setValue("location_mother_tongue", tempLocationDetailsData.location_mother_tongue[0])
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

      {/* State Living In  */}
      <div className="preferences_form_data_box">
        <div className="pref_fdb_label_side">
          <h4 className='pref_fdb_label_title'>State Living In</h4>
        </div>
        <div className="pref_fdb_field_side">
          <div className="pref_fdb_field_side_body">
            <Controller
              control={control}
              name='state_living_in_show'
              rules={{
                required: true,
              }}
              defaultValue={tempLocationDetailsData.state_living_in_show[0]}
              render={({ field }) => (
                <Autocomplete
                  className="mui_autocomplete_field"
                  {...field}
                  disabled={isEditButtonMode.stateLivingInEdit == false}
                  inputProps={
                    { readOnly: isEditButtonMode.stateLivingInEdit == false, }
                  }
                  popupIcon={<KeyboardArrowDownIcon />}
                  options={tempLocationDetailsData.state_living_in_show}
                  autoHighlight
                  getOptionLabel={(option) => option?.value || ""}
                  isOptionEqualToValue={(option, value) => option?.value || ""}
                  onChange={(event, newValue) => {
                    setValue("state_living_in_show", newValue);
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
              )}
            />
            <span className="field_error">
              {errors.state_living_in_show?.type == "required" && "Field is required"}
            </span>
          </div>
        </div>
        <div className="pref_fdb_btns_side">
          {
            isEditButtonMode.stateLivingInEdit == false ? (
              <Button className="pref_fdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, stateLivingInEdit: true })}>Edit</Button>
            ) : (
              <Button className="pref_fdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, stateLivingInEdit: false });
                setValue("state_living_in_show", tempLocationDetailsData.state_living_in_show[0])
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

      {/* Residency Status */}
      <div className="preferences_form_data_box">
        <div className="pref_fdb_label_side">
          <h4 className='pref_fdb_label_title'>Residency Status </h4>
        </div>
        <div className="pref_fdb_field_side">
          <div className="pref_fdb_field_side_body">
            <Controller
              control={control}
              name='residency_status_show'
              rules={{
                required: true,
              }}
              defaultValue={tempLocationDetailsData.residency_status_show[0]}
              render={({ field }) => (
                <Autocomplete
                  className="mui_autocomplete_field"
                  {...field}
                  disabled={isEditButtonMode.residencyStatusEdit == false}
                  inputProps={
                    { readOnly: isEditButtonMode.residencyStatusEdit == false, }
                  }
                  popupIcon={<KeyboardArrowDownIcon />}
                  options={tempLocationDetailsData.residency_status_show}
                  autoHighlight
                  getOptionLabel={(option) => option?.value || ""}
                  isOptionEqualToValue={(option, value) => option?.value || ""}
                  onChange={(event, newValue) => {
                    setValue("residency_status_show", newValue);
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
              )}
            />
            <span className="field_error">
              {errors.residency_status_show?.type == "required" && "Field is required"}
            </span>
          </div>
        </div>
        <div className="pref_fdb_btns_side">
          {
            isEditButtonMode.residencyStatusEdit == false ? (
              <Button className="pref_fdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, residencyStatusEdit: true })}>Edit</Button>
            ) : (
              <Button className="pref_fdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, residencyStatusEdit: false });
                setValue("residency_status_show", tempLocationDetailsData.residency_status_show[0])
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

    </div>
  )
}

export default LocationDetailsForm