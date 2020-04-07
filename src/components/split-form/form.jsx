import React from 'react';
import TextInput from './text-input';
import PropTypes from 'prop-types';


const Form = props => (
    <form onSubmit={props.handleSubmit}>
        <TextInput
            name='name'
            label='Enter Name'
            placeholder='Mar Babu'
            value={props.values.name}
            onChange={props.handleChange}
        />
        <TextInput
            name='email'
            type='email'
            label='Enter Email'
            placeholder='mar@babu.com'
            value={props.values.email}
            onChange={props.handleChange}
        />
        <TextInput
            name='password'
            type='password'
            label='Enter Password'
            placeholder='******'
            value={props.values.password}
            onChange={props.handleChange}
        />
        <button type='submit'>Submit</button>
    </form>
);

Form.propTypes = {
    values: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default Form;