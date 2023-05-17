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
  Box,
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CrossIcon from '@mui/icons-material/HighlightOff';

const LocationForm = (props) => {
  const { control, register, setValue, getValues, errors, isEditButtonMode, setIsEditButtonMode } = props;

  const tempLocationDetailsData = {
    country_residence_in_show: [
      { id: 1, value: "Open to all" },
      { id: 2, value: "Open to Premium Members" },
      { id: 3, value: "Hide" },
    ],
    city_living_in_show: [
      { id: 1, value: "Open to all" },
      { id: 2, value: "Open to Premium Members" },
      { id: 3, value: "Hide" },
    ],
  }

  // countryResidenceInEdit: false,
  // citylivingInEdit: false,

  return (
    <div className="preferences_form_data_wrapper">

      {/* Country Residence In  */}
      <div className="preferences_form_data_box">
        <div className="pref_fdb_label_side">
          <h4 className='pref_fdb_label_title'>Country Residence In</h4>
        </div>
        <div className="pref_fdb_field_side">
          <div className="pref_fdb_field_side_body">
            <Controller
              control={control}
              name='country_residence_in_show'
              rules={{
                required: true,
              }}
              defaultValue={tempLocationDetailsData.country_residence_in_show[0]}
              render={({ field }) => (
                <Autocomplete
                  className="mui_autocomplete_field"
                  {...field}
                  disabled={isEditButtonMode.countryResidenceInEdit == false}
                  inputProps={
                    { readOnly: isEditButtonMode.countryResidenceInEdit == false, }
                  }
                  popupIcon={<KeyboardArrowDownIcon />}
                  options={tempLocationDetailsData.country_residence_in_show}
                  autoHighlight
                  getOptionLabel={(option) => option?.value || ""}
                  isOptionEqualToValue={(option, value) => option?.value || ""}
                  onChange={(event, newValue) => {
                    setValue("country_residence_in_show", newValue);
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
              {errors.country_residence_in_show?.type == "required" && "Field is required"}
            </span>
          </div>
        </div>
        <div className="pref_fdb_btns_side">
          {
            isEditButtonMode.countryResidenceInEdit == false ? (
              <Button className="pref_fdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, countryResidenceInEdit: true })}>Edit</Button>
            ) : (
              <Button className="pref_fdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, countryResidenceInEdit: false });
                setValue("country_residence_in_show", tempLocationDetailsData.country_residence_in_show[0])
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

      {/* City Living In  */}
      <div className="preferences_form_data_box">
        <div className="pref_fdb_label_side">
          <h4 className='pref_fdb_label_title'>City Living In</h4>
        </div>
        <div className="pref_fdb_field_side">
          <div className="pref_fdb_field_side_body">
            <Controller
              control={control}
              name='city_living_in_show'
              rules={{
                required: true,
              }}
              defaultValue={tempLocationDetailsData.city_living_in_show[0]}
              render={({ field }) => (
                <Autocomplete
                  className="mui_autocomplete_field"
                  {...field}
                  disabled={isEditButtonMode.citylivingInEdit == false}
                  inputProps={
                    { readOnly: isEditButtonMode.citylivingInEdit == false, }
                  }
                  popupIcon={<KeyboardArrowDownIcon />}
                  options={tempLocationDetailsData.city_living_in_show}
                  autoHighlight
                  getOptionLabel={(option) => option?.value || ""}
                  isOptionEqualToValue={(option, value) => option?.value || ""}
                  onChange={(event, newValue) => {
                    setValue("city_living_in_show", newValue);
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
              {errors.city_living_in_show?.type == "required" && "Field is required"}
            </span>
          </div>
        </div>
        <div className="pref_fdb_btns_side">
          {
            isEditButtonMode.citylivingInEdit == false ? (
              <Button className="pref_fdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, citylivingInEdit: true })}>Edit</Button>
            ) : (
              <Button className="pref_fdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, citylivingInEdit: false });
                setValue("city_living_in_show", tempLocationDetailsData.city_living_in_show[0])
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

    </div>
  )
}

export default LocationForm