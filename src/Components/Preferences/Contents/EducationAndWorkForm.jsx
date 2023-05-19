/* eslint-disable no-unused-vars */
import React from 'react'
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

const EducationAndWorkForm = (props) => {
  const { control, register, setValue, getValues, errors, isEditButtonMode, setIsEditButtonMode } = props;

  const tempEducationAndWorkData = {
    qualification_show: [
      { id: 1, value: "Open to All", },
      { id: 2, value: "Visible to Premium Members", },
      { id: 3, value: "Hide", },
    ],
    working_with_show: [
      { id: 1, value: "Open to All", },
      { id: 2, value: "Visible to Premium Members", },
      { id: 3, value: "Hide", },
    ],
    profession_area_show: [
      { id: 1, value: "Open to All", },
      { id: 2, value: "Visible to Premium Members", },
      { id: 3, value: "Hide", },
    ],
    annual_income_visibility: [
      { id: 1, value: "Open to All", },
      { id: 2, value: "Specifiy an income range", },
      { id: 3, value: "Hide", },
    ],
  }

  return (
    <div className="preferences_form_data_wrapper">

      {/* Qualification */}
      <div className="preferences_form_data_box">
        <div className="pref_fdb_label_side">
          <h4 className='pref_fdb_label_title'>Qualification</h4>
        </div>
        <div className="pref_fdb_field_side">
          <div className="pref_fdb_field_side_body">
            <Controller
              control={control}
              name='qualification_show'
              rules={{
                required: true,
              }}
              defaultValue={tempEducationAndWorkData.qualification_show[0]}
              render={({ field }) => (
                <Autocomplete
                  className="mui_autocomplete_field"
                  {...field}
                  disabled={isEditButtonMode.qualificationEdit == false}
                  inputProps={
                    { readOnly: isEditButtonMode.qualificationEdit == false, }
                  }
                  popupIcon={<KeyboardArrowDownIcon />}
                  options={tempEducationAndWorkData.qualification_show}
                  autoHighlight
                  getOptionLabel={(option) => option?.value || ""}
                  isOptionEqualToValue={(option, value) => option?.value || ""}
                  onChange={(event, newValue) => {
                    setValue("qualification_show", newValue);
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
              {errors.qualification_show?.type == "required" && "Field is required"}
            </span>
          </div>
        </div>
        <div className="pref_fdb_btns_side">
          {
            isEditButtonMode.qualificationEdit == false ? (
              <Button className="pref_fdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, qualificationEdit: true })}>Edit</Button>
            ) : (
              <Button className="pref_fdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, qualificationEdit: false });
                setValue("qualification_show", tempEducationAndWorkData.qualification_show[0])
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

      {/* Working With  */}
      <div className="preferences_form_data_box">
        <div className="pref_fdb_label_side">
          <h4 className='pref_fdb_label_title'>Working With</h4>
        </div>
        <div className="pref_fdb_field_side">
          <div className="pref_fdb_field_side_body">
            <Controller
              control={control}
              name='working_with_show'
              rules={{
                required: true,
              }}
              defaultValue={tempEducationAndWorkData.working_with_show[0]}
              render={({ field }) => (
                <Autocomplete
                  className="mui_autocomplete_field"
                  {...field}
                  disabled={isEditButtonMode.workingWithEdit == false}
                  inputProps={
                    { readOnly: isEditButtonMode.workingWithEdit == false, }
                  }
                  popupIcon={<KeyboardArrowDownIcon />}
                  options={tempEducationAndWorkData.working_with_show}
                  autoHighlight
                  getOptionLabel={(option) => option?.value || ""}
                  isOptionEqualToValue={(option, value) => option?.value || ""}
                  onChange={(event, newValue) => {
                    setValue("working_with_show", newValue);
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
              {errors.working_with_show?.type == "required" && "Shortlist Setting is required"}
            </span>
          </div>
        </div>
        <div className="pref_fdb_btns_side">
          {
            isEditButtonMode.workingWithEdit == false ? (
              <Button className="pref_fdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, workingWithEdit: true })}>Edit</Button>
            ) : (
              <Button className="pref_fdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, workingWithEdit: false });
                setValue("working_with_show", tempEducationAndWorkData.working_with_show[0])
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

      {/* Profession Area */}
      <div className="preferences_form_data_box">
        <div className="pref_fdb_label_side">
          <h4 className='pref_fdb_label_title'>Profession Area</h4>
        </div>
        <div className="pref_fdb_field_side">
          <div className="pref_fdb_field_side_body">
            <Controller
              control={control}
              name='profession_area_show'
              rules={{
                required: true,
              }}
              defaultValue={tempEducationAndWorkData.profession_area_show[0]}
              render={({ field }) => (
                <Autocomplete
                  className="mui_autocomplete_field"
                  {...field}
                  disabled={isEditButtonMode.professionAreaEdit == false}
                  inputProps={
                    { readOnly: isEditButtonMode.professionAreaEdit == false, }
                  }
                  popupIcon={<KeyboardArrowDownIcon />}
                  options={tempEducationAndWorkData.profession_area_show}
                  autoHighlight
                  getOptionLabel={(option) => option?.value || ""}
                  isOptionEqualToValue={(option, value) => option?.value || ""}
                  onChange={(event, newValue) => {
                    setValue("profession_area_show", newValue);
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
              {errors.profession_area_show?.type == "required" && "Field is required"}
            </span>
          </div>
        </div>
        <div className="pref_fdb_btns_side">
          {
            isEditButtonMode.professionAreaEdit == false ? (
              <Button className="pref_fdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, professionAreaEdit: true })}>Edit</Button>
            ) : (
              <Button className="pref_fdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, professionAreaEdit: false });
                setValue("profession_area_show", tempEducationAndWorkData.profession_area_show[0])
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

      {/* Annual Income */}
      <div className="preferences_form_data_box">
        <div className="pref_fdb_label_side">
          <h4 className='pref_fdb_label_title'>Annual Income</h4>
        </div>
        <div className="pref_fdb_field_side">
          <div className="pref_fdb_field_side_body">
            <div className='mt-2'>
              <Controller
                control={control}
                name='annual_income_visibility'
                rules={{
                  required: true,
                }}
                defaultValue={2}
                render={({ field }) => (
                  <FormControl className="mui_form_control pref_radio_group_control" fullWidth>
                    <RadioGroup
                      {...field}
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      onChange={(event) => {
                        setValue("annual_income_visibility", event.target.value);
                      }}
                    >
                      <FormControlLabel
                        value={1}
                        control={<Radio />}
                        label="Open to All"
                        disabled={isEditButtonMode.annualIncomeVisibilityEdit == false}
                      />
                      <FormControlLabel
                        value={2}
                        control={<Radio />}
                        label="Specifiy an income range"
                        disabled={isEditButtonMode.annualIncomeVisibilityEdit == false}
                      />
                    </RadioGroup>
                  </FormControl>
                )}
              />
              <span className="field_error">
                {errors.annual_income_visibility?.type == "required" && "Field is required"}
              </span>
            </div>
            <div className='mb-2'>
              <Controller
                control={control}
                name='annual_income_visibility_include'
                rules={{
                  required: false,
                }}
                defaultValue={false}
                render={({ field }) => (
                  <FormControlLabel
                    {...field}
                    fullWidth
                    className="pref_checkbox_control pref_radio_group_control"
                    disabled={isEditButtonMode.annualIncomeVisibilityEdit == false}
                    control={<Checkbox />}
                    label="Include Profiles who have not specified their income"
                    onChange={(event) => {
                      setValue("annual_income_visibility_include", event.target.checked);
                    }}
                  />
                )}
              />
              <span className="field_error">
                {errors.annual_income_visibility_include?.type == "required" && "Field is required"}
              </span>
            </div>
          </div>
        </div>
        <div className="pref_fdb_btns_side">
          {
            isEditButtonMode.annualIncomeVisibilityEdit == false ? (
              <Button className="pref_fdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, annualIncomeVisibilityEdit: true })}>Edit</Button>
            ) : (
              <Button className="pref_fdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, annualIncomeVisibilityEdit: false });
                setValue("annual_income_visibility_include", 2)
                setValue("annual_income_visibility_include", false)
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

    </div>
  )
}

export default EducationAndWorkForm