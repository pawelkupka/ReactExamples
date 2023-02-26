import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyInput from "./MyInput";
import MyCheckBox from "./MyCheckBox";
import MySelect from "./MySelect";

const MyForm = () => {
    const myOptions = [
        { id: 1, name: "Option 1" },
        { id: 2, name: "Option 2" },
        { id: 3, name: "Option 3" }
    ];

    const initialValues = {
        firstName: "",
        lastName: "",
        checkConsent: false,
        selectedOption: "1"
    };

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .min(2, "Too short")
            .max(10, "Too long")
            .required("It is required"),
        lastName: Yup.string()
            .min(2, "Too short")
            .max(10, "Too long")
            .required("It is required")
    });

    const handleSubmit = (formData) => {
        console.log("Form sent", formData);
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form>
                <MyInput name="firstName" label="First Name" type="text"></MyInput>
                <MyInput name="lastName" label="Last Name" type="text"></MyInput>
                <MyCheckBox name="checkConsent" label="Check Consent"></MyCheckBox>
                <MySelect name="selectedOption" label="Select Option" options={myOptions}></MySelect>
                <button type="submit">Send</button>
            </Form>
        </Formik>
    );
}

export default MyForm;
