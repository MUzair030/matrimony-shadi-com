/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useEffect } from 'react'
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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Form, Input, Label, Row, Col, Card, CardHeader, CardBody, CardFooter } from 'reactstrap'
import { TextValidator, ValidatorForm, SelectValidator } from 'react-material-ui-form-validator';
import { useForm, Controller } from "react-hook-form"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AllCountryCodes from "../../assets/init/AllCountryCodes"
import useWindowDimensions from '../../Hooks/useWindowDimensions';
import { martialStatusOpt, heightOpt, castOpt, subCommunityOpt, incomeMonthlyOpt } from "../../Data/profileCreationData"

const ProfileForm = (props) => {
    const { screenWidth, screenHeight } = useWindowDimensions();

    const {
        control,
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm({ shouldFocusError: true });

    const introAboutDefault_2 = `Allow me a self-introduction.
    I firmly believe honesty to be a man's greatest virtue. I am looking for a loving and caring partner who will walk hand-in-hand with me in every phase of life. If the above strikes the chord, please feel free to connect.`;

    const introAboutDefault = `Allow me a self-introduction.
    Write more someting about yourselt.`;

    const [textareaLimit, setTextareaLimit] = useState(4000)
    const [introAboutContent, setIntroAboutContent] = useState("");
    const setFormattedContent = useCallback(
        text => {
            setIntroAboutContent(text + "")
            let new_value = text + "";
            setValue("intro_about_yourself", new_value);
        },
        [setIntroAboutContent]
    );

    const [countriesList, setCountriesList] = useState([]);

    useEffect(() => {
        let countryArr = [];
        AllCountryCodes.length > 0 && AllCountryCodes.map((item) => countryArr.push({ ...item, value: item.country }))
        setCountriesList(countryArr)
    }, [])

    // console.log("countriesList",countriesList)

    const onSubmitForm = (data) => {
        console.log("onSubmitForm", data)

        props.nextTab();
    }

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmitForm)}>
                <Row className="row-form profile_creation_form_row">
                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='account_for'
                            rules={{ required: false }}
                            defaultValue={null}
                            render={({ field }) => (
                                <Autocomplete
                                    className="mui_autocomplete_field"
                                    {...field}
                                    popupIcon={<KeyboardArrowDownIcon />}
                                    options={[
                                        { id: 1, value: "My Self", },
                                        { id: 2, value: "Brother", },
                                        { id: 3, value: "Sister", },
                                        { id: 4, value: "Others", },
                                    ]}
                                    autoHighlight
                                    getOptionLabel={(option) => option.value}
                                    isOptionEqualToValue={(option, value) => option.value}
                                    onChange={(event, newValue) => {
                                        setValue('account_for', newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            label="This account is for"
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
                            {errors.account_for?.type == "required" && "Field is required"}
                        </span>
                    </Col>
                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='martial_status'
                            rules={{ required: false }}
                            defaultValue={null}
                            render={({ field }) => (
                                <Autocomplete
                                    className="mui_autocomplete_field"
                                    {...field}
                                    popupIcon={<KeyboardArrowDownIcon />}
                                    options={martialStatusOpt}
                                    autoHighlight
                                    getOptionLabel={(option) => option.value}
                                    isOptionEqualToValue={(option, value) => option.value}
                                    onChange={(event, newValue) => {
                                        setValue('martial_status', newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            label="Your Martial Relation?"
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
                            {errors.martial_status?.type == "required" && "Field is required"}
                        </span>
                    </Col>
                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='age'
                            rules={{
                                required: false,
                                pattern: /^(1[89]|[2-9]\d)$/gm,
                            }}
                            defaultValue={""}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    className="mui_text_field"
                                    label="Enter your Age here"
                                    onChange={(event) => {
                                        setValue("age", event.target.value)
                                    }}
                                />
                            )}
                        />
                        <span className="field_error">
                            {errors.age?.type == "required" && "Field is required"}
                            {errors.age?.type == "pattern" && "Age must be between 18 to 99"}
                        </span>
                    </Col>
                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='education'
                            rules={{
                                required: false,
                                pattern: /^[a-zA-Z0-9_ -]*$/,
                            }}
                            defaultValue={""}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    className="mui_text_field"
                                    label="Educational Background"
                                    onChange={(event) => {
                                        setValue("education", event.target.value)
                                    }}
                                />
                            )}
                        />
                        <span className="field_error">
                            {errors.education?.type == "required" && "Field is required"}
                            {errors.education?.type == "pattern" && "Please write Alphanumeric Values"}
                        </span>
                    </Col>
                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='your_height'
                            rules={{ required: false }}
                            defaultValue={null}
                            render={({ field }) => (
                                <Autocomplete
                                    className="mui_autocomplete_field"
                                    {...field}
                                    popupIcon={<KeyboardArrowDownIcon />}
                                    options={heightOpt}
                                    autoHighlight
                                    getOptionLabel={(option) => option.value}
                                    isOptionEqualToValue={(option, value) => option.value}
                                    onChange={(event, newValue) => {
                                        setValue('your_height', newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            label="Your Height"
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
                            {errors.your_height?.type == "required" && "Field is required"}
                        </span>
                    </Col>
                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='college_name'
                            rules={{
                                required: false,
                                pattern: /^[a-zA-Z0-9_ -]*$/,
                            }}
                            defaultValue={""}
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
                            name='date_of_birth'
                            rules={{
                                required: false,
                            }}
                            defaultValue={null}
                            render={({ field }) => (
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <MobileDatePicker
                                        {...field}
                                        fullWidth
                                        className='mui_text_field'
                                        label="Date of birth"
                                        inputFormat="MM/DD/YYYY"
                                        onChange={(newValue) => {
                                            setValue("date_of_birth", newValue)
                                        }}
                                        renderInput={(params) => <TextField fullWidth className="mui_text_field" {...params} />}
                                    />
                                </LocalizationProvider>
                            )}
                        />
                        <span className="field_error">
                            {errors.date_of_birth?.type == "required" && "Field is required"}
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
                            defaultValue={null}
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
                            name='country'
                            rules={{ required: false }}
                            defaultValue={null}
                            render={({ field }) => (
                                <Autocomplete
                                    className="mui_autocomplete_field"
                                    {...field}
                                    popupIcon={<KeyboardArrowDownIcon />}
                                    options={countriesList}
                                    autoHighlight
                                    getOptionLabel={(option) => option.value}
                                    isOptionEqualToValue={(option, value) => option.value}
                                    onChange={(event, newValue) => {
                                        setValue('country', newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            label="Country living in?"
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
                            {errors.country?.type == "required" && "Field is required"}
                        </span>
                    </Col>
                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='career_field'
                            rules={{ required: false }}
                            defaultValue={null}
                            render={({ field }) => (
                                <Autocomplete
                                    className="mui_autocomplete_field"
                                    {...field}
                                    popupIcon={<KeyboardArrowDownIcon />}
                                    options={[
                                        { id: 1, value: "Career-1", },
                                        { id: 2, value: "Career-2", },
                                        { id: 3, value: "Career-3", },
                                        { id: 4, value: "Career-4", },
                                        { id: 5, value: "Career-5", },
                                    ]}
                                    autoHighlight
                                    getOptionLabel={(option) => option.value}
                                    isOptionEqualToValue={(option, value) => option.value}
                                    onChange={(event, newValue) => {
                                        setValue('career_field', newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            label="Career field"
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
                            {errors.career_field?.type == "required" && "Field is required"}
                        </span>
                    </Col>
                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='home_town'
                            rules={{
                                required: false,
                                pattern: /^[a-zA-Z0-9_ -]*$/,
                            }}
                            defaultValue={""}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    className="mui_text_field"
                                    label="Enter Name of Hometown City"
                                    onChange={(event) => {
                                        setValue("home_town", event.target.value)
                                    }}
                                />
                            )}
                        />
                        <span className="field_error">
                            {errors.home_town?.type == "required" && "Field is required"}
                            {errors.home_town?.type == "pattern" && "Please write Alphanumeric Values"}
                        </span>
                    </Col>
                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='monthly_income'
                            rules={{ required: false }}
                            defaultValue={null}
                            render={({ field }) => (
                                <Autocomplete
                                    className="mui_autocomplete_field"
                                    {...field}
                                    popupIcon={<KeyboardArrowDownIcon />}
                                    options={incomeMonthlyOpt}
                                    autoHighlight
                                    getOptionLabel={(option) => option.value}
                                    isOptionEqualToValue={(option, value) => option.value}
                                    onChange={(event, newValue) => {
                                        setValue('monthly_income', newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            label="Monthly Income"
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
                            {errors.monthly_income?.type == "required" && "Field is required"}
                        </span>
                    </Col>
                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='home_address'
                            rules={{
                                required: false,
                                pattern: /^[a-zA-Z0-9_ -]*$/,
                            }}
                            defaultValue={""}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    className="mui_text_field"
                                    label="Your Home Address/House Number"
                                    onChange={(event) => {
                                        setValue("home_address", event.target.value)
                                    }}
                                />
                            )}
                        />
                        <span className="field_error">
                            {errors.home_address?.type == "required" && "Field is required"}
                            {errors.home_address?.type == "pattern" && "Please write Alphanumeric Values"}
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
                            defaultValue={""}
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
                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='your_religion'
                            rules={{ required: false }}
                            defaultValue={null}
                            render={({ field }) => (
                                <Autocomplete
                                    className="mui_autocomplete_field"
                                    {...field}
                                    popupIcon={<KeyboardArrowDownIcon />}
                                    options={[
                                        { id: 1, value: "Muslim", },
                                        { id: 2, value: "Christian", },
                                        { id: 3, value: "Hindu", },
                                        { id: 4, value: "Sikh", },
                                        { id: 5, value: "Budha", },
                                    ]}
                                    autoHighlight
                                    getOptionLabel={(option) => option.value}
                                    isOptionEqualToValue={(option, value) => option.value}
                                    onChange={(event, newValue) => {
                                        setValue('your_religion', newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            label="Your Religion?"
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
                            {errors.your_religion?.type == "required" && "Field is required"}
                        </span>
                    </Col>
                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='grew_country'
                            rules={{ required: false }}
                            defaultValue={null}
                            render={({ field }) => (
                                <Autocomplete
                                    className="mui_autocomplete_field"
                                    {...field}
                                    popupIcon={<KeyboardArrowDownIcon />}
                                    options={countriesList}
                                    autoHighlight
                                    getOptionLabel={(option) => option.value}
                                    isOptionEqualToValue={(option, value) => option.value}
                                    onChange={(event, newValue) => {
                                        setValue('grew_country', newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            label="Country you grew in?"
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
                            {errors.grew_country?.type == "required" && "Field is required"}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12" md="6">
                        <Row className={`${screenWidth < 768 ? 'profile_creation_form_row' : ''}`}>
                            <Col className={`mb-4 ${screenWidth < 768 ? 'col' : 'prof_cre_form_left_space'}`} xs="12" sm="6" md="12">
                                <Controller
                                    control={control}
                                    name='sub_community'
                                    rules={{ required: false }}
                                    defaultValue={null}
                                    render={({ field }) => (
                                        <Autocomplete
                                            className="mui_autocomplete_field"
                                            {...field}
                                            popupIcon={<KeyboardArrowDownIcon />}
                                            options={subCommunityOpt}
                                            autoHighlight
                                            getOptionLabel={(option) => option.value}
                                            isOptionEqualToValue={(option, value) => option.value}
                                            onChange={(event, newValue) => {
                                                setValue('sub_community', newValue);
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    fullWidth
                                                    label="Your Sub Community?"
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
                                    {errors.sub_community?.type == "required" && "Field is required"}
                                </span>
                            </Col>
                            <Col className={`mb-4 ${screenWidth < 768 ? 'col' : 'prof_cre_form_left_space'}`} xs="12" sm="6" md="12">
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
                                            getOptionLabel={(option) => option.value}
                                            isOptionEqualToValue={(option, value) => option.value}
                                            onChange={(event, newValue) => {
                                                setValue('cast', newValue);
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    fullWidth
                                                    label="Your Cast?"
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
                            <Col className={`mb-4 ${screenWidth < 768 ? 'col' : 'prof_cre_form_left_space'}`} xs="12" sm="6" md="12">
                                <Controller
                                    control={control}
                                    name='interests'
                                    rules={{ required: false }}
                                    defaultValue={[]}
                                    render={({ field }) => (
                                        <Autocomplete
                                            multiple
                                            className="mui_autocomplete_field"
                                            {...field}
                                            popupIcon={<KeyboardArrowDownIcon />}
                                            options={[
                                                { id: 1, value: "Sports", },
                                                { id: 2, value: "Music", },
                                                { id: 3, value: "Football", },
                                                { id: 4, value: "Dancer", },
                                                { id: 5, value: "Cooking", },
                                                { id: 6, value: "Driving", },
                                                { id: 7, value: "Cycling", },
                                                { id: 8, value: "Cricket", },
                                            ]}
                                            autoHighlight
                                            getOptionLabel={(option) => option?.value || ""}
                                            onChange={(event, newValue) => {
                                                setValue('interests', newValue);
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    fullWidth
                                                    label="Choose Your Interests"
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
                                    {errors.interests?.type == "required" && "Field is required"}
                                </span>
                            </Col>
                            {
                                screenWidth >= 767 && (
                                    <Col className="mb-4 prof_cre_form_left_space" xs="12" sm="12" md="6">
                                        <div className="next_button_panel mt-3_">
                                            <Button type='submit' className='btn_next'>
                                                {"Continue"}
                                            </Button>
                                        </div>
                                    </Col>
                                )
                            }
                        </Row>
                    </Col>
                    <Col xs="12" sm="12" md="6">
                        <Row>
                            <Col className="mb-0 prof_cre_form_right_space_about_yourself" xs="12" sm="12" md="12">
                                <Controller
                                    control={control}
                                    name="intro_about_yourself"
                                    rules={{ required: false }}
                                    defaultValue={""}
                                    render={({ field }) => (
                                        <FormGroup>
                                            <Label className="intro_about_yourself_label mb-2 px-3" for="intro_about_yourself" style={introAboutContent.length <= textareaLimit ? { color: 'var(--text-color)' } : { color: 'red' }}>About yourself</Label>
                                            <Input
                                                {...field}
                                                type="textarea"
                                                className='intro_about_yourselt_textarea'
                                                // name="intro_about_yourself"
                                                placeholder={introAboutDefault}
                                                onChange={event => {
                                                    setFormattedContent(event.target.value)
                                                }}
                                            />
                                            <div className='intro_about_yourselt_textarea_text_limit'>
                                                <p className='text_help mb-0' style={introAboutContent.length <= textareaLimit ? { color: 'var(--text-color-dark)' } : { color: 'red' }}>
                                                    {
                                                        introAboutContent.length <= textareaLimit ?
                                                            "Edit the suggested text above👆"
                                                            : `You can write maximum of only ${textareaLimit} characters`
                                                    }
                                                </p>
                                                <p className='text_limit ms-1 mb-0'>
                                                    <span className='curr_characters' style={introAboutContent.length <= textareaLimit ? { color: 'blue' } : { color: 'red' }}>{introAboutContent.length}</span>
                                                    <span className='total_characters'>{`( ${textareaLimit} max )`}</span>
                                                </p>
                                            </div>
                                        </FormGroup>
                                    )}
                                />
                                <span className="field_error">
                                    {errors.intro_about_yourself?.type == "required" && "Field is required"}
                                </span>
                            </Col>
                        </Row>
                    </Col>
                    {
                        screenWidth < 767 && (
                            <Col className="mb-4 prof_cre_form_left_space mt-2" xs="12" sm="12" md="12">
                                <div className="next_button_panel mt-3">
                                    <Button type='submit' className='btn_next'>
                                        {"Continue"}
                                    </Button>
                                </div>
                            </Col>
                        )
                    }
                </Row>
            </Form>
        </>
    )
}

export default ProfileForm