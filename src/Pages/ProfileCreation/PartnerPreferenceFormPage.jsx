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
import PartnerPreferenceFormTab1 from "../../Components/Signup/PartnerPreferenceFormTab1";
import PartnerPreferenceFormTab2 from "../../Components/Signup/PartnerPreferenceFormTab2";

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
    const [tabValue, setTabValue] = useState(0);

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

    // const onSubmitForm = (data) => {
    //     console.log("onSubmitForm", data)
    //
    //     const newHeighValues = [
    //         heightOpt[data.height[0] - 1]?.label,
    //         heightOpt[data.height[1] - 1]?.label,
    //     ];
    //     console.log("onSubmitForm-height", newHeighValues);
    //
    //     navigate("/my-matches")
    // }

    // const handleAddLater = () => {
    //     navigate("/my-matches")
    // }

    const handleContinueTab = () => {
        if (tabValue === 0) {
            setTabValue(1);
        }
        if (tabValue === 1) {
            navigate("/my-matches");
        }
    }
    const handlePreviousTab = () => {
        if (tabValue !== 0) {
            setTabValue(tabValue - 1);
        }
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
                                        {
                                            tabValue === 0 ?
                                            <PartnerPreferenceFormTab1 nextTab={handleContinueTab}/>
                                            :
                                            <PartnerPreferenceFormTab2 prevTab={handlePreviousTab} />
                                        }
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