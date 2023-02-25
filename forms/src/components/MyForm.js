import React, { useState } from "react";
import MyInput from "./MyInput";
import MyTextArea from "./MyTextArea";
import MySelect from "./MySelect";

const MyForm = () => {
    const [state, setState] = useState({
        myTextBox: "short text",
        myTextArea: "long text",
        mySelect: "2",
        myCheckBox: false,
        errors: {
            myTextBoxError: ""
        }
    });

    const mySelectOptions = [
        { id: 1, name: "name1" },
        { id: 2, name: "name2" },
        { id: 3, name: "name3" },
        { id: 4, name: "name4" }
    ];

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
        validate(name, value);
    }

    const validate = (name, value) => {
        const errors = {
            myTextBoxError: ""
        };
        if (name === "myTextBox" && !value) {
            errors.myTextBoxError = "My TextBox is required";
        }
        setState(prevState => ({
            ...prevState,
            errors: errors
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form sent");
    }

    return (
        <form onSubmit={handleSubmit}>
            <MyInput type="text"
                name="myTextBox"
                label="My TextBox"
                value={state.myTextBox}
                error={state.errors.myTextBoxError}
                onChange={handleChange}>
            </MyInput>
            <MyTextArea name="myTextArea"
                label="My TextArea"
                value={state.myTextArea}
                onChange={handleChange}>
            </MyTextArea>
            <MySelect name="mySelect"
                label="My Select"
                value={state.mySelect}
                options={mySelectOptions}
                onChange={handleChange}>
            </MySelect>
            <MyInput type="checkbox"
                name="myCheckBox"
                label="My CheckBox"
                onChange={handleChange}>
            </MyInput>
            <MyInput type="submit"
                value="Send">
            </MyInput>
        </form>
    );
}

export default MyForm;
