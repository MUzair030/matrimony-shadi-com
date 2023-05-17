/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./AuthUser.css"
import { HeaderWrapper } from "../../Components"
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import {
  TextField, Input, InputAdornment, IconButton, FormControl, InputLabel, FormControlLabel, Checkbox, Radio, RadioGroup, FormLabel,
} from '@mui/material';
import { TextValidator, ValidatorForm, SelectValidator } from 'react-material-ui-form-validator';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm, Controller } from "react-hook-form";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const navigate = useNavigate();
  const { className, style } = props;
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const {
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ shouldFocusError: true });

  const onSubmitForm = (data) => {
    console.log("onSubmitForm", data)

    document.body.style.overflowY = "scroll";
    navigate("profile-creation");
  }

  return (
    <>
      {/* <HeaderWrapper /> */}
      <div className={`registration__page ${className}`} style={style}>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="registration__box">
              {/* <h3 className='reg_title mb-3'>Login to your Membership</h3> */}
              <div className='text-center mb-1'>
                <span className='registration_lock_ico'>
                  <LockOutlinedIcon />
                </span>
              </div>
              <h3 className='reg_title mb-0'>Sign Up</h3>
              <Form onSubmit={handleSubmit(onSubmitForm)}>
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <Controller
                      control={control}
                      name="name"
                      rules={{
                        required: false,
                        maxLength: 30,
                        minLength: 6,
                        pattern: /^[a-zA-Z0-9.\s]+$/,
                      }}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Name *"
                          variant="standard"
                          fullWidth
                          onChange={(event) => {
                            setValue("name", event.target.value);
                          }}
                        />
                      )}
                    />
                    <span className="field_error">
                      {errors.name?.type == "required" && "Name is required"}
                      {errors.name?.type == "maxLength" && "Maximum Length: " + "30"}
                      {errors.name?.type == "minLength" && "Minumum Length: " + "6"}
                      {errors.name?.type == "pattern" && "Please write alphanumeric values"}
                    </span>
                  </div>
                  <div className="col-md-12 mb-3">
                    <Controller
                      control={control}
                      name='email'
                      rules={{
                        required: false,
                        minLength: 6,
                        pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      }}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Email *"
                          variant="standard"
                          fullWidth
                          onChange={(event) => {
                            setValue("email", event.target.value);
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
                  <div className="col-md-12 mb-2">
                    <Controller
                      control={control}
                      name='gender'
                      rules={{
                        required: false,
                      }}
                      render={({ field }) => (
                        <FormControl fullWidth>
                          <FormLabel focused={false} id="demo-row-radio-buttons-group-label" >Gender</FormLabel>
                          <RadioGroup
                            {...field}
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            onChange={(event) => {
                              setValue("gender", event.target.value);
                            }}
                          >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                          </RadioGroup>
                        </FormControl>
                      )}
                    />
                    <span className="field_error">
                      {errors.gender?.type == "required" && "Gender is required"}
                    </span>
                  </div>
                  <div className="col-md-12 mb-2">
                    <Controller
                      control={control}
                      name='password'
                      rules={{
                        required: false,
                        minLength: 6,
                      }}
                      defaultValue=""
                      render={({ field }) => (
                        <FormControl fullWidth variant="standard">
                          <InputLabel htmlFor="standard-adornment-password">Password *</InputLabel>
                          <Input
                            {...field}
                            type={showPassword ? 'text' : 'password'}
                            onChange={(event) => {
                              setValue("password", event.target.value);
                            }}
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
                      {errors.password?.type == "minLength" && "Minumum Length: " + "6"}
                    </span>
                  </div>
                  <div className="col-md-12 mb-2">
                    <Controller
                      control={control}
                      name='repeat_password'
                      rules={{
                        required: false,
                      }}
                      defaultValue=""
                      render={({ field }) => (
                        <FormControl fullWidth variant="standard">
                          <InputLabel htmlFor="standard-adornment-password">Password *</InputLabel>
                          <Input
                            {...field}
                            type={showPassword ? 'text' : 'password'}
                            onChange={(event) => {
                              setValue("repeat_password", event.target.value);
                            }}
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
                      {errors.repeat_password?.type == "required" && "Password is required"}
                    </span>
                  </div>
                  <div className="col-md-12 mb-2">
                    <Controller
                      control={control}
                      name='terms_conditions'
                      rules={{
                        required: false,
                      }}
                      // defaultChecked={false}
                      defaultValue={false}
                      render={({ field }) => (
                        <FormControlLabel
                          {...field}
                          fullWidth
                          control={<Checkbox />}
                          label="I accept all the terms and conditions"
                          onChange={(event) => {
                            setValue("terms_conditions", event.target.checked);
                          }}
                        />
                      )}
                    />
                    <span className="field_error">
                      {errors.remember_login?.type == "required" && "Field is required"}
                    </span>
                  </div>
                  <div className="col-md-12 mb-2">
                    <Button type='submit' className='btn_submit'>{"Sign Up"}</Button>
                  </div>
                </div>
              </Form>
              <div className="row">
                <div className="col-12 d-flex">
                  <p className='mb-0'>Already have an account? <span className='forgot_password'>Sign In</span> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register