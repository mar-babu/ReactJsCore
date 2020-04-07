import React from 'react';
import TextInput from './text-input';
import PropTypes from 'prop-types';


const Form = ({values, handleChange, agreement, handleAgreement, handleSubmit}) => (
    <form onSubmit={handleSubmit}>
        <TextInput
            name='name'
            label='Name'
            placeholder='Mar Babu'
            value={values.name}
            onChange={handleChange}
        />
        <TextInput
            name='email'
            type='email'
            label='email'
            placeholder='mar@babu.com'
            value={values.email}
            onChange={handleChange}
        />
        <TextInput
            name='password'
            type='password'
            label='Password'
            placeholder='******'
            value={values.password}
            onChange={handleChange}
        />
        <TextInput
            name='birthDate'
            type='date'
            label='BirthDate'
            placeholder='******'
            value={values.birthDate}
            onChange={handleChange}
        />
        <div className='form-group'>
            <label className='mr-4'>
                <input
                    className='form-group mr-2'
                    type='radio'
                    name='gender'
                    value='Male'
                    onChange={handleChange}
                />
                Male
            </label>
            <label className='mr-4'>
                <input
                    className='form-group mr-2'
                    type='radio'
                    name='gender'
                    value='Female'
                    onChange={handleChange}
                />
                Female
            </label>
            <label className='mr-4'>
                <input
                    className='form-group mr-2'
                    type='radio'
                    name='gender'
                    value='Other'
                    onChange={handleChange}
                />
                Other
            </label>
        </div>
        <div className='form-group'>
            <label className='mr-4'>
                <input
                    className='form-group mr-2'
                    type='checkbox'
                    name='agreement'
                    checked={agreement}
                    onChange={handleAgreement}
                />
            </label>
        </div>

        <button className='btn btn-primary' type='submit' disabled={!agreement}>Create User</button>
    </form>
);

Form.propTypes = {
    values: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAgreement: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default Form;