/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Col, Form, Input, Row, Button } from 'reactstrap'
import "./HeroSearch.css"
import SearchIcon from '@mui/icons-material/Search';
import { FormControlLabel, Select, MenuItem } from '@mui/material';
import { TextValidator, ValidatorForm, SelectValidator } from 'react-material-ui-form-validator';

const HeroSearch = () => {

  let HeroImg_BG = "assets/images/banner/hero_bg/hero-img-bg.png"
  let HeroBG_Heart = "assets/images/banner/hero_bg/hero-bg-heart.png"
  // let HeroBanner = "assets/images/banner/hero_bg/hero-main-banner.jpg" 
  let HeroBanner = "assets/images/banner/hero_bg/hero-main-banner-1.jpg"
  const [age, setAge] = useState([]);

  useState(() => {
    for (let i = 18; i <= 90; i++) {
      age.push(i)
    }
  }, [])

  const initializeSearch = {
    i_am: "",
    looking_for: "",
    age_from: "",
    age_to: ""
  }
  const [SearchForm, SetSearchForm] = useState(initializeSearch);
  const { i_am, looking_for, age_from, age_to } = SearchForm;

  const handelSearchChange = (event) => {
    const { name, value, checked, type } = event.target
    SetSearchForm({
      ...SearchForm,
      [name]: value
    })
  }

  const onSubmitSearchForm = (data) => {
    console.log(data)

  };

  return (
    <div className='hero__search'>
      <div className="hero__search_container">
        <div className="hero__search_imagebox">
          <img className='img-fluid hero__search_imagebox_bg_img' src={`${process.env.PUBLIC_URL}/${HeroImg_BG}`} alt="" />
          <img className='img-fluid hero__search_imagebox_image' src={`${process.env.PUBLIC_URL}/${HeroBanner}`} alt="" />
        </div>
        <div className="hero__search_searchbox">
          <div className="text_box_wrapped">
            <div className="text_box">
              <h2>We help you find your Soulmate​</h2>
              <div className="hero_line_divider mt-4 mb-4"><span></span></div>
              <p className='mb-3'>Relish Dating has a large user database and advanced algorithm that helps you find 10/10 partners. Friendly users and systematic management means you can trust us fully about your privacy and security.</p>
              <p>We manually approve the new users, and strictly moderate the website to ensure that our users don’t face any situation of fraud or harassment.</p>
            </div>
          </div>
          <div className="search_box">
            <ValidatorForm useRef="form" onSubmit={onSubmitSearchForm} onError={errors => console.log(errors)}>
              <div className='search_box_inner'>
                <div className='my_col px-1'>
                  {/* <Input type="select" onfocus='this.size=10;' onblur='this.size=0;' onchange='this.size=1; this.blur();'>
                    <option className='select_option' selected>I am</option>
                    <option className='select_option' value={0}>Man</option>
                    <option className='select_option' value={1}>Woman</option>
                  </Input> */}
                  <SelectValidator
                    fullWidth
                    label="I am"
                    name="i_am"
                    value={i_am}
                    onChange={handelSearchChange}
                    validators={['required']}
                    errorMessages={['']}
                    variant="standard"
                  >
                    <MenuItem className='select_option' value={0}>Men</MenuItem>
                    <MenuItem className='select_option' value={1}>Women</MenuItem>
                  </SelectValidator>
                </div>
                <div className='my_col px-1'>
                  {/* <Input type="select">
                    <option className='select_option' selected>Seeking a</option>
                    <option className='select_option' value={0}>Man</option>
                    <option className='select_option' value={1}>Woman</option>
                  </Input> */}
                  <SelectValidator
                    fullWidth
                    label="Seeking a"
                    name="looking_for"
                    value={looking_for}
                    onChange={handelSearchChange}
                    validators={['required']}
                    errorMessages={['']}
                    variant="standard"
                  >
                    <MenuItem className='select_option' value={0}>Men</MenuItem>
                    <MenuItem className='select_option' value={1}>Women</MenuItem>
                  </SelectValidator>
                </div>
                <div className='my_col px-1'>
                  {/* <Input type="select">
                    <option className='select_option' selected>Age From</option>
                    {
                      age.map((age) => (
                        <option className='select_option' value={age} key={age}>{age}</option>
                      ))
                    }
                  </Input> */}
                  <SelectValidator
                    fullWidth
                    label="Age From"
                    name="age_from"
                    value={age_from}
                    onChange={handelSearchChange}
                    validators={['required']}
                    errorMessages={['']}
                    variant="standard"
                  >
                    {
                      age.map((age) => (
                        <MenuItem className='select_option' value={age} key={age}>{age}</MenuItem>
                      ))
                    }
                  </SelectValidator>
                </div>
                <div className='my_col px-1'>
                  {/* <Input type="select">
                    <option selected>Age To</option>
                    {
                      age.map((age) => (
                        <option value={age} key={age}>{age}</option>
                      ))
                    }
                  </Input> */}
                  <SelectValidator
                    fullWidth
                    label="Age To"
                    name="age_to"
                    value={age_to}
                    onChange={handelSearchChange}
                    validators={['required']}
                    errorMessages={['']}
                    variant="standard"
                  >
                    {
                      age.map((age) => (
                        <MenuItem className='select_option' value={age} key={age}>{age}</MenuItem>
                      ))
                    }
                  </SelectValidator>
                </div>
                <div className='my_col px-1'>
                  <Button type='submit' color='danger' outline><SearchIcon /></Button>
                </div>
              </div>
            </ValidatorForm>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSearch