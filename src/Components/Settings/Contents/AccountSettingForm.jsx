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
} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CrossIcon from '@mui/icons-material/HighlightOff';

const AccountSettingForm = (props) => {
  const { control, register, setValue, getValues, errors, isEditButtonMode, setIsEditButtonMode } = props;

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const tempAccountData = {
    email: "123@gmail.com",
    password: "123456789",
    phone_num: "+92304166666"
  }

  return (
    <div className="settings_form_data_wrapper">
      <div className="settings_form_data_box">
        <div className="sfdb_label_side">
          <h4 className='sfdb_label_title'>Email</h4>
        </div>
        <div className="sfdb_field_side">
          <div className="sfdb_field_side_body">
            <Controller
              control={control}
              name='email'
              rules={{
                required: true,
                minLength: 6,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              }}
              defaultValue={tempAccountData.email}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  multiline
                  inputProps={
                    { readOnly: isEditButtonMode.emailEdit == false, }
                  }
                  className="mui_text_field"
                  label=" "
                  InputLabelProps={{ shrink: false, disableUnderline: true, }}
                  disableUnderline={true}
                  onChange={(event) => {
                    setValue("email", event.target.value)
                  }}
                />
              )}
            />
            <span className="field_error">
              {errors.email?.type == "required" && "Email is required"}
              {errors.email?.type == "minLength" && "Minimum length is 6"}
              {errors.email?.type == "pattern" && "Please enter valid email address"}
            </span>
          </div>
        </div>
        <div className="sfdb_btns_side">
          {
            isEditButtonMode.emailEdit == false ? (
              <Button className="sfdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, emailEdit: true })}>Edit</Button>
            ) : (
              <Button className="sfdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, emailEdit: false });
                setValue("email", tempAccountData.email)
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>
      <div className="settings_form_data_box">
        <div className="sfdb_label_side">
          <h4 className='sfdb_label_title'>Password</h4>
        </div>
        <div className="sfdb_field_side">
          <div className="sfdb_field_side_body">
            <Controller
              control={control}
              name='password'
              rules={{
                required: true,
                minLength: 6,
              }}
              defaultValue={tempAccountData.password}
              render={({ field }) => (
                <FormControl fullWidth variant="standard" className='sfdb_from_control'>
                  <Input
                    {...field}
                    type={showPassword ? 'text' : 'password'}
                    onChange={(event) => {
                      setValue("password", event.target.value);
                    }}
                    inputProps={
                      { readOnly: isEditButtonMode.passwordEdit == false, disableUnderline: true, }
                    }
                    disableUnderline={true}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              )}
            />
            <span className="field_error">
              {errors.password?.type == "required" && "Password is required"}
              {errors.password?.type == "minLength" && "Minimum length is 6"}
            </span>
          </div>
        </div>
        <div className="sfdb_btns_side">
          {
            isEditButtonMode.passwordEdit == false ? (
              <Button className="sfdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, passwordEdit: true })}>Edit</Button>
            ) : (
              <Button className="sfdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, passwordEdit: false })
                setValue("password", tempAccountData.passwordEdit)
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>
      <div className="settings_form_data_box">
        <div className="sfdb_label_side">
          <h4 className='sfdb_label_title'>Phone</h4>
        </div>
        <div className="sfdb_field_side">
          <div className="sfdb_field_side_body">
            <Controller
              control={control}
              name='phone_num'
              rules={{
                required: true,
                minLength: 9,
                maxLength: 16,
                pattern: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
              }}
              defaultValue={tempAccountData.phone_num}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  multiline
                  inputProps={
                    { readOnly: isEditButtonMode.phoneNumEdit == false, }
                  }
                  className="mui_text_field"
                  label=" "
                  InputLabelProps={{ shrink: false, disableUnderline: true, }}
                  disableUnderline={true}
                  onChange={(event) => {
                    setValue("phone_num", event.target.value)
                  }}
                />
              )}
            />
            <span className="field_error">
              {errors.phone_num?.type == "required" && "Phone is required"}
              {errors.phone_num?.type == "minLength" && "Minimum length is 9"}
              {errors.phone_num?.type == "maxLength" && "Maximum length is 16"}
              {errors.phone_num?.type == "pattern" && "Please enter valid Phone Number"}
            </span>
          </div>
        </div>
        <div className="sfdb_btns_side">
          {
            isEditButtonMode.phoneNumEdit == false ? (
              <Button className="sfdb_btn" onClick={() => setIsEditButtonMode({ ...isEditButtonMode, phoneNumEdit: true })}>Edit</Button>
            ) : (
              <Button className="sfdb_btn" onClick={() => {
                setIsEditButtonMode({ ...isEditButtonMode, phoneNumEdit: false });
                setValue("phone_num", tempAccountData.phone_num)
              }}><CrossIcon /></Button>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default AccountSettingForm