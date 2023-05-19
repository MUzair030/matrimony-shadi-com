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

const ProfileFormTab2 = (props) => {
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

    let formData2 = sessionStorage.getItem("formData2");
    formData2 = formData2? JSON.parse(formData2) : null;

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


    const onSubmitForm = (data) => {
        console.log("onSubmitForm", data)
        sessionStorage.setItem("formData2", JSON.stringify(data));
        props.nextTab();
    }

    const handleBackButton = () =>{
        console.log("handleBackButton")
        props.prevTab();
    }


    return (
        <>
            <Form onSubmit={handleSubmit(onSubmitForm)}>
                <Row className="row-form profile_creation_form_row">

                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='martial_status'
                            rules={{ required: false }}
                            defaultValue={formData2? formData2.martial_status : null}
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
                            name='education'
                            rules={{
                                required: false,
                                pattern: /^[a-zA-Z0-9_ -]*$/,
                            }}
                            defaultValue={formData2? formData2.education : ""}
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
                            name='college_name'
                            rules={{
                                required: false,
                                pattern: /^[a-zA-Z0-9_ -]*$/,
                            }}
                            defaultValue={formData2? formData2.college_name : ""}
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
                            defaultValue={formData2? formData2.company_name : null}
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
                            name='career_field'
                            rules={{ required: false }}
                            defaultValue={formData2? formData2.career_field : null}
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
                            name='monthly_income'
                            rules={{ required: false }}
                            defaultValue={formData2? formData2.monthly_income : null}
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
                            name='personal_values'
                            rules={{
                                required: false,
                                pattern: /^[a-zA-Z0-9_ -]*$/,
                            }}
                            defaultValue={formData2? formData2.personal_values : ""}
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
                            name='grew_country'
                            rules={{ required: false }}
                            defaultValue={formData2? formData2.grew_country : null}
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
                            {
                                screenWidth >= 767 && (
                                    <Col className="mb-4 prof_cre_form_left_space" xs="12" sm="12" md="12">
                                        <div className="next_button_panel mt-3_">
                                            <Button className='btn_next' onClick={handleBackButton}>
                                                {"Back"}
                                            </Button>
                                            &nbsp;
                                            &nbsp;
                                            <Button type='submit' className='btn_next'>
                                                {"Continue"}
                                            </Button>
                                        </div>
                                    </Col>
                                )
                            }
                        </Row>
                    </Col>
                    {
                        screenWidth < 767 && (
                            <Col className="mb-4 prof_cre_form_left_space mt-2" xs="12" sm="12" md="12">
                                <div className="next_button_panel mt-3">
                                    <Button className='btn_next' onClick={handleBackButton}>
                                        {"Back"}
                                    </Button>
                                    &nbsp;
                                    &nbsp;
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

export default ProfileFormTab2