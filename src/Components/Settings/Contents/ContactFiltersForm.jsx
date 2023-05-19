/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
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
import { heightOpt, martialStatusOpt, } from "../../../Data/profileCreationData"

const ContactFiltersForm = (props) => {
  const { control, register, setValue, getValues, errors, isEditButtonMode, setIsEditButtonMode } = props;

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const tempContactFiltersData = {
    age: [20, 28],
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
    marital_status: martialStatusOpt,
    height: [10, 20],
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
    <div className="settings_form_data_wrapper">

      {/* Age */}
      <div className="settings_form_data_box">
        <div className="sfdb_label_side">
          <h4 className='sfdb_label_title'>Age</h4>
        </div>
        <div className="sfdb_field_side">
          <div className={`sfdb_field_side_body ${isEditButtonMode.ageEdit == true ? "sfdb_slider_box" : ""}`}>
            <Controller
              control={control}
              name='age'
              rules={{
                required: true,
                pattern: /^(1[89]|[2-9]\d)$/gm,
              }}
              defaultValue={tempContactFiltersData.age}
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
        <div className="sfdb_btns_side">
          {
            isEditButtonMode.ageEdit == false ? (
              <Button className="sfdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, ageEdit: true })}>Edit</Button>
            ) : (
              <Button className="sfdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, ageEdit: false });
                setValue("age", tempContactFiltersData.age)
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

      {/* Religion */}
      <div className="settings_form_data_box">
        <div className="sfdb_label_side">
          <h4 className='sfdb_label_title'>Religion</h4>
        </div>
        <div className="sfdb_field_side">
          <div className="sfdb_field_side_body">
            <Controller
              control={control}
              name='religion'
              rules={{
                required: true,
              }}
              defaultValue={tempContactFiltersData.religion[0]}
              render={({ field }) => (
                isEditButtonMode.religionEdit == false ? (
                  <TextField
                    {...field}
                    fullWidth
                    multiline
                    inputProps={
                      { readOnly: isEditButtonMode.religionEdit == false, }
                    }
                    className="mui_text_field"
                    label=" "
                    value={field.value?.value}
                    InputLabelProps={{ shrink: false, disableUnderline: true, }}
                    disableUnderline={true}
                    onChange={(event) => {
                      setValue("religion", event.target.value)
                    }}
                  />
                ) : (
                  <Autocomplete
                    className="mui_autocomplete_field"
                    {...field}
                    popupIcon={<KeyboardArrowDownIcon />}
                    options={tempContactFiltersData.religion}
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
                )
              )}
            />
            <span className="field_error">
              {errors.religion?.type == "required" && "Religion is required"}
            </span>
          </div>
        </div>
        <div className="sfdb_btns_side">
          {
            isEditButtonMode.religionEdit == false ? (
              <Button className="sfdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, religionEdit: true })}>Edit</Button>
            ) : (
              <Button className="sfdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, religionEdit: false });
                setValue("religion", tempContactFiltersData.religion[0])
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

      {/* Community */}
      <div className="settings_form_data_box">
        <div className="sfdb_label_side">
          <h4 className='sfdb_label_title'>Community</h4>
        </div>
        <div className="sfdb_field_side">
          <div className="sfdb_field_side_body">
            <Controller
              control={control}
              name='community'
              rules={{
                required: true,
              }}
              defaultValue={tempContactFiltersData.community[0]}
              render={({ field }) => (
                isEditButtonMode.communityEdit == false ? (
                  <TextField
                    {...field}
                    fullWidth
                    multiline
                    inputProps={
                      { readOnly: isEditButtonMode.communityEdit == false, }
                    }
                    className="mui_text_field"
                    label=" "
                    value={field.value?.value}
                    InputLabelProps={{ shrink: false, disableUnderline: true, }}
                    disableUnderline={true}
                    onChange={(event) => {
                      setValue("community", event.target.value)
                    }}
                  />
                ) : (
                  <Autocomplete
                    className="mui_autocomplete_field"
                    {...field}
                    popupIcon={<KeyboardArrowDownIcon />}
                    options={tempContactFiltersData.community}
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
                )
              )}
            />
            <span className="field_error">
              {errors.community?.type == "required" && "Community is required"}
            </span>
          </div>
        </div>
        <div className="sfdb_btns_side">
          {
            isEditButtonMode.communityEdit == false ? (
              <Button className="sfdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, communityEdit: true })}>Edit</Button>
            ) : (
              <Button className="sfdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, communityEdit: false });
                setValue("community", tempContactFiltersData.community[0])
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

      {/* Mother Tongue */}
      <div className="settings_form_data_box">
        <div className="sfdb_label_side">
          <h4 className='sfdb_label_title'>Mother Tongue</h4>
        </div>
        <div className="sfdb_field_side">
          <div className="sfdb_field_side_body">
            <Controller
              control={control}
              name='mother_tongue'
              rules={{
                required: true,
              }}
              defaultValue={tempContactFiltersData.mother_tongue[0]}
              render={({ field }) => (
                isEditButtonMode.motherTongueEdit == false ? (
                  <TextField
                    {...field}
                    fullWidth
                    multiline
                    inputProps={
                      { readOnly: isEditButtonMode.motherTongueEdit == false, }
                    }
                    className="mui_text_field"
                    label=" "
                    value={field.value?.value}
                    InputLabelProps={{ shrink: false, disableUnderline: true, }}
                    disableUnderline={true}
                    onChange={(event) => {
                      setValue("mother_tongue", event.target.value)
                    }}
                  />
                ) : (
                  <Autocomplete
                    className="mui_autocomplete_field"
                    {...field}
                    popupIcon={<KeyboardArrowDownIcon />}
                    options={tempContactFiltersData.mother_tongue}
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
                )
              )}
            />
            <span className="field_error">
              {errors.mother_tongue?.type == "required" && "Mother Tongue is required"}
            </span>
          </div>
        </div>
        <div className="sfdb_btns_side">
          {
            isEditButtonMode.motherTongueEdit == false ? (
              <Button className="sfdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, motherTongueEdit: true })}>Edit</Button>
            ) : (
              <Button className="sfdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, motherTongueEdit: false });
                setValue("mother_tongue", tempContactFiltersData.mother_tongue[0])
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

      {/* Marital Status */}
      <div className="settings_form_data_box">
        <div className="sfdb_label_side">
          <h4 className='sfdb_label_title'>Marital Status</h4>
        </div>
        <div className="sfdb_field_side">
          <div className="sfdb_field_side_body">
            <Controller
              control={control}
              name='marital_status'
              rules={{
                required: true,
              }}
              defaultValue={tempContactFiltersData.marital_status[0]}
              render={({ field }) => (
                isEditButtonMode.maritalStatusEdit == false ? (
                  <TextField
                    {...field}
                    fullWidth
                    multiline
                    inputProps={
                      { readOnly: isEditButtonMode.maritalStatusEdit == false, }
                    }
                    className="mui_text_field"
                    label=" "
                    value={field.value?.value}
                    InputLabelProps={{ shrink: false, disableUnderline: true, }}
                    disableUnderline={true}
                    onChange={(event) => {
                      setValue("marital_status", event.target.value)
                    }}
                  />
                ) : (
                  <Autocomplete
                    className="mui_autocomplete_field"
                    {...field}
                    popupIcon={<KeyboardArrowDownIcon />}
                    options={tempContactFiltersData.marital_status}
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
                )
              )}
            />
            <span className="field_error">
              {errors.marital_status?.type == "required" && "Field is required"}
            </span>
          </div>
        </div>
        <div className="sfdb_btns_side">
          {
            isEditButtonMode.maritalStatusEdit == false ? (
              <Button className="sfdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, maritalStatusEdit: true })}>Edit</Button>
            ) : (
              <Button className="sfdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, maritalStatusEdit: false });
                setValue("marital_status", tempContactFiltersData.marital_status[0])
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

      {/* Height */}
      <div className="settings_form_data_box">
        <div className="sfdb_label_side">
          <h4 className='sfdb_label_title'>Height</h4>
        </div>
        <div className="sfdb_field_side">
          <div className={`sfdb_field_side_body ${isEditButtonMode.heightEdit == true ? "sfdb_slider_box" : ""}`}>
            <Controller
              control={control}
              name='height'
              rules={{
                required: true,
                pattern: /^(1[89]|[2-9]\d)$/gm,
              }}
              defaultValue={tempContactFiltersData.height}
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
        <div className="sfdb_btns_side">
          {
            isEditButtonMode.heightEdit == false ? (
              <Button className="sfdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, heightEdit: true })}>Edit</Button>
            ) : (
              <Button className="sfdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, heightEdit: false });
                setValue("height", tempContactFiltersData.height)
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

    </div>
  )
}

export default ContactFiltersForm