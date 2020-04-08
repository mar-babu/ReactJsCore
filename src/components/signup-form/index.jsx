import React from 'react';

import PropTypes from 'prop-types'


import Form from "./form";

const initValues = {
    name: '',
    email: '',
    password: '',
    birthDate: '',
    gender: ''
};

class SignupForm extends React.Component {

    state = {
        values: initValues,
        agreement: false,
        errors: {}
    };

    handleChange = event => {
      this.setState({
          values: {
              ...this.state.values,
              [event.target.name]: event.target.value
          }
      })
    };

    handleAgreement = event => {
        this.setState({
            agreement: event.target.checked
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        const {isValid, errors} = this.validate();

        if (isValid) {
            // console.log(this.state.values);
            this.props.createUser(this.state.values);
            event.target.reset();
            this.setState({values: initValues, agreement: false, errrors: {}});
        } else {
            // console.log(errors);
            this.setState({errors});
        }
    };

    validate = () => {
        const errors = {};
        const { values: {name, email, password, gender, birthDate}} = this.state;

        if (!name) {
            errors.name = 'Please Provide Your Name'
        }
        if (!email) {
            errors.email = 'Please Provide Your Email'
        }
        if (!password) {
            errors.password = 'Please Provide Your Password'
        }
        if (!birthDate) {
            errors.birthDate = 'Please Provide Your BirthDate'
        }
        if (!gender) {
            errors.gender = 'Please Select Your Gender'
        }

        return {
            errors,
            isValid: Object.keys(errors).length === 0
        }
    };

    render () {
        return (
            <div>
                <h1>Signup Form</h1>
                <Form
                    values={this.state.values}
                    agreement={this.state.agreement}
                    errors={this.state.errors}  //OPTIONAL
                    handleChange={this.handleChange}
                    handleAgreement={this.handleAgreement}
                    handleSubmit={this.handleSubmit}/>
            </div>
        );
    };
}

SignupForm.propTypes = {
    createUser: PropTypes.func.isRequired
};

export default SignupForm;