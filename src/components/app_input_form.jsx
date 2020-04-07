import React from 'react';

import classes from './app_input_form.module.css';

import Inputs from './inputs';
import UnControlledForm from './forms/uncontrolled_form';
import ControlledForm from './forms/controlled_form';
import SplitForm from './split-form';

const App = () => {
    return (
        <div className={classes.Wrapper}>
            <h1 className={classes.Heading}>Working with Forms in React</h1>
            <hr/>
            {/*<Inputs/>*/}
            {/*<UnControlledForm/>*/}
            {/*<ControlledForm/>*/}
            <SplitForm/>
        </div>
    );
};

export default App;