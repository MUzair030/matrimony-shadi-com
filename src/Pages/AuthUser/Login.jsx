/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./AuthUser.css"
import { HeaderWrapper } from "../../Components"
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { TextField, Input, InputAdornment, IconButton, FormControl, InputLabel, FormControlLabel, Checkbox, Select, MenuItem } from '@mui/material';
import { TextValidator, ValidatorForm, SelectValidator } from 'react-material-ui-form-validator';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm, Controller } from "react-hook-form";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = (props) => {

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
  }

  return (
    <>
      {/* <HeaderWrapper /> */}
      <div className={`registration__page ${className}`} style={style}>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="registration__box">
              {/* <h3 className='reg_title mb-3'>Login to your Membership</h3> */}
              <div className='text-center mb-2'>
                <span className='registration_lock_ico'>
                  <LockOutlinedIcon />
                </span>
              </div>
              <h3 className='reg_title mb-2'>Sign In</h3>
              <Form onSubmit={handleSubmit(onSubmitForm)}>
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <Controller
                      control={control}
                      name='email'
                      rules={{
                        required: true,
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
                      name='password'
                      rules={{
                        required: true,
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
                      name='remember_login'
                      rules={{
                        required: false,
                      }}
                      defaultChecked={false}
                      defaultValue={false}
                      render={({ field }) => (
                        <FormControlLabel
                          {...field}
                          fullWidth
                          control={<Checkbox />}
                          label="Remenber Me"
                          onChange={(event) => {
                            setValue("remember_login", event.target.checked);
                          }}
                        />
                      )}
                    />
                    <span className="field_error">
                      {errors.remember_login?.type == "required" && "Field is required"}
                    </span>
                  </div>
                  <div className="col-md-12 mb-3">
                    <Button type='submit' className='btn_submit'>{"Sign In"}</Button>
                  </div>
                </div>
              </Form>
              <div className="row">
                <div className="col-12">
                  <p className='forgot_password mb-0'>Forgot Password?</p>
                </div>
                <div className="col-12">
                  <p className='mb-0'>Do you have an account? <span className='forgot_password'>Sign Up</span> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login