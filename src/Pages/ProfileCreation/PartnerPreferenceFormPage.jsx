/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import "./ProfileCreation.css"
import {
    Tabs,
    Tab,
    FormControl,
    useFormControl,
    FormGroup,
    Autocomplete,
    FormControlLabel,
    Checkbox,
    Box,
    TextField,
    Stack,
    InputLabel,
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
import { Form, Input, Label, Row, Col, Card, CardHeader, CardBody, CardFooter } from 'reactstrap'
import { TextValidator, ValidatorForm, SelectValidator } from 'react-material-ui-form-validator';
import { useForm, Controller } from "react-hook-form"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AllCountryCodes from "../../assets/init/AllCountryCodes"
import ShadiProfileLogo from "../../assets/shaadi-logo-profile.png"
import { useNavigate } from "react-router-dom";

const PartnerPreferenceFormPage = () => {
    const navigate = useNavigate();

    const {
        control,
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm({ shouldFocusError: true });

    const [countriesList, setCountriesList] = useState([]);

    useEffect(() => {
        let countryArr = [];
        AllCountryCodes.length > 0 && AllCountryCodes.map((item) => countryArr.push({ ...item, value: item.country }))
        setCountriesList(countryArr)
    }, [])

    const workWithOpt = [
        { id: 0, value: "Private Company" },
        { id: 1, value: "Government / Public Sector" },
        { id: 2, value: "Defense / Civil Services" },
        { id: 3, value: "Business / Self Employed" },
        { id: 4, value: "Not Working" },
    ]

    const incomeMonthlyOpt = [
        { id: 0, value: "Upto PKR 8K monthly" },
        { id: 1, value: "PKR 8 to 16K monthly" },
        { id: 2, value: "PKR 16 to 25K monthly" },
        { id: 3, value: "PKR 25 to 40K monthly" },
        { id: 4, value: "PKR 40 to 60K monthly" },
        { id: 5, value: "PKR 60 to 80K monthly" },
        { id: 6, value: "PKR 80K to 1.5 Lakh monthly" },
        { id: 7, value: "PKR 1.5 to 2.5 Lakh monthly" },
        { id: 8, value: "PKR 2.5 to 4 Lakh monthly" },
        { id: 9, value: "PKR 4 to 6.25 Lakh monthly" },
        { id: 10, value: "PKR 6.25 to 8 Lakh monthly" },
        { id: 11, value: "PKR 8 Lakh & above monthly" },
    ]

    const incomeYearlyOpt = [
        { id: 0, value: "Upto PKR 1 Lakh yearly" },
        { id: 1, value: "PKR 1 to 2 Lakh yearly" },
        { id: 2, value: "PKR 2 to 3 Lakh yearly" },
        { id: 3, value: "PKR 3 to 5 Lakh yearly" },
        { id: 4, value: "PKR 5 to 7 Lakh yearly" },
        { id: 5, value: "PKR 7 to 10 Lakh yearly" },
        { id: 6, value: "PKR 10 to 20 Lakh yearly" },
        { id: 7, value: "PKR 20 to 30 Lakh yearly" },
        { id: 8, value: "PKR 30 to 50 Lakh yearly" },
        { id: 9, value: "PKR 50 to 75 Lakh yearly" },
        { id: 10, value: "PKR 75 Lakh to 1 Crore yearly" },
        { id: 11, value: "PKR 1 Crore & above yearly" },
    ]

    const heightOpt = [
        { id: 0, value: 1, label: "4ft 5in - 134cm" },
        { id: 1, value: 2, label: "4ft 6in - 137cm" },
        { id: 2, value: 3, label: "4ft 7in - 139cm" },
        { id: 3, value: 4, label: "4ft 8in - 142cm" },
        { id: 4, value: 5, label: "4ft 9in - 144cm" },
        { id: 5, value: 6, label: "4ft 10in - 147cm" },
        { id: 6, value: 7, label: "4ft 11in - 149cm" },
        { id: 7, value: 8, label: "5ft - 152cm" },
        { id: 8, value: 9, label: "5ft 1in - 154cm" },
        { id: 9, value: 10, label: "5ft 2in - 157cm" },
        { id: 10, value: 11, label: "5ft 3in - 160cm" },
        { id: 11, value: 12, label: "5ft 4in - 162cm" },
        { id: 12, value: 13, label: "5ft 5in - 165cm" },
        { id: 13, value: 14, label: "5ft 6in - 167cm" },
        { id: 14, value: 15, label: "5ft 7in - 170cm" },
        { id: 15, value: 16, label: "5ft 8in - 172cm" },
        { id: 16, value: 17, label: "5ft 9in - 175cm" },
        { id: 17, value: 18, label: "5ft 10in - 177cm" },
        { id: 18, value: 19, label: "5ft 11in - 180cm" },
        { id: 19, value: 20, label: "6ft - 182cm" },
        { id: 20, value: 21, label: "6ft 1in - 185cm" },
        { id: 21, value: 22, label: "6ft 2in - 187cm" },
        { id: 22, value: 23, label: "6ft 3in - 190cm" },
        { id: 23, value: 24, label: "6ft 4in - 193cm" },
        { id: 24, value: 25, label: "6ft 5in - 195cm" },
        { id: 25, value: 26, label: "6ft 6in - 198cm" },
        { id: 26, value: 27, label: "6ft 7in - 200cm" },
        { id: 27, value: 28, label: "6ft 8in - 203cm" },
        { id: 28, value: 29, label: "6ft 9in - 205cm" },
        { id: 29, value: 30, label: "6ft 10in - 208cm" },
        { id: 30, value: 31, label: "6ft 11in - 210cm" },
        { id: 31, value: 32, label: "7ft - 213cm" },
    ];

    const subCommunityOpt = [
        { id: 1, value: "Shafi" },
        { id: 3, value: "Shia" },
        { id: 4, value: "Shia Bohra" },
        { id: 5, value: "Shia Imami Ismaili" },
        { id: 6, value: "Shia Ithna Ashariyyah" },
        { id: 7, value: "Shia Zaidi" },
        { id: 8, value: "Siddiqui" },
        { id: 9, value: "Sunni" },
        { id: 10, value: "Sunni Ehle-Hadith" },
        { id: 11, value: "Sunni Hanafi" },
        { id: 12, value: "Sunni Hunbali" },
        { id: 13, value: "Sunni Maliki" },
        { id: 14, value: "Sunni Shafi" },
        { id: 15, value: "Syed" },
    ]

    const castOpt = [
        { id: 0, value: "Ansari" },
        { id: 1, value: "Sheikh" },
        { id: 2, value: "Arain" },
        { id: 3, value: "Awan" },
        { id: 4, value: "Dawoodi Bohra" },
        { id: 5, value: "Dekkani" },
        { id: 6, value: "Dudekula" },
        { id: 7, value: "Jat" },
        { id: 8, value: "Khoja" },
        { id: 9, value: "Lebbai" },
        { id: 10, value: "Mapila" },
        { id: 11, value: "Maraicar" },
        { id: 12, value: "Memon" },
        { id: 13, value: "Mughal" },
        { id: 14, value: "Pathan" },
        { id: 15, value: "Qureshi" },
        { id: 16, value: "Rajput" },
        { id: 17, value: "Rowther" },
    ]

    const dietOpt = [
        { id: 0, value: "Veg" },
        { id: 1, value: "Non-Veg" },
        { id: 2, value: "Occasionally Non-Veg" },
        { id: 4, value: "Eggetarian" },
        { id: 5, value: "Jain" },
        { id: 6, value: "Vegan" },
    ]

    const handleChangeAge = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        const minDistance = 1;
        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                setValue("partner_age", [clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setValue("partner_age", [clamped - minDistance, clamped]);
            }
        } else {
            setValue("partner_age", newValue);
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

    const onSubmitForm = (data) => {
        console.log("onSubmitForm", data)

        const newHeighValues = [
            heightOpt[data.height[0] - 1]?.label,
            heightOpt[data.height[1] - 1]?.label,
        ];
        console.log("onSubmitForm-height", newHeighValues);

        navigate("/my-matches")
    }

    const handleAddLater = () => {
        navigate("/my-matches")
    }

    return (
        <div className='profile_creation_wrapper'>
            <div className="container-fluid">
                <Row className='justify-content-center m-0'>
                    <Col xs="12" sm="12" md="11" xl="10" className='my-4'>
                        <div className={`prof_creation_tabContext_tabpanel_header`}>
                            <div className="prof_creation_img_box">
                                <img className="img-fluid" src={ShadiProfileLogo} alt="" />
                                <p>We strive for better connection</p>
                            </div>
                            <div className="prof_creation_tabs_header">
                                <div className="prof_creation_top_panel text-center">
                                    <div className="prof_creation_top_panel text-center">
                                        <div className="ProfileCreation___tabpanel">
                                            <h4 className='mb-0'>Complete Your Partner Preference</h4>
                                            <p>Fill out the form carefully about your partner choice</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Card style={{ marginTop: 40 }} className="prof_creation_card">
                            <CardBody>
                                <div className="prof_creation_main_panel my-4">
                                    <div className="ProfileCreation___tabpanel profile_creation_fields">
                                        <Form onSubmit={handleSubmit(onSubmitForm)}>
                                            <Row className="profile_creation_form_row">
                                                <Col className="mb-4 pb-2 col" xs="12" sm="6" md="6">
                                                    <Controller
                                                        control={control}
                                                        name='partner_age'
                                                        rules={{
                                                            required: false,
                                                        }}
                                                        defaultValue={[22, 30]}
                                                        render={({ field }) => (
                                                            <div className="mui_slider_wrapper">
                                                                <Label style={{ minWidth: 56 }}>Age</Label>
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
                                                            </div>
                                                        )}
                                                    />
                                                    <span className="field_error">
                                                        {errors.partner_age?.type == "required" && "Field is required"}
                                                    </span>
                                                </Col>
                                                <Col className="mb-4 pb-2 col" xs="12" sm="6" md="6">
                                                    <Controller
                                                        control={control}
                                                        name='education'
                                                        rules={{ required: false }}
                                                        defaultValue={null}
                                                        render={({ field }) => (
                                                            <Autocomplete
                                                                className="mui_autocomplete_field"
                                                                {...field}
                                                                popupIcon={<KeyboardArrowDownIcon />}
                                                                options={[
                                                                    { id: 1, value: "Matric", },
                                                                    { id: 2, value: "Intermediate", },
                                                                    { id: 3, value: "Bachelor", },
                                                                    { id: 4, value: "Master", },
                                                                    { id: 5, value: "Phd", },
                                                                ]}
                                                                autoHighlight
                                                                getOptionLabel={(option) => option.value || ""}
                                                                isOptionEqualToValue={(option, value) => option.value || ""}
                                                                onChange={(event, newValue) => {
                                                                    setValue('education', newValue);
                                                                }}
                                                                renderInput={(params) => (
                                                                    <TextField
                                                                        {...params}
                                                                        fullWidth
                                                                        focused
                                                                        label="Education?"
                                                                        placeholder="Select Education"
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
                                                        {errors.education?.type == "required" && "Field is required"}
                                                    </span>
                                                </Col>
                                                <Col className="mb-4 pb-2 col" xs="12" sm="6" md="6">
                                                    <Controller
                                                        control={control}
                                                        name='height'
                                                        rules={{
                                                            required: false,
                                                        }}
                                                        defaultValue={[10, 20]}
                                                        render={({ field }) => (
                                                            <div className="mui_slider_wrapper">
                                                                <Label style={{ minWidth: 56 }}>Height</Label>
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
                                                            </div>
                                                        )}
                                                    />
                                                    <span className="field_error">
                                                        {errors.height?.type == "required" && "Field is required"}
                                                    </span>
                                                </Col>
                                                <Col className="mb-4 pb-2 col" xs="12" sm="6" md="6">
                                                    <Controller
                                                        control={control}
                                                        name='industry'
                                                        rules={{ required: false }}
                                                        defaultValue={null}
                                                        render={({ field }) => (
                                                            <Autocomplete
                                                                className="mui_autocomplete_field"
                                                                {...field}
                                                                popupIcon={<KeyboardArrowDownIcon />}
                                                                options={workWithOpt}
                                                                autoHighlight
                                                                getOptionLabel={(option) => option.value || ""}
                                                                isOptionEqualToValue={(option, value) => option.value || ""}
                                                                onChange={(event, newValue) => {
                                                                    setValue('industry', newValue);
                                                                }}
                                                                renderInput={(params) => (
                                                                    <TextField
                                                                        {...params}
                                                                        fullWidth
                                                                        focused
                                                                        label="Industry?"
                                                                        placeholder="Select Industry"
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
                                                        {errors.industry?.type == "required" && "Field is required"}
                                                    </span>
                                                </Col>
                                                <Col className="mb-4 pb-2 col" xs="12" sm="6" md="6">
                                                    <Controller
                                                        control={control}
                                                        name='ethinicity'
                                                        rules={{ required: false }}
                                                        defaultValue={null}
                                                        render={({ field }) => (
                                                            <Autocomplete
                                                                className="mui_autocomplete_field"
                                                                {...field}
                                                                popupIcon={<KeyboardArrowDownIcon />}
                                                                options={[
                                                                    { id: 1, value: "Ethinicity-Opt-1", },
                                                                    { id: 2, value: "Ethinicity-Opt-2", },
                                                                    { id: 3, value: "Ethinicity-Opt-3", },
                                                                    { id: 4, value: "Ethinicity-Opt-4", },
                                                                ]}
                                                                autoHighlight
                                                                getOptionLabel={(option) => option.value || ""}
                                                                isOptionEqualToValue={(option, value) => option.value || ""}
                                                                onChange={(event, newValue) => {
                                                                    setValue('ethinicity', newValue);
                                                                }}
                                                                renderInput={(params) => (
                                                                    <TextField
                                                                        {...params}
                                                                        fullWidth
                                                                        focused
                                                                        label="Ethinicity?"
                                                                        placeholder="Select Ethinicity"
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
                                                        {errors.ethinicity?.type == "required" && "Field is required"}
                                                    </span>
                                                </Col>
                                                <Col className="mb-4 pb-2 col" xs="12" sm="6" md="6">
                                                    <Controller
                                                        control={control}
                                                        name='profession'
                                                        rules={{ required: false }}
                                                        defaultValue={null}
                                                        render={({ field }) => (
                                                            <Autocomplete
                                                                className="mui_autocomplete_field"
                                                                {...field}
                                                                popupIcon={<KeyboardArrowDownIcon />}
                                                                options={[
                                                                    { id: 1, value: "Doctor", },
                                                                    { id: 2, value: "Teacher", },
                                                                    { id: 3, value: "Engineer", },
                                                                    { id: 4, value: "Business", },
                                                                    { id: 5, value: "Other", },
                                                                ]}
                                                                autoHighlight
                                                                getOptionLabel={(option) => option.value || ""}
                                                                isOptionEqualToValue={(option, value) => option.value || ""}
                                                                onChange={(event, newValue) => {
                                                                    setValue('profession', newValue);
                                                                }}
                                                                renderInput={(params) => (
                                                                    <TextField
                                                                        {...params}
                                                                        fullWidth
                                                                        focused
                                                                        label="Profession?"
                                                                        placeholder="Select Profession"
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
                                                        {errors.profession?.type == "required" && "Field is required"}
                                                    </span>
                                                </Col>
                                                <Col className="mb-4 pb-2 col" xs="12" sm="6" md="6">
                                                    <Controller
                                                        control={control}
                                                        name='marital_status'
                                                        rules={{ required: false }}
                                                        defaultValue={null}
                                                        render={({ field }) => (
                                                            <Autocomplete
                                                                className="mui_autocomplete_field"
                                                                {...field}
                                                                popupIcon={<KeyboardArrowDownIcon />}
                                                                options={[
                                                                    { id: 1, value: "Married", },
                                                                    { id: 2, value: "Divorced", },
                                                                    { id: 3, value: "Single", },
                                                                ]}
                                                                autoHighlight
                                                                getOptionLabel={(option) => option.value || ""}
                                                                isOptionEqualToValue={(option, value) => option.value || ""}
                                                                onChange={(event, newValue) => {
                                                                    setValue('marital_status', newValue);
                                                                }}
                                                                renderInput={(params) => (
                                                                    <TextField
                                                                        {...params}
                                                                        fullWidth
                                                                        focused
                                                                        label="Marital Status?"
                                                                        placeholder="Select Marital Status"
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
                                                </Col>
                                                <Col className="mb-4 pb-2 col" xs="12" sm="6" md="6">
                                                    <Controller
                                                        control={control}
                                                        name='working_as'
                                                        rules={{ required: false }}
                                                        defaultValue={null}
                                                        render={({ field }) => (
                                                            <Autocomplete
                                                                className="mui_autocomplete_field"
                                                                {...field}
                                                                popupIcon={<KeyboardArrowDownIcon />}
                                                                options={[
                                                                    { id: 1, value: "Doctor", },
                                                                    { id: 2, value: "Teacher", },
                                                                    { id: 3, value: "Engineer", },
                                                                    { id: 4, value: "Business", },
                                                                    { id: 5, value: "Other", },
                                                                ]}
                                                                autoHighlight
                                                                getOptionLabel={(option) => option.value || ""}
                                                                isOptionEqualToValue={(option, value) => option.value || ""}
                                                                onChange={(event, newValue) => {
                                                                    setValue('working_as', newValue);
                                                                }}
                                                                renderInput={(params) => (
                                                                    <TextField
                                                                        {...params}
                                                                        fullWidth
                                                                        focused
                                                                        label="Working As?"
                                                                        placeholder="Select Working As"
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
                                                        {errors.working_as?.type == "required" && "Field is required"}
                                                    </span>
                                                </Col>
                                                <Col className="mb-4 pb-2 col" xs="12" sm="6" md="6">
                                                    <Controller
                                                        control={control}
                                                        name='religion'
                                                        rules={{ required: false }}
                                                        defaultValue={null}
                                                        render={({ field }) => (
                                                            <Autocomplete
                                                                className="mui_autocomplete_field"
                                                                {...field}
                                                                popupIcon={<KeyboardArrowDownIcon />}
                                                                options={[
                                                                    { id: 1, value: "Muslim", },
                                                                    { id: 2, value: "Hindu", },
                                                                    { id: 3, value: "Christian", },
                                                                    { id: 4, value: "Sikh", },
                                                                    { id: 5, value: "Other", },
                                                                ]}
                                                                autoHighlight
                                                                getOptionLabel={(option) => option.value || ""}
                                                                isOptionEqualToValue={(option, value) => option.value || ""}
                                                                onChange={(event, newValue) => {
                                                                    setValue('religion', newValue);
                                                                }}
                                                                renderInput={(params) => (
                                                                    <TextField
                                                                        {...params}
                                                                        fullWidth
                                                                        focused
                                                                        label="Religion?"
                                                                        placeholder="Select Religion"
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
                                                </Col>
                                                <Col className="mb-4 pb-2 col" xs="12" sm="6" md="6">
                                                    <Controller
                                                        control={control}
                                                        name='annual_income'
                                                        rules={{ required: false }}
                                                        defaultValue={null}
                                                        render={({ field }) => (
                                                            <Autocomplete
                                                                className="mui_autocomplete_field"
                                                                {...field}
                                                                popupIcon={<KeyboardArrowDownIcon />}
                                                                options={incomeYearlyOpt}
                                                                autoHighlight
                                                                getOptionLabel={(option) => option.value || ""}
                                                                isOptionEqualToValue={(option, value) => option.value || ""}
                                                                onChange={(event, newValue) => {
                                                                    setValue('annual_income', newValue);
                                                                }}
                                                                renderInput={(params) => (
                                                                    <TextField
                                                                        {...params}
                                                                        fullWidth
                                                                        focused
                                                                        label="Annual Income?"
                                                                        placeholder="Select Annual Income"
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
                                                        {errors.annual_income?.type == "required" && "Field is required"}
                                                    </span>
                                                </Col>
                                                <Col className="mb-4 pb-2 col" xs="12" sm="6" md="6">
                                                    <Controller
                                                        control={control}
                                                        name='community'
                                                        rules={{ required: false }}
                                                        defaultValue={null}
                                                        render={({ field }) => (
                                                            <Autocomplete
                                                                className="mui_autocomplete_field"
                                                                {...field}
                                                                popupIcon={<KeyboardArrowDownIcon />}
                                                                options={subCommunityOpt}
                                                                autoHighlight
                                                                getOptionLabel={(option) => option.value || ""}
                                                                isOptionEqualToValue={(option, value) => option.value || ""}
                                                                onChange={(event, newValue) => {
                                                                    setValue('community', newValue);
                                                                }}
                                                                renderInput={(params) => (
                                                                    <TextField
                                                                        {...params}
                                                                        fullWidth
                                                                        focused
                                                                        label="Community?"
                                                                        placeholder="Select Community"
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
                                                </Col>
                                                <Col className="mb-4 pb-2 col" xs="12" sm="6" md="6">
                                                    <Controller
                                                        control={control}
                                                        name='diet'
                                                        rules={{ required: false }}
                                                        defaultValue={null}
                                                        render={({ field }) => (
                                                            <Autocomplete
                                                                className="mui_autocomplete_field"
                                                                {...field}
                                                                popupIcon={<KeyboardArrowDownIcon />}
                                                                options={dietOpt}
                                                                autoHighlight
                                                                getOptionLabel={(option) => option.value || ""}
                                                                isOptionEqualToValue={(option, value) => option.value || ""}
                                                                onChange={(event, newValue) => {
                                                                    setValue('diet', newValue);
                                                                }}
                                                                renderInput={(params) => (
                                                                    <TextField
                                                                        {...params}
                                                                        fullWidth
                                                                        focused
                                                                        label="Diet Habbit?"
                                                                        placeholder="Select Diet Habbit"
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
                                                        {errors.diet?.type == "required" && "Field is required"}
                                                    </span>
                                                </Col>
                                                <Col className="mb-4 pb-2 col" xs="12" sm="6" md="6">
                                                    <Controller
                                                        control={control}
                                                        name='cast'
                                                        rules={{ required: false }}
                                                        defaultValue={null}
                                                        render={({ field }) => (
                                                            <Autocomplete
                                                                className="mui_autocomplete_field"
                                                                {...field}
                                                                popupIcon={<KeyboardArrowDownIcon />}
                                                                options={castOpt}
                                                                autoHighlight
                                                                getOptionLabel={(option) => option.value || ""}
                                                                isOptionEqualToValue={(option, value) => option.value || ""}
                                                                onChange={(event, newValue) => {
                                                                    setValue('cast', newValue);
                                                                }}
                                                                renderInput={(params) => (
                                                                    <TextField
                                                                        {...params}
                                                                        fullWidth
                                                                        focused
                                                                        label="Cast?"
                                                                        placeholder="Select Cast"
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
                                                        {errors.cast?.type == "required" && "Field is required"}
                                                    </span>
                                                </Col>
                                                <Col className="mb-4 pb-2 col" xs="12" sm="6" md="6">
                                                    <Controller
                                                        control={control}
                                                        name='body_weight'
                                                        rules={{ required: false }}
                                                        defaultValue={null}
                                                        render={({ field }) => (
                                                            <Autocomplete
                                                                className="mui_autocomplete_field"
                                                                {...field}
                                                                popupIcon={<KeyboardArrowDownIcon />}
                                                                options={[
                                                                    { id: 1, value: "40 kg - 45 kg" },
                                                                    { id: 2, value: "45 kg - 50 kg" },
                                                                    { id: 3, value: "50 kg - 55 kg" },
                                                                    { id: 4, value: "55 kg - 60 kg" },
                                                                    { id: 5, value: "60 kg - 65 kg" },
                                                                    { id: 6, value: "65 kg - 70 kg" },
                                                                    { id: 7, value: "70 kg - 75 kg" },
                                                                    { id: 8, value: "75 kg - 80 kg" },
                                                                    { id: 9, value: "80 kg - 85 kg" },
                                                                    { id: 10, value: "85 kg - 90 kg" },
                                                                    { id: 11, value: "90 kg - 95 kg" },
                                                                    { id: 12, value: "95 kg - 100 kg" },
                                                                    { id: 13, value: "over 100 kg" },
                                                                ]}
                                                                autoHighlight
                                                                getOptionLabel={(option) => option.value || ""}
                                                                isOptionEqualToValue={(option, value) => option.value || ""}
                                                                onChange={(event, newValue) => {
                                                                    setValue('body_weight', newValue);
                                                                }}
                                                                renderInput={(params) => (
                                                                    <TextField
                                                                        {...params}
                                                                        fullWidth
                                                                        focused
                                                                        label="Body Weight?"
                                                                        placeholder="Select Body Weight"
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
                                                        {errors.body_weight?.type == "required" && "Field is required"}
                                                    </span>
                                                </Col>
                                                {/* <Col className="mb-4 pb-2 col" xs="12" sm="6" md="6">
                <Controller
                    control={control}
                    name='exercise_habbit'
                    rules={{ required: false }}
                    defaultValue={null}
                    render={({ field }) => (
                        <Autocomplete
                            className="mui_autocomplete_field"
                            {...field}
                            popupIcon={<KeyboardArrowDownIcon />}
                            options={[
                                { id: 1, value: "Runing" },
                                { id: 2, value: "Jogging" },
                                { id: 3, value: "Joga" },
                                { id: 4, value: "GYM" },
                                { id: 5, value: "Hiking" },
                                { id: 6, value: "Cycling" },
                                { id: 7, value: "Other" },
                            ]}
                            autoHighlight
                            getOptionLabel={(option) => option.value || ""}
                            isOptionEqualToValue={(option, value) => option.value || ""}
                            onChange={(event, newValue) => {
                                setValue('exercise_habbit', newValue);
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    fullWidth
                                    focused
                                    label="Exercise Habbit?"
                                    placeholder="Select Exercise Habbit"
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
                    {errors.exercise_habbit?.type == "required" && "Field is required"}
                </span>
            </Col> */}
                                                <Col className="mb-4 pb-2 col" xs="12" sm="6" md="6">
                                                    <Controller
                                                        control={control}
                                                        name='mother_tongue'
                                                        rules={{ required: false }}
                                                        defaultValue={null}
                                                        render={({ field }) => (
                                                            <Autocomplete
                                                                className="mui_autocomplete_field"
                                                                {...field}
                                                                popupIcon={<KeyboardArrowDownIcon />}
                                                                options={[
                                                                    { id: 1, value: "English" },
                                                                    { id: 2, value: "Urdu" },
                                                                    { id: 3, value: "Hindi" },
                                                                    { id: 4, value: "Sindhi" },
                                                                    { id: 5, value: "Pashto" },
                                                                    { id: 6, value: "Arabic" },
                                                                    { id: 7, value: "Punjabi" },
                                                                    { id: 8, value: "Faisalabadi" },
                                                                ]}
                                                                autoHighlight
                                                                getOptionLabel={(option) => option.value || ""}
                                                                isOptionEqualToValue={(option, value) => option.value || ""}
                                                                onChange={(event, newValue) => {
                                                                    setValue('mother_tongue', newValue);
                                                                }}
                                                                renderInput={(params) => (
                                                                    <TextField
                                                                        {...params}
                                                                        fullWidth
                                                                        focused
                                                                        label="Mother Tongue?"
                                                                        placeholder="Select Mother Tongue"
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
                                                </Col>
                                                <Col className="mb-4 pb-2 col" xs="12" sm="6" md="6">
                                                    <Controller
                                                        control={control}
                                                        name='religious_values'
                                                        rules={{ required: false }}
                                                        defaultValue={null}
                                                        render={({ field }) => (
                                                            <Autocomplete
                                                                className="mui_autocomplete_field"
                                                                {...field}
                                                                popupIcon={<KeyboardArrowDownIcon />}
                                                                options={[
                                                                    { id: 1, value: "Religious Value Opt-1", },
                                                                    { id: 2, value: "Religious Value Opt-2", },
                                                                    { id: 3, value: "Religious Value Opt-3", },
                                                                    { id: 4, value: "Religious Value Opt-4", },
                                                                ]}
                                                                autoHighlight
                                                                getOptionLabel={(option) => option.value || ""}
                                                                isOptionEqualToValue={(option, value) => option.value || ""}
                                                                onChange={(event, newValue) => {
                                                                    setValue('religious_values', newValue);
                                                                }}
                                                                renderInput={(params) => (
                                                                    <TextField
                                                                        {...params}
                                                                        fullWidth
                                                                        focused
                                                                        label="Religious Values?"
                                                                        placeholder="Select Religious Values"
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
                                                        {errors.religious_values?.type == "required" && "Field is required"}
                                                    </span>
                                                </Col>
                                                <Col className="mb-4 pb-2 col" xs="12" sm="6" md="6">
                                                    <Controller
                                                        control={control}
                                                        name='country_living_in'
                                                        rules={{ required: false }}
                                                        defaultValue={null}
                                                        render={({ field }) => (
                                                            <Autocomplete
                                                                className="mui_autocomplete_field"
                                                                {...field}
                                                                popupIcon={<KeyboardArrowDownIcon />}
                                                                options={countriesList}
                                                                autoHighlight
                                                                getOptionLabel={(option) => option.value || ""}
                                                                isOptionEqualToValue={(option, value) => option.value || ""}
                                                                onChange={(event, newValue) => {
                                                                    setValue('country_living_in', newValue);
                                                                }}
                                                                renderInput={(params) => (
                                                                    <TextField
                                                                        {...params}
                                                                        fullWidth
                                                                        focused
                                                                        label="Country Living In?"
                                                                        placeholder="Select Country Living In"
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
                                                        {errors.country_living_in?.type == "required" && "Field is required"}
                                                    </span>
                                                </Col>
                                                <Col className="mb-4 pb-2 col" xs="12" sm="6" md="6">
                                                    <Controller
                                                        control={control}
                                                        name='personal_values'
                                                        rules={{ required: false }}
                                                        defaultValue={null}
                                                        render={({ field }) => (
                                                            <Autocomplete
                                                                className="mui_autocomplete_field"
                                                                {...field}
                                                                popupIcon={<KeyboardArrowDownIcon />}
                                                                options={[
                                                                    { id: 1, value: "Value Opt-1", },
                                                                    { id: 2, value: "Value Opt-2", },
                                                                    { id: 3, value: "Value Opt-3", },
                                                                    { id: 4, value: "Value Opt-4", },
                                                                ]}
                                                                autoHighlight
                                                                getOptionLabel={(option) => option.value || ""}
                                                                isOptionEqualToValue={(option, value) => option.value || ""}
                                                                onChange={(event, newValue) => {
                                                                    setValue('personal_values', newValue);
                                                                }}
                                                                renderInput={(params) => (
                                                                    <TextField
                                                                        {...params}
                                                                        fullWidth
                                                                        focused
                                                                        label="Personal Values?"
                                                                        placeholder="Select Personal Values"
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
                                                        {errors.personal_values?.type == "required" && "Field is required"}
                                                    </span>
                                                </Col>
                                                <Col className="mb-4 pb-2 col" xs="12" sm="6" md="6">
                                                    <Controller
                                                        control={control}
                                                        name='state_living_in'
                                                        rules={{ required: false }}
                                                        defaultValue={null}
                                                        render={({ field }) => (
                                                            <Autocomplete
                                                                className="mui_autocomplete_field"
                                                                {...field}
                                                                popupIcon={<KeyboardArrowDownIcon />}
                                                                options={[
                                                                    { id: 1, value: "Punjab", },
                                                                    { id: 2, value: "Islamabad", },
                                                                    { id: 3, value: "Faisalabad", },
                                                                    { id: 4, value: "Other", },
                                                                ]}
                                                                autoHighlight
                                                                getOptionLabel={(option) => option.value || ""}
                                                                isOptionEqualToValue={(option, value) => option.value || ""}
                                                                onChange={(event, newValue) => {
                                                                    setValue('state_living_in', newValue);
                                                                }}
                                                                renderInput={(params) => (
                                                                    <TextField
                                                                        {...params}
                                                                        fullWidth
                                                                        focused
                                                                        label="State Living In?"
                                                                        placeholder="Select State Living In"
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
                                                        {errors.state_living_in?.type == "required" && "Field is required"}
                                                    </span>
                                                </Col>
                                                <Col className="mb-4 col" xs="12" sm="6" md="6">
                                                    <Controller
                                                        control={control}
                                                        name='drinking'
                                                        rules={{
                                                            required: false,
                                                        }}
                                                        defaultValue={null}
                                                        render={({ field }) => (
                                                            <FormControl className="mui_form_control" fullWidth>
                                                                <FormLabel className='me-2 px-3' focused={false}>Spouse with drinking habit?</FormLabel>
                                                                {/* <TextField fullWidth className="me-5" label="Do you smoke?" focused={false} disabled /> */}
                                                                <RadioGroup
                                                                    {...field}
                                                                    row
                                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                                    name="row-radio-buttons-group"
                                                                    onChange={(event) => {
                                                                        setValue("drinking", event.target.value);
                                                                    }}
                                                                >
                                                                    <FormControlLabel value={1} control={<Radio />} label="Yes" />
                                                                    <FormControlLabel value={0} control={<Radio />} label="No" />
                                                                </RadioGroup>
                                                            </FormControl>
                                                        )}
                                                    />
                                                    <span className="field_error">
                                                        {errors.drinking?.type == "required" && "Gender is required"}
                                                    </span>
                                                </Col>
                                                <Col className="mb-4 pb-2 col" xs="12" sm="6" md="6">
                                                    <Controller
                                                        control={control}
                                                        name='city'
                                                        rules={{ required: false }}
                                                        defaultValue={null}
                                                        render={({ field }) => (
                                                            <Autocomplete
                                                                className="mui_autocomplete_field"
                                                                {...field}
                                                                popupIcon={<KeyboardArrowDownIcon />}
                                                                options={[
                                                                    { id: 1, value: "Rawalpindi", },
                                                                    { id: 2, value: "Islamabad", },
                                                                    { id: 3, value: "Faisalabad", },
                                                                    { id: 4, value: "Other", },
                                                                ]}
                                                                autoHighlight
                                                                getOptionLabel={(option) => option.value || ""}
                                                                isOptionEqualToValue={(option, value) => option.value || ""}
                                                                onChange={(event, newValue) => {
                                                                    setValue('city', newValue);
                                                                }}
                                                                renderInput={(params) => (
                                                                    <TextField
                                                                        {...params}
                                                                        fullWidth
                                                                        focused
                                                                        label="City?"
                                                                        placeholder="Select City"
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
                                                        {errors.city?.type == "required" && "Field is required"}
                                                    </span>
                                                </Col>
                                                <Col className="mb-4 col" xs="12" sm="6" md="6">
                                                    <Controller
                                                        control={control}
                                                        name='smoking'
                                                        rules={{
                                                            required: false,
                                                        }}
                                                        defaultValue={null}
                                                        render={({ field }) => (
                                                            <FormControl className="mui_form_control" fullWidth>
                                                                <FormLabel className='me-2 px-3' focused={false}>Spouse with smoking habit?</FormLabel>
                                                                {/* <TextField fullWidth className="me-5" label="Do you smoke?" focused={false} disabled /> */}
                                                                <RadioGroup
                                                                    {...field}
                                                                    row
                                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                                    name="row-radio-buttons-group"
                                                                    onChange={(event) => {
                                                                        setValue("smoking", event.target.value);
                                                                    }}
                                                                >
                                                                    <FormControlLabel value={1} control={<Radio />} label="Yes" />
                                                                    <FormControlLabel value={0} control={<Radio />} label="No" />
                                                                </RadioGroup>
                                                            </FormControl>
                                                        )}
                                                    />
                                                    <span className="field_error">
                                                        {errors.smoking?.type == "required" && "Gender is required"}
                                                    </span>
                                                </Col>
                                            </Row>
                                            <Row className="profile_creation_form_row partners_btns_row_">
                                                <Col className="mb-4 col" xs="12" sm="6" md="6">
                                                    <div className="next_button_panel mt-3_">
                                                        <Button type='submit' className='btn_next me-4'>
                                                            {"Save"}
                                                        </Button>
                                                        <p className="pref_add_later" onClick={handleAddLater}>I Will Add This Later </p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default PartnerPreferenceFormPage