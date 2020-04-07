import React from 'react';
import PropTypes from 'prop-types';

const TextInput = props => (
    <div className='form-group'>
        <label htmlFor={props.name}>{props.label}</label>
        <input
            className='form-control'
            type={props.type}
            name={props.name}
            id={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}

        />
    </div>
);

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

TextInput.defaultProps = {
    type: 'text',
    label: '',
    placeholder: ''
};

class SplitForm extends React.Component {

    state = {
        name: '',
        email: '',
        password: ''
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        // const data = {};
        // data.name = event.target.name.value;
        // data.email = event.target.email.value;
        // data.password = event.target.password.value;
// Jehetu state theke data passi sehetu event theke data neyar proyojon nei
        console.log(this.state);
        event.target.reset();
        this.setState({ name: '', email: '', password: ''});

    };

    render() {
        const { name, email, password} = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextInput
                        name='name'
                        label='Enter Name'
                        placeholder='Mar Babu'
                        value={name}
                        onChange={this.handleChange}
                    />
                    <TextInput
                        name='email'
                        type='email'
                        label='Enter Email'
                        placeholder='mar@babu.com'
                        value={email}
                        onChange={this.handleChange}
                    />
                    <TextInput
                        name='password'
                        type='password'
                        label='Enter Password'
                        placeholder='******'
                        value={password}
                        onChange={this.handleChange}
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default SplitForm;

// Index -> State and Logic (submit handler, change handler, blur handler, validation)
// form -> Form Jsx