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
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CrossIcon from '@mui/icons-material/HighlightOff';
import { heightOpt, martialStatusOpt, } from "../../../Data/profileCreationData"

const BasicDetailsForm = (props) => {
  const { control, register, setValue, getValues, errors, isEditButtonMode, setIsEditButtonMode } = props;

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const tempBasicDetailsData = {
    age: [20, 28],
    height: [10, 20],
    marital_status: martialStatusOpt,
    religion: [
      { id: 1, value: "Open to all" },
      { id: 2, value: "Open to Premium Members" },
      { id: 3, value: "Hide" },
    ],
    community: [
      { id: 1, value: "Open to all" },
      { id: 2, value: "Open to Premium Members" },
      { id: 3, value: "Hide" },
    ],
    mother_tongue: [
      { id: 1, value: "Open to all" },
      { id: 2, value: "Open to Premium Members" },
      { id: 3, value: "Hide" },
    ],
  }

  const handleChangeAge = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    const minDistance = 1;
    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue("age", [clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue("age", [clamped - minDistance, clamped]);
      }
    } else {
      setValue("age", newValue);
    }
  };

  const handleChangeHeight = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    const minDistance = 1;
    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue("height", [clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue("height", [clamped - minDistance, clamped]);
      }
    } else {
      setValue("height", newValue);
    }
  };

  return (
    <div className="preferences_form_data_wrapper">

      {/* Age */}
      <div className="preferences_form_data_box">
        <div className="pref_fdb_label_side">
          <h4 className='pref_fdb_label_title'>Age</h4>
        </div>
        <div className="pref_fdb_field_side">
          <div className={`sfdb_field_side_body ${isEditButtonMode.ageEdit == true ? "pref_fdb_slider_box" : ""}`}>
            <Controller
              control={control}
              name='age'
              rules={{
                required: true,
                pattern: /^(1[89]|[2-9]\d)$/gm,
              }}
              defaultValue={tempBasicDetailsData.age}
              render={({ field }) => (
                isEditButtonMode.ageEdit == false ? (
                  <TextField
                    {...field}
                    fullWidth
                    multiline
                    inputProps={
                      { readOnly: isEditButtonMode.ageEdit == false, }
                    }
                    className="mui_text_field"
                    label=" "
                    value={field?.value[0] + "-" + field?.value[1]}
                    InputLabelProps={{ shrink: false, disableUnderline: true, }}
                    disableUnderline={true}
                    onChange={(event) => {
                      setValue("age", event.target.value)
                    }}
                  />
                ) : (
                  <Slider
                    {...field}
                    disableSwap
                    size="small"
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    valueLabelFormat={(value) => {
                      return `${value} Years`
                    }}
                    getAriaLabel={(value) => {
                      return `${value} Years`
                    }}
                    min={18}
                    max={99}
                    marks={[
                      { value: 18, label: "18 Years" },
                      { value: 99, label: "99 Years" },
                    ]}
                    onChange={handleChangeAge}
                  />
                )
              )}
            />
            <span className="field_error">
              {errors.age?.type == "required" && "Field is required"}
            </span>
          </div>
        </div>
        <div className="pref_fdb_btns_side">
          {
            isEditButtonMode.ageEdit == false ? (
              <Button className="pref_fdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, ageEdit: true })}>Edit</Button>
            ) : (
              <Button className="pref_fdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, ageEdit: false });
                setValue("age", tempBasicDetailsData.age)
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

      {/* Height */}
      <div className="preferences_form_data_box">
        <div className="pref_fdb_label_side">
          <h4 className='pref_fdb_label_title'>Height</h4>
        </div>
        <div className="pref_fdb_field_side">
          <div className={`sfdb_field_side_body ${isEditButtonMode.heightEdit == true ? "pref_fdb_slider_box" : ""}`}>
            <Controller
              control={control}
              name='height'
              rules={{
                required: true,
                pattern: /^(1[89]|[2-9]\d)$/gm,
              }}
              defaultValue={tempBasicDetailsData.height}
              render={({ field }) => (
                isEditButtonMode.heightEdit == false ? (
                  <TextField
                    {...field}
                    fullWidth
                    multiline
                    inputProps={
                      { readOnly: isEditButtonMode.heightEdit == false, }
                    }
                    className="mui_text_field"
                    label=" "
                    value={heightOpt[field?.value[0]].label + " to " + heightOpt[field?.value[1]].label}
                    InputLabelProps={{ shrink: false, disableUnderline: true, }}
                    disableUnderline={true}
                    onChange={(event) => {
                      setValue("height", event.target.value)
                    }}
                  />
                ) : (
                  <Slider
                    {...field}
                    disableSwap
                    size="small"
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    valueLabelFormat={(value) => {
                      return `${heightOpt[value - 1]?.label}`
                    }}
                    getAriaLabel={(value) => {
                      return `${heightOpt[value - 1]?.label}`
                    }}
                    min={1}
                    max={heightOpt[heightOpt.length - 1]?.value}
                    // value={heightOpt}
                    marks={[
                      { ...heightOpt[0] },
                      { ...heightOpt[heightOpt.length - 1] },
                    ]}
                    onChange={handleChangeHeight}
                  />
                )
              )}
            />
            <span className="field_error">
              {errors.height?.type == "required" && "Field is required"}
            </span>
          </div>
        </div>
        <div className="pref_fdb_btns_side">
          {
            isEditButtonMode.heightEdit == false ? (
              <Button className="pref_fdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, heightEdit: true })}>Edit</Button>
            ) : (
              <Button className="pref_fdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, heightEdit: false });
                setValue("height", tempBasicDetailsData.height)
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

      {/* Marital Status */}
      <div className="preferences_form_data_box">
        <div className="pref_fdb_label_side">
          <h4 className='pref_fdb_label_title'>Marital Status</h4>
        </div>
        <div className="pref_fdb_field_side">
          <div className="pref_fdb_field_side_body">
            <Controller
              control={control}
              name='marital_status'
              rules={{
                required: true,
              }}
              defaultValue={tempBasicDetailsData.marital_status[0]}
              render={({ field }) => (
                <Autocomplete
                  className="mui_autocomplete_field"
                  {...field}
                  disabled={isEditButtonMode.maritalStatusEdit == false}
                  inputProps={
                    { readOnly: isEditButtonMode.maritalStatusEdit == false, }
                  }
                  popupIcon={<KeyboardArrowDownIcon />}
                  options={tempBasicDetailsData.marital_status}
                  autoHighlight
                  getOptionLabel={(option) => option?.value || ""}
                  isOptionEqualToValue={(option, value) => option?.value || ""}
                  onChange={(event, newValue) => {
                    setValue("marital_status", newValue);
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
              {errors.marital_status?.type == "required" && "Field is required"}
            </span>
          </div>
        </div>
        <div className="pref_fdb_btns_side">
          {
            isEditButtonMode.maritalStatusEdit == false ? (
              <Button className="pref_fdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, maritalStatusEdit: true })}>Edit</Button>
            ) : (
              <Button className="pref_fdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, maritalStatusEdit: false });
                setValue("marital_status", tempBasicDetailsData.marital_status[0])
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

      {/* Religion */}
      <div className="preferences_form_data_box">
        <div className="pref_fdb_label_side">
          <h4 className='pref_fdb_label_title'>Religion</h4>
        </div>
        <div className="pref_fdb_field_side">
          <div className="pref_fdb_field_side_body">
            <Controller
              control={control}
              name='religion'
              rules={{
                required: true,
              }}
              defaultValue={tempBasicDetailsData.religion[0]}
              render={({ field }) => (
                <Autocomplete
                  className="mui_autocomplete_field"
                  {...field}
                  disabled={isEditButtonMode.religionEdit == false}
                  inputProps={
                    { readOnly: isEditButtonMode.religionEdit == false, }
                  }
                  popupIcon={<KeyboardArrowDownIcon />}
                  options={tempBasicDetailsData.religion}
                  autoHighlight
                  getOptionLabel={(option) => option?.value || ""}
                  isOptionEqualToValue={(option, value) => option?.value || ""}
                  onChange={(event, newValue) => {
                    setValue("religion", newValue);
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
              {errors.religion?.type == "required" && "Field is required"}
            </span>
          </div>
        </div>
        <div className="pref_fdb_btns_side">
          {
            isEditButtonMode.religionEdit == false ? (
              <Button className="pref_fdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, religionEdit: true })}>Edit</Button>
            ) : (
              <Button className="pref_fdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, religionEdit: false });
                setValue("religion", tempBasicDetailsData.religion[0])
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

      {/* Community */}
      <div className="preferences_form_data_box">
        <div className="pref_fdb_label_side">
          <h4 className='pref_fdb_label_title'>Community</h4>
        </div>
        <div className="pref_fdb_field_side">
          <div className="pref_fdb_field_side_body">
            <Controller
              control={control}
              name='community'
              rules={{
                required: true,
              }}
              defaultValue={tempBasicDetailsData.community[0]}
              render={({ field }) => (
                <Autocomplete
                  className="mui_autocomplete_field"
                  {...field}
                  disabled={isEditButtonMode.communityEdit == false}
                  inputProps={
                    { readOnly: isEditButtonMode.communityEdit == false, }
                  }
                  popupIcon={<KeyboardArrowDownIcon />}
                  options={tempBasicDetailsData.community}
                  autoHighlight
                  getOptionLabel={(option) => option?.value || ""}
                  isOptionEqualToValue={(option, value) => option?.value || ""}
                  onChange={(event, newValue) => {
                    setValue("community", newValue);
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
              {errors.community?.type == "required" && "Field is required"}
            </span>
          </div>
        </div>
        <div className="pref_fdb_btns_side">
          {
            isEditButtonMode.communityEdit == false ? (
              <Button className="pref_fdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, communityEdit: true })}>Edit</Button>
            ) : (
              <Button className="pref_fdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, communityEdit: false });
                setValue("community", tempBasicDetailsData.community[0])
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

      {/* Mother Tongue */}
      <div className="preferences_form_data_box">
        <div className="pref_fdb_label_side">
          <h4 className='pref_fdb_label_title'>Mother Tongue</h4>
        </div>
        <div className="pref_fdb_field_side">
          <div className="pref_fdb_field_side_body">
            <Controller
              control={control}
              name='mother_tongue'
              rules={{
                required: true,
              }}
              defaultValue={tempBasicDetailsData.mother_tongue[0]}
              render={({ field }) => (
                <Autocomplete
                  className="mui_autocomplete_field"
                  {...field}
                  disabled={isEditButtonMode.motherTongueEdit == false}
                  inputProps={
                    { readOnly: isEditButtonMode.motherTongueEdit == false, }
                  }
                  popupIcon={<KeyboardArrowDownIcon />}
                  options={tempBasicDetailsData.mother_tongue}
                  autoHighlight
                  getOptionLabel={(option) => option?.value || ""}
                  isOptionEqualToValue={(option, value) => option?.value || ""}
                  onChange={(event, newValue) => {
                    setValue("mother_tongue", newValue);
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
              {errors.mother_tongue?.type == "required" && "Field is required"}
            </span>
          </div>
        </div>
        <div className="pref_fdb_btns_side">
          {
            isEditButtonMode.motherTongueEdit == false ? (
              <Button className="pref_fdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, motherTongueEdit: true })}>Edit</Button>
            ) : (
              <Button className="pref_fdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, motherTongueEdit: false });
                setValue("mother_tongue", tempBasicDetailsData.mother_tongue[0])
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

    </div>
  )
}

export default BasicDetailsForm