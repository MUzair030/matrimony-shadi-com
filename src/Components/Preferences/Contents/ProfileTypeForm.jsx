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
import SweetAlert from "sweetalert2";
import CrossIcon from '@mui/icons-material/HighlightOff';

const ProfileTypeForm = (props) => {
  const { control, register, setValue, getValues, errors, isEditButtonMode, setIsEditButtonMode } = props;

  const profileCreatedByInitialValues = {
    diet_open_to_all: false,
    diet_veg: false,
    diet_non_veg: false,
    diet_vegan: false,
  }
  const dietInitialValues = {
    profile_created_by_val_open_to_all: false,
    profile_created_by_val_self: false,
    profile_created_by_val_guardian: false,
    profile_created_by_siblings: false,
  }
  const [profileCreatedByState, setProfileCreatedByState] = useState(profileCreatedByInitialValues)
  const [dietState, setDietState] = useState(dietInitialValues)

  const handleChangeProfileCreatedBy = (event) => {
    let profileCreatedBy_State = {
      ...profileCreatedByState,
      [event.target.name]: event.target.checked,
    }
    setProfileCreatedByState(profileCreatedBy_State);
    setValue("profile_created_by", profileCreatedBy_State);
    // console.log("profileCreatedBy_State", profileCreatedBy_State)
  };

  const handleChangeDiet = (event) => {
    let Diet_State = {
      ...dietState,
      [event.target.name]: event.target.checked,
    }
    setDietState(Diet_State);
    setValue("diet", Diet_State);
    // console.log("Diet_State", Diet_State)
  };

  return (
    <div className="preferences_form_data_wrapper">

      {/* Profile Created By */}
      <div className="preferences_form_data_box">
        <div className="pref_fdb_label_side">
          <h4 className='pref_fdb_label_title'>Profile Created By</h4>
        </div>
        <div className="pref_fdb_field_side">
          <div className="pref_fdb_field_side_body">
            <Controller
              control={control}
              name='profile_created_by'
              rules={{
                required: true,
              }}
              defaultValue={profileCreatedByInitialValues}
              render={({ field }) => (
                <FormGroup className="mui_form_control pref_checkbox_group" row={false} fullWidth>
                  <FormControlLabel
                    className="pref_checkbox_control"
                    name="profile_created_by_val_open_to_all"
                    control={<Checkbox defaultChecked />}
                    label="Open to All"
                    onChange={handleChangeProfileCreatedBy}
                    disabled={isEditButtonMode.profileCreatedByEdit == false}
                  />
                  <FormControlLabel
                    className="pref_checkbox_control"
                    name="profile_created_by_val_self"
                    control={<Checkbox />}
                    label="Self"
                    onChange={handleChangeProfileCreatedBy}
                    disabled={isEditButtonMode.profileCreatedByEdit == false}
                  />
                  <FormControlLabel
                    className="pref_checkbox_control"
                    name="profile_created_by_val_guardian"
                    control={<Checkbox />}
                    label="Parents / Guardian"
                    onChange={handleChangeProfileCreatedBy}
                    disabled={isEditButtonMode.profileCreatedByEdit == false}
                  />
                  <FormControlLabel
                    className="pref_checkbox_control"
                    name="profile_created_by_siblings"
                    control={<Checkbox />}
                    label="Sibilings"
                    onChange={handleChangeProfileCreatedBy}
                    disabled={isEditButtonMode.profileCreatedByEdit == false}
                  />
                </FormGroup>
              )}
            />
            <span className="field_error">
              {errors.profile_created_by?.type == "required" && "Field is required"}
            </span>
          </div>
        </div>
        <div className="pref_fdb_btns_side">
          {
            isEditButtonMode.profileCreatedByEdit == false ? (
              <Button className="pref_fdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, profileCreatedByEdit: true })}>Edit</Button>
            ) : (
              <Button className="pref_fdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, profileCreatedByEdit: false });
                setValue("profile_created_by", profileCreatedByInitialValues)
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

      {/* Diet */}
      <div className="preferences_form_data_box">
        <div className="pref_fdb_label_side">
          <h4 className='pref_fdb_label_title'>Diet</h4>
        </div>
        <div className="pref_fdb_field_side">
          <div className="pref_fdb_field_side_body">
            <Controller
              control={control}
              name='diet'
              rules={{
                required: true,
              }}
              defaultValue={profileCreatedByInitialValues}
              render={({ field }) => (
                <FormGroup className="mui_form_control pref_checkbox_group" row={false} fullWidth>
                  <FormControlLabel
                    className="pref_checkbox_control"
                    name="diet_open_to_all"
                    control={<Checkbox defaultChecked />}
                    label="Open to All"
                    onChange={handleChangeDiet}
                    disabled={isEditButtonMode.dietEdit == false}
                  />
                  <FormControlLabel
                    className="pref_checkbox_control"
                    name="diet_veg"
                    control={<Checkbox />}
                    label="Veg"
                    onChange={handleChangeDiet}
                    disabled={isEditButtonMode.dietEdit == false}
                  />
                  <FormControlLabel
                    className="pref_checkbox_control"
                    name="diet_non_veg"
                    control={<Checkbox />}
                    label="Non Veg"
                    onChange={handleChangeDiet}
                    disabled={isEditButtonMode.dietEdit == false}
                  />
                  <FormControlLabel
                    className="pref_checkbox_control"
                    name="diet_vegan"
                    control={<Checkbox />}
                    label="Vegan"
                    onChange={handleChangeDiet}
                    disabled={isEditButtonMode.dietEdit == false}
                  />
                </FormGroup>
              )}
            />
            <span className="field_error">
              {errors.diet?.type == "required" && "Field is required"}
            </span>
          </div>
        </div>
        <div className="pref_fdb_btns_side">
          {
            isEditButtonMode.dietEdit == false ? (
              <Button className="pref_fdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, dietEdit: true })}>Edit</Button>
            ) : (
              <Button className="pref_fdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, dietEdit: false });
                setValue("diet", dietInitialValues)
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>

    </div>
  )
}

export default ProfileTypeForm