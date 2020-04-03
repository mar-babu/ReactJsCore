import React, {Component} from 'react';

import Profile from './profile';
import MyProps from './props';

import Skills from './profile/skills';

class App extends Component{

    render(){

        return (
            <div className='App'>

                <Profile/>

                <div style={{ marginTop: '30px', marginBottom: '30px', marginLeft: '28%'}}>
                    <h3 style={{ marginBottom: '20px'}}>
                        List of Programmers
                    </h3>
                    <p>Mr. X</p>
                    <Skills
                        skillA='React'
                        skillB='Angular'
                        skillC='Vue'
                    />
                    <p>Mr. Y</p>
                    <Skills
                        skillA='NodeJs'
                        skillB='ExpressJs'
                        skillC='MongoDB'
                    />
                    <MyProps name={'Mar'}/>
                    <MyProps name={'Jasmine'}/>

                </div>
            </div>
        );
    }
}
export default App;