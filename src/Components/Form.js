import React, { Component } from 'react';
import "./Form.css";

class Form extends Component {

    state = {
        id: 0,
        name: "",
        email: "",
        contact: "",
        error: {
            nameError: "",
            emailError: "",
            contactError: "",
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
        else if (e.target.id == "email") {
            this.validateEmail(e.target.value);
        }
        else if (e.target.id == "contact") {
            this.validateContact(e.target.value);
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

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validateName(this.state.name) &&
            this.validateEmail(this.state.email) &&
            this.validateContact(this.state.contact)
        ) {
            M.toast({ html: 'User Updated Successfully' })
            this.props.addData(this.state);

            this.setState({
                id: this.state.id,
                name: "",
                email: "",
                contact: "",
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
                    <label>Email</label>
                    <input type="text" placeholder='Enter your Email' id='email' onChange={this.handleChange} value={this.state.email} />
                    <p className='error-message'>{this.state.error.emailError}</p>
                    <label>Contact Number</label>
                    <input type="text" placeholder='Enter your Contact Number' id='contact' onChange={this.handleChange} value={this.state.contact} />
                    <p className='error-message'>{this.state.error.contactError}</p>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Update
                    </button>
                </form>
            </div>
        );
    }
}

export default Form;