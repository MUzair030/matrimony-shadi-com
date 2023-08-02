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
} from "@mui/material";
import { Form, Input, Label, Row, Col, Card, CardHeader, CardBody, CardFooter } from 'reactstrap'
import { TextValidator, ValidatorForm, SelectValidator } from 'react-material-ui-form-validator';
import { useForm, Controller } from "react-hook-form"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AllCountryCodes from "../../assets/init/AllCountryCodes"
import { useNavigate } from 'react-router-dom';

const AboutMoreFormTab1 = (props) => {
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


    let formData3 = sessionStorage.getItem("formData3");
    formData3 = formData3? JSON.parse(formData3) : null;


    const onSubmitForm = (data) => {
        let formStatus = false;
        console.log("onSubmitForm3", data)
        const keys = Object.keys(data);
        keys.forEach(key => {
            if(data[key] !== null && data[key]?.length !== 0){
                formStatus = true;
            }
        });
        if(formStatus){
            sessionStorage.setItem("formData3", JSON.stringify(data));
            props.nextTab();
        }
    }

    const handleAddLater = () => {
        navigate("/partner-preference")
        // props.nextTab();
    }

    const handleBackButton = () =>{
        console.log("handleBackButton")
        props.prevTab();
    }

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmitForm)}>
                <Row className="profile_creation_form_row">
                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='diet'
                            rules={{
                                required: false,
                                pattern: /^[a-zA-Z0-9_ -]*$/,
                            }}
                            defaultValue={formData3? formData3.diet : ""}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    className="mui_text_field"
                                    label="Write about your diet"
                                    onChange={(event) => {
                                        setValue("diet", event.target.value)
                                    }}
                                />
                            )}
                        />
                        <span className="field_error">
                            {errors.diet?.type == "required" && "Field is required"}
                            {errors.diet?.type == "pattern" && "Please write Alphanumeric Values"}
                        </span>
                    </Col>

                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='body_type'
                            rules={{
                                required: false,
                                pattern: /^[a-zA-Z0-9_ -]*$/,
                            }}
                            defaultValue={formData3? formData3.body_type : ""}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    className="mui_text_field"
                                    label="Body Type"
                                    onChange={(event) => {
                                        setValue("body_type", event.target.value)
                                    }}
                                />
                            )}
                        />
                        <span className="field_error">
                            {errors.body_type?.type == "required" && "Field is required"}
                            {errors.body_type?.type == "pattern" && "Please write Alphanumeric Values"}
                        </span>
                    </Col>

                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='blood_group'
                            rules={{ required: false }}
                            defaultValue={formData3? formData3.blood_group : null}
                            render={({ field }) => (
                                <Autocomplete
                                    className="mui_autocomplete_field"
                                    {...field}
                                    popupIcon={<KeyboardArrowDownIcon />}
                                    options={[
                                        { id: 1, value: "A+", },
                                        { id: 2, value: "A-", },
                                        { id: 3, value: "B+", },
                                        { id: 4, value: "B-", },
                                        { id: 5, value: "O+", },
                                        { id: 6, value: "O-", },
                                        { id: 7, value: "AB+", },
                                        { id: 8, value: "AB-", },
                                    ]}
                                    autoHighlight
                                    getOptionLabel={(option) => option.value || ""}
                                    isOptionEqualToValue={(option, value) => option.value || ""}
                                    onChange={(event, newValue) => {
                                        setValue('blood_group', newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            label="Blood Group?"
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
                            {errors.blood_group?.type == "required" && "Field is required"}
                        </span>
                    </Col>

                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='star_sign'
                            rules={{ required: false }}
                            defaultValue={formData3? formData3.star_sign : null}
                            render={({ field }) => (
                                <Autocomplete
                                    className="mui_autocomplete_field"
                                    {...field}
                                    popupIcon={<KeyboardArrowDownIcon />}
                                    options={[
                                        { id: 1, value: "Sign-1", },
                                        { id: 2, value: "Sign-2", },
                                        { id: 3, value: "Sign-3", },
                                        { id: 4, value: "Sign-4", },
                                    ]}
                                    autoHighlight
                                    getOptionLabel={(option) => option.value}
                                    isOptionEqualToValue={(option, value) => option.value}
                                    onChange={(event, newValue) => {
                                        setValue('star_sign', newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            label="Star Sign?"
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
                            {errors.star_sign?.type == "required" && "Field is required"}
                        </span>
                    </Col>

                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='city_zipcode'
                            rules={{
                                required: false,
                                pattern: /^[a-zA-Z0-9_ -]*$/,
                            }}
                            defaultValue={formData3? formData3.city_zipcode : ""}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    className="mui_text_field"
                                    label="Your City Zipcode?"
                                    onChange={(event) => {
                                        setValue("city_zipcode", event.target.value)
                                    }}
                                />
                            )}
                        />
                        <span className="field_error">
                            {errors.city_zipcode?.type == "required" && "Field is required"}
                            {errors.city_zipcode?.type == "pattern" && "Please write Alphanumeric Values"}
                        </span>
                    </Col>

                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='spoken_languages'
                            rules={{ required: false }}
                            defaultValue={formData3? formData3.spoken_languages : []}
                            render={({ field }) => (
                                <Autocomplete
                                    {...field}
                                    multiple
                                    className="mui_autocomplete_field"
                                    popupIcon={<KeyboardArrowDownIcon />}
                                    options={[
                                        { id: 1, value: "English", },
                                        { id: 2, value: "Urdu", },
                                        { id: 3, value: "Spanish", },
                                        { id: 4, value: "Pashto", },
                                        { id: 5, value: "Hindi", },
                                    ]}
                                    autoHighlight
                                    getOptionLabel={(option) => option.value || ""}
                                    onChange={(event, newValue) => {
                                        setValue('spoken_languages', newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            label="Languages can speak?"
                                            inputProps={{
                                                ...params.inputProps,
                                                autoComplete: 'off',
                                            }}
                                        />
                                    )}
                                    renderOption={(props, option) => (
                                        <MenuList {...props} className="mui_options_menu_list_render">
                                            <MenuItem className="mui_options_menu_item_render">{option?.value}</MenuItem>
                                        </MenuList>
                                    )}
                                />
                            )}
                        />
                        <span className="field_error">
                            {errors.spoken_languages?.type == "required" && "Field is required"}
                        </span>
                    </Col>

                    {/* <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='mother_language'
                            rules={{ required: false }}
                            defaultValue={formData3? formData3.mother_language : null}
                            render={({ field }) => (
                                <Autocomplete
                                    className="mui_autocomplete_field"
                                    {...field}
                                    popupIcon={<KeyboardArrowDownIcon />}
                                    options={[
                                        { id: 1, value: "English", },
                                        { id: 2, value: "Urdu", },
                                        { id: 3, value: "Spanish", },
                                        { id: 4, value: "Pashto", },
                                        { id: 5, value: "Hindi", },
                                    ]}
                                    autoHighlight
                                    getOptionLabel={(option) => option.value || ""}
                                    isOptionEqualToValue={(option, value) => option.value || ""}
                                    onChange={(event, newValue) => {
                                        setValue('mother_language', newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            label="Mother Language?"
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
                            {errors.mother_language?.type == "required" && "Field is required"}
                        </span>
                    </Col> */}

                    {/* <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='family_religious_type'
                            rules={{ required: false }}
                            defaultValue={formData3? formData3.family_religious_type : null}
                            render={({ field }) => (
                                <Autocomplete
                                    className="mui_autocomplete_field"
                                    {...field}
                                    popupIcon={<KeyboardArrowDownIcon />}
                                    options={[
                                        { id: 1, value: "Opt-1", },
                                        { id: 2, value: "Opt-2", },
                                        { id: 3, value: "Opt-3", },
                                        { id: 4, value: "Opt-4", },
                                    ]}
                                    autoHighlight
                                    getOptionLabel={(option) => option.value || ""}
                                    isOptionEqualToValue={(option, value) => option.value || ""}
                                    onChange={(event, newValue) => {
                                        setValue('family_religious_type', newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            label="How much is family religious?"
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
                            {errors.family_religious_type?.type == "required" && "Field is required"}
                        </span>
                    </Col>

                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='family_values'
                            rules={{ required: false }}
                            defaultValue={formData3? formData3.family_values : null}
                            render={({ field }) => (
                                <Autocomplete
                                    className="mui_autocomplete_field"
                                    {...field}
                                    popupIcon={<KeyboardArrowDownIcon />}
                                    options={[
                                        { id: 1, value: "Lower Class", },
                                        { id: 2, value: "Middle Class", },
                                        { id: 3, value: "High Standard", },
                                        { id: 4, value: "Royal Family", },
                                    ]}
                                    autoHighlight
                                    getOptionLabel={(option) => option.value || ""}
                                    isOptionEqualToValue={(option, value) => option.value || ""}
                                    onChange={(event, newValue) => {
                                        setValue('family_values', newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            label="Family Values"
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
                            {errors.family_values?.type == "required" && "Field is required"}
                        </span>
                    </Col> */}

<Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='college_name'
                            rules={{
                                required: false,
                                pattern: /^[a-zA-Z0-9_ -]*$/,
                            }}
                            defaultValue={formData3? formData3.college_name : ""}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    className="mui_text_field"
                                    label="College Name"
                                    onChange={(event) => {
                                        setValue("college_name", event.target.value)
                                    }}
                                />
                            )}
                        />
                        <span className="field_error">
                            {errors.college_name?.type == "required" && "Field is required"}
                            {errors.college_name?.type == "pattern" && "Please write Alphanumeric Values"}
                        </span>
                    </Col>


                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='company_name'
                            rules={{
                                required: false,
                                pattern: /^[a-zA-Z0-9_ -]*$/,
                            }}
                            defaultValue={formData3? formData3.company_name : null}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    className="mui_text_field"
                                    label="Company Name"
                                    onChange={(event) => {
                                        setValue("company_name", event.target.value)
                                    }}
                                />
                            )}
                        />
                        <span className="field_error">
                            {errors.company_name?.type == "required" && "Field is required"}
                            {errors.company_name?.type == "pattern" && "Please write Alphanumeric Values"}
                        </span>
                    </Col>


                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='family_details'
                            rules={{ required: false }}
                            defaultValue={formData3? formData3.family_details : null}
                            render={({ field }) => (
                                <Autocomplete
                                    className="mui_autocomplete_field"
                                    {...field}
                                    popupIcon={<KeyboardArrowDownIcon />}
                                    options={[
                                        { id: 1, value: "Option-1", },
                                        { id: 2, value: "Option-2", },
                                        { id: 3, value: "Option-3", },
                                        { id: 4, value: "Option-4", },
                                    ]}
                                    autoHighlight
                                    getOptionLabel={(option) => option.value || ""}
                                    isOptionEqualToValue={(option, value) => option.value || ""}
                                    onChange={(event, newValue) => {
                                        setValue('family_details', newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            label="Family Details"
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
                            {errors.family_details?.type == "required" && "Field is required"}
                        </span>
                    </Col>

                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='family_influence'
                            rules={{
                                required: false,
                                pattern: /^[a-zA-Z0-9_ -]*$/,
                            }}
                            defaultValue={formData3? formData3.family_influence : ""}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    className="mui_text_field"
                                    label="Family Influence"
                                    onChange={(event) => {
                                        setValue("family_influence", event.target.value)
                                    }}
                                />
                            )}
                        />
                        <span className="field_error">
                            {errors.family_influence?.type == "required" && "Field is required"}
                            {errors.family_influence?.type == "pattern" && "Please write Alphanumeric Values"}
                        </span>
                    </Col>

                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='family_type'
                            rules={{ required: false }}
                            defaultValue={formData3? formData3.family_type : null}
                            render={({ field }) => (
                                <Autocomplete
                                    className="mui_autocomplete_field"
                                    {...field}
                                    popupIcon={<KeyboardArrowDownIcon />}
                                    options={[
                                        { id: 1, value: "Option-1", },
                                        { id: 2, value: "Option-2", },
                                        { id: 3, value: "Option-3", },
                                        { id: 4, value: "Option-4", },
                                    ]}
                                    autoHighlight
                                    getOptionLabel={(option) => option.value || ""}
                                    isOptionEqualToValue={(option, value) => option.value || ""}
                                    onChange={(event, newValue) => {
                                        setValue('family_type', newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            label="Your Family Type?"
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
                            {errors.family_type?.type == "required" && "Field is required"}
                        </span>
                    </Col>

                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='personal_values'
                            rules={{
                                required: false,
                                pattern: /^[a-zA-Z0-9_ -]*$/,
                            }}
                            defaultValue={formData3? formData3.personal_values : ""}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    className="mui_text_field"
                                    label="Personal Values"
                                    onChange={(event) => {
                                        setValue("personal_values", event.target.value)
                                    }}
                                />
                            )}
                        />
                        <span className="field_error">
                            {errors.personal_values?.type == "required" && "Field is required"}
                            {errors.personal_values?.type == "pattern" && "Please write Alphanumeric Values"}
                        </span>
                    </Col>

                    <Col className="prof_cre_form_left_space" md="12">
                        <div className="next_button_panel mt-3_">
                            <Button className='btn_next' onClick={handleBackButton}>
                                {"Back"}
                            </Button>
                            &nbsp;
                            &nbsp;
                            <Button type='submit' className='btn_next'>
                                {"Continue"}
                            </Button>
                            &nbsp;
                            &nbsp;
                            <p className="pref_add_later" onClick={handleAddLater}>I Will Add This Later </p>

                        </div>

                    </Col>

                    {/* <Col className="mb-4 col" xs="12" sm="6" md="6">
                                                    <div className="next_button_panel mt-3_">
                                                        <Button type='submit' className='btn_next me-4'>
                                                            {"Continue"}
                                                        </Button>
                                                        <p className="pref_add_later" onClick={handleAddLater}>I Will Add This Later </p>
                                                    </div>
                                                </Col> */}
                </Row>
            </Form>
        </>
    )
}

export default AboutMoreFormTab1