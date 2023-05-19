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

const AboutMoreFormTab2 = (props) => {

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


    let formData4 = sessionStorage.getItem("formData4");
    formData4 = formData4? JSON.parse(formData4) : null;


    const onSubmitForm = (data) => {
        console.log("onSubmitForm", data)
        sessionStorage.setItem("formData4", JSON.stringify(data));
        props.nextTab();
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
                            name='father_status'
                            rules={{
                                required: false,
                                pattern: /^[a-zA-Z0-9_ -]*$/,
                            }}
                            defaultValue={formData4? formData4.father_status : ""}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    className="mui_text_field"
                                    label="Father Status"
                                    onChange={(event) => {
                                        setValue("father_status", event.target.value)
                                    }}
                                />
                            )}
                        />
                        <span className="field_error">
                            {errors.father_status?.type == "required" && "Field is required"}
                            {errors.father_status?.type == "pattern" && "Please write Alphanumeric Values"}
                        </span>
                    </Col>

                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='mother_status'
                            rules={{ required: false }}
                            defaultValue={formData4? formData4.mother_status : null}
                            render={({ field }) => (
                                <Autocomplete
                                    className="mui_autocomplete_field"
                                    {...field}
                                    popupIcon={<KeyboardArrowDownIcon />}
                                    options={[
                                        { id: 1, value: "House Wife", },
                                        { id: 2, value: "Teacher", },
                                        { id: 3, value: "Doctor", },
                                        { id: 4, value: "Working as other Profession", },
                                        { id: 5, value: "Other ", },
                                    ]}
                                    autoHighlight
                                    getOptionLabel={(option) => option.value}
                                    isOptionEqualToValue={(option, value) => option.value}
                                    onChange={(event, newValue) => {
                                        setValue('mother_status', newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            label="Mother Status?"
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
                            {errors.mother_status?.type == "required" && "Field is required"}
                        </span>
                    </Col>

                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='num_of_siblings'
                            rules={{
                                required: false,
                                pattern: /^[0-9]*$/,
                            }}
                            defaultValue={formData4? formData4.num_of_siblings : ""}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    className="mui_text_field"
                                    label="Number of Siblings?"
                                    onChange={(event) => {
                                        setValue("num_of_siblings", event.target.value)
                                    }}
                                />
                            )}
                        />
                        <span className="field_error">
                            {errors.num_of_siblings?.type == "required" && "Field is required"}
                            {errors.num_of_siblings?.type == "pattern" && "Please write Numeric Values"}
                        </span>
                    </Col>

                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='live_with_family'
                            rules={{
                                required: false,
                            }}
                            defaultValue={formData4? formData4.live_with_family : null}
                            render={({ field }) => (
                                <FormControl className="mui_form_control" fullWidth>
                                    <FormLabel className='me-2 px-3' focused={false} id="demo-row-radio-buttons-group-label">Do you live with your Family?</FormLabel>
                                    <RadioGroup
                                        {...field}
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        onChange={(event) => {
                                            setValue("live_with_family", event.target.value);
                                        }}
                                    >
                                        <FormControlLabel value={1} control={<Radio />} label="Yes" />
                                        <FormControlLabel value={0} control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                            )}
                        />
                        <span className="field_error">
                            {errors.live_with_family?.type == "required" && "Gender is required"}
                        </span>
                    </Col>

                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='family_living'
                            rules={{
                                required: false,
                                // pattern: /^[0-9]*$/,
                            }}
                            defaultValue={formData4? formData4.family_living : ""}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    className="mui_text_field"
                                    label="Where your family live in?"
                                    onChange={(event) => {
                                        setValue("family_living", event.target.value)
                                    }}
                                />
                            )}
                        />
                        <span className="field_error">
                            {errors.family_living?.type == "required" && "Field is required"}
                            {errors.family_living?.type == "pattern" && "Please write Numeric Values"}
                        </span>
                    </Col>

                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='family_members_in_house'
                            rules={{
                                required: false,
                                pattern: /^[0-9]*$/,
                            }}
                            defaultValue={formData4? formData4.family_members_in_house : ""}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    className="mui_text_field"
                                    label="How much family members are in your house?"
                                    onChange={(event) => {
                                        setValue("family_members_in_house", event.target.value)
                                    }}
                                />
                            )}
                        />
                        <span className="field_error">
                            {errors.family_members_in_house?.type == "required" && "Field is required"}
                            {errors.family_members_in_house?.type == "pattern" && "Please write Numeric Values"}
                        </span>
                    </Col>

                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='you_smoke'
                            rules={{
                                required: false,
                            }}
                            defaultValue={formData4? formData4.you_smoke : null}
                            render={({ field }) => (
                                <FormControl className="mui_form_control" fullWidth>
                                    <FormLabel className='me-2 px-3' focused={false}>Do you smoke?</FormLabel>
                                    {/* <TextField fullWidth className="me-5" label="Do you smoke?" focused={false} disabled /> */}
                                    <RadioGroup
                                        {...field}
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        onChange={(event) => {
                                            setValue("you_smoke", event.target.value);
                                        }}
                                    >
                                        <FormControlLabel value={1} control={<Radio />} label="Yes" />
                                        <FormControlLabel value={0} control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                            )}
                        />
                        <span className="field_error">
                            {errors.you_smoke?.type == "required" && "Gender is required"}
                        </span>
                    </Col>

                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='you_drink'
                            rules={{
                                required: false,
                            }}
                            defaultValue={formData4? formData4.you_drink : null}
                            render={({ field }) => (
                                <FormControl className="mui_form_control" fullWidth>
                                    <FormLabel className='me-2 px-3' focused={false}>Do you drink?</FormLabel>
                                    {/* <TextField fullWidth className="me-5" label="Do you drink?" focused={false} disabled /> */}
                                    <RadioGroup
                                        {...field}
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        onChange={(event) => {
                                            setValue("you_drink", event.target.value);
                                        }}
                                    >
                                        <FormControlLabel value={1} control={<Radio />} label="Yes" />
                                        <FormControlLabel value={0} control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                            )}
                        />
                        <span className="field_error">
                            {errors.you_drink?.type == "required" && "Gender is required"}
                        </span>
                    </Col>

                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='you_pray'
                            rules={{
                                required: false,
                            }}
                            defaultValue={formData4? formData4.you_pray : null}
                            render={({ field }) => (
                                <FormControl className="mui_form_control" fullWidth>
                                    <FormLabel className='me-2 px-3' focused={false}>Do you offer prayer?</FormLabel>
                                    {/* <TextField fullWidth className="me-5" label="Do you offer prayer?" focused={false} disabled /> */}
                                    <RadioGroup
                                        {...field}
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        onChange={(event) => {
                                            setValue("you_pray", event.target.value);
                                        }}
                                    >
                                        <FormControlLabel value={1} control={<Radio />} label="Yes" />
                                        <FormControlLabel value={0} control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                            )}
                        />
                        <span className="field_error">
                            {errors.you_pray?.type == "required" && "Gender is required"}
                        </span>
                    </Col>

                    <Col className="mb-4 col" xs="12" sm="6" md="6">
                        <Controller
                            control={control}
                            name='pay_zakat'
                            rules={{
                                required: false,
                            }}
                            defaultValue={formData4? formData4.pay_zakat : null}
                            render={({ field }) => (
                                <FormControl className="mui_form_control" fullWidth>
                                    <FormLabel className='me-2 px-3' focused={false}>Do you pay zakat?</FormLabel>
                                    {/* <TextField fullWidth className="me-5" label="Do you pay zakat?" focused={false} disabled /> */}
                                    <RadioGroup
                                        {...field}
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        onChange={(event) => {
                                            setValue("pay_zakat", event.target.value);
                                        }}
                                    >
                                        <FormControlLabel value={1} control={<Radio />} label="Yes" />
                                        <FormControlLabel value={0} control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                            )}
                        />
                        <span className="field_error">
                            {errors.pay_zakat?.type == "required" && "Gender is required"}
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
                                {"Save"}
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default AboutMoreFormTab2