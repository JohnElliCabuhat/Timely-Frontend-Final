import React, { Component } from 'react';
import './UserInfo.css';
class UserInfo extends Component {

    state = {
        id:0,
        name: "",
        DOB: "",
        email: "",
        contact: "",
        description: "",
        error: {
            nameError: "",
            DOBError: "",
            emailError: "",
            contactError: "",
            descriptionError: ""
        },
        formValid: false
    }

    handleChange = (e) => {
        console.log(e);
        console.log(e.target.value);
        console.log(e.target.id);

        if (e.target.id == "name") {
            this.validateName(e.target.value);
        }
        else if (e.target.id == "DOB") {
            this.validateDOB(e.target.value);
        }
        else if (e.target.id == "email") {
            this.validateEmail(e.target.value);
        }
        else if (e.target.id == "contact") {
            this.validateContact(e.target.value);
        }
        else if (e.target.id == "description") {
            this.validateDescription(e.target.value);
        }

    }

    validateName = (name) => {
        let formValid = this.state.formValid;
        let nameError = this.state.error.nameError;
        let pattern = /^([a-zA-Z\s])+$/;

        if (name.trim() === "") {
            formValid = false;
            nameError = "This field is required";
        }
        else if (!pattern.test(name)) {
            formValid = false;
            nameError = "Do not input numbers";
        }
        else {
            formValid = true;
            nameError = "";
        }

        this.setState(
            {
                name,
                formValid,
                error: { ...this.state.error, nameError }
            }
        )

        return formValid;
    }

    validateDOB = (DOB) => {
        let formValid = this.state.formValid;
        let DOBError = this.state.error.DOBError;
        let currentDate = new Date().toJSON().slice(0, 10);
        let pattern = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

        if (DOB.trim() === "") {
            formValid = false;
            DOBError = "This field is required";
        }
        else if (!pattern.test(DOB)) {
            formValid = false;
            DOBError = "Follow the date format";
        }

        else if (DOB > currentDate) {
            formValid = false;
            DOBError = "Date cannot be greater than today's date";
        }
        else {
            formValid = true;
            DOBError = "";
        }

        this.setState(
            {
                DOB,
                formValid,
                error: { ...this.state.error, DOBError }
            }
        )

        return formValid;

    }

    validateEmail = (email) => {
        let formValid = this.state.formValid;
        let emailError = this.state.error.emailError;
        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (email.trim() === "") {
            formValid = false;
            emailError = "This field is required";
        }
        else if (!pattern.test(email)) {
            formValid = false;
            emailError = "Invalid Input";
        }
        else {
            formValid = true;
            emailError = "";
        }

        this.setState(
            {
                email,
                formValid,
                error: { ...this.state.error, emailError }
            }
        )

        return formValid;
    }

    validateContact = (contact) => {
        let formValid = this.state.formValid;
        let contactError = this.state.error.contactError;
        let pattern = /^([0-9])+$/;

        if (contact.trim() === "") {
            formValid = false;
            contactError = "This field is required";
        }
        else if (!pattern.test(contact)) {
            formValid = false;
            contactError = "Numbers only";
        }
        else if (contact.trim().length != 10) {
            formValid = false;
            contactError = "Invalid input"
        }
        else {
            formValid = true;
            contactError = "";
        }

        this.setState(
            {
                contact,
                formValid,
                error: { ...this.state.error, contactError }
            }
        )

        return formValid;
    }

    validateDescription = (description) => {
        let formValid = this.state.formValid;
        let descriptionError = this.state.error.descriptionError;

        if (description.trim() === "") {
            formValid = false;
            descriptionError = "This field is required";
        }
        else {
            formValid = true;
            descriptionError = "";
        }

        this.setState(
            {
                description,
                formValid,
                error: { ...this.state.error, descriptionError }
            }
        )

        return formValid;

    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validateName(this.state.name) &&
            this.validateDOB(this.state.DOB) &&
            this.validateEmail(this.state.email) &&
            this.validateContact(this.state.contact) &&
            this.validateDescription(this.state.description)) {
            alert("Form submitted successfully");
            this.props.addData(this.state);

            this.setState({
                id: this.state.id + 1,
                name: "",
                DOB: "",
                email: "",
                contact: "",
                description:"",
                formValid: false,
            })
        }
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text" placeholder='Enter your name' id='name' onChange={this.handleChange} value={this.state.name} />
                    <p className='error-message'>{this.state.error.nameError}</p>
                    <label>Date Of Birth</label>
                    <input type="text" placeholder='Enter your Birthdate (YYYY-MM-DD)' id='DOB' onChange={this.handleChange} value={this.state.DOB} />
                    <p className='error-message'>{this.state.error.DOBError}</p>
                    <label>Email</label>
                    <input type="text" placeholder='Enter your Email' id='email' onChange={this.handleChange} value={this.state.email} />
                    <p className='error-message'>{this.state.error.emailError}</p>
                    <label>Contact Number</label>
                    <input type="text" placeholder='Enter your Contact Number' id='contact' onChange={this.handleChange} value={this.state.contact} />
                    <p className='error-message'>{this.state.error.contactError}</p>
                    <label>Tell Me About Yourself</label>
                    <input type="text" placeholder='Enter here' id='description' onChange={this.handleChange} value={this.state.description} />
                    <p className='error-message'>{this.state.error.descriptionError}</p>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default UserInfo;