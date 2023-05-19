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
import SweetAlert from "sweetalert2";

const HideDeleteProfileForm = (props) => {
  const { control, register, setValue, getValues, errors, isEditButtonMode, setIsEditButtonMode } = props;

  const hideProfileEditCheckValues = {
    hideProfileCheck: false,
    deleteProfileCheck: false,
  }
  const [hideProfileEditCheck, setHideProfileEditCheck] = useState(hideProfileEditCheckValues);

  const hideProfileAlert = () => {
    SweetAlert.fire({
      title: "Hide Your Profile?",
      text: "It will not be visible to others.",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonText: "Hide",
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        setHideProfileEditCheck({ ...hideProfileEditCheck, hideProfileCheck: true });
        setValue("hide_profile", "Your Profile is currently In-Visible");

        SweetAlert.fire({
          title: "Your Profile Hide Successfully!!",
          text: "Now you are invisible to others.",
          icon: "success",
          showCancelButton: false,
        })
      }
    });
  }

  const deleteProfileAlert = () => {
    SweetAlert.fire({
      title: "Delete Your Profile?",
      text: "It will permentally delete your profile from Shaadi.com",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonText: "Delete",
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        setHideProfileEditCheck({ ...hideProfileEditCheck, deleteProfileCheck: true });
        setValue("delete_profile", "Your Profile is Deleted from Shaadi.com");

        SweetAlert.fire({
          title: "Your Profile Deleted Successfully!!",
          text: "Now you are no more exist on Shaadi.com",
          icon: "success",
          showCancelButton: false,
        })
      }
    });
  }

  return (
    <div className="settings_form_data_wrapper">

      {/* Hide Profile */}
      <div className="settings_form_data_box">
        <div className="sfdb_label_side">
          <h4 className='sfdb_label_title'>Hide Profile</h4>
        </div>
        <div className="sfdb_field_side">
          <div className="sfdb_field_side_body">
            <Controller
              control={control}
              name='hide_profile'
              rules={{
                required: false,
              }}
              defaultValue={hideProfileEditCheck.hideProfileCheck == false ? "Your Profile is currently Visible" : "Your Profile is currently Un-Visible"}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  multiline
                  inputProps={
                    { readOnly: true, }
                  }
                  className="mui_text_field"
                  label=" "
                  InputLabelProps={{ shrink: false, disableUnderline: true, }}
                  disableUnderline={true}
                  onChange={(event) => {
                    setValue("hide_profile", event.target.value)
                  }}
                />
              )}
            />
            <span className="field_error">
              {errors.hide_profile?.type == "required" && "Field is required"}
            </span>
          </div>
        </div>
        <div className="sfdb_btns_side">
          {
            hideProfileEditCheck.hideProfileCheck == false ? (
              <Button className="sfdb_btn" onClick={hideProfileAlert}>Hide</Button>
            ) : (
              <Button className="sfdb_btn" onClick={() => {
                setHideProfileEditCheck({ ...hideProfileEditCheck, hideProfileCheck: false });
                setValue("hide_profile", "Your Profile is currently Visible")
              }}>Un-Hide</Button>
            )
          }
        </div>
      </div>

      {/* Delete Profile */}
      <div className="settings_form_data_box">
        <div className="sfdb_label_side">
          <h4 className='sfdb_label_title'>Delete Profile</h4>
        </div>
        <div className="sfdb_field_side">
          <div className="sfdb_field_side_body">
            <Controller
              control={control}
              name='delete_profile'
              rules={{
                required: false,
              }}
              defaultValue={"Delete your Profile from Shaadi.com"}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  multiline
                  inputProps={
                    { readOnly: true, }
                  }
                  className="mui_text_field"
                  label=" "
                  InputLabelProps={{ shrink: false, disableUnderline: true, }}
                  disableUnderline={true}
                  onChange={(event) => {
                    setValue("delete_profile", event.target.value)
                  }}
                />
              )}
            />
            <span className="field_error">
              {errors.delete_profile?.type == "required" && "Field is required"}
            </span>
          </div>
        </div>
        <div className="sfdb_btns_side">
          {
            hideProfileEditCheck.deleteProfileCheck == false && (
              <Button className="sfdb_btn" onClick={deleteProfileAlert}>Delete</Button>
            )
          }
          {/* {
            hideProfileEditCheck.deleteProfileCheck == false ? (
              <Button className="sfdb_btn" onClick={deleteProfileAlert}>Delete</Button>
            ) : (
              <Button className="sfdb_btn" onClick={() => {
                setHideProfileEditCheck({ ...hideProfileEditCheck, deleteProfileCheck: false });
                setValue("delete_profile", "Delete your Profile from Shaadi.com")
              }}>Un-Hide</Button>
            )
          } */}
        </div>
      </div>

    </div>
  )
}

export default HideDeleteProfileForm