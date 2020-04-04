import React, {Component} from 'react';

import classes from './app.module.css';

class App extends Component {

    state = {
        name: ''
};

    handleButtononClick = event => {
        // console.log(event);
        console.log(event.target);
        // console.log('I am cute little button');
    };

    handleChange = event => {
      // console.log(event.target.value)
      this.setState({ name: event.target.value})
    };


    handleFocus = event => {
        console.log('I am focus Event');
    };

    handleBlur = event => {
        if (!this.state.name) {
            alert('Please Enter Your Name');
        }
        console.log('I am blur Event');
    };


    render () {
      return (
          <div className={classes.Wrapper}>
              <h1 className={classes.Heading}>Events is React</h1>
              <button className={classes.Btn} onClick={this.handleButtononClick}>CLick Me!!</button>
              <br/>

              <input className={classes.TextField} type="text" placeholder='Enter Some Text'
                     value={this.state.name}
                     onChange={this.handleChange}
                     onFocus={this.handleFocus}
                     onBlur={this.handleBlur}
              />

              <br/>
              <br/>
              {this.state.name && <h3>Welcome, {this.state.name}</h3>}


          </div>
      );
    };
}

export default App;