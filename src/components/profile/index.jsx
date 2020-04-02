import React from 'react';

import './profile.style.css';

class Profile extends React.Component{

    render(){
        return (
            <div className='Container'>
                <div className='Bio'>
                    <h3>Md. Abdur Rahman</h3>
                    <p>Software Engineer, Guitarist, Traveler</p>
                </div>

                <div className='Skills'>
                    <h3>Skills: </h3>
                    <ul>
                        <li>Php</li>
                        <li>React</li>
                        <li>Javascript</li>
                        <li>Ajax</li>
                    </ul>
                </div>

                <div className='Links'>
                    <h3>Social Links: </h3>
                    <ul>
                        <li>
                            <a href='#'>Facebook</a>
                        </li>
                        <li>
                            <a href='#'>Twitter</a>
                        </li>
                        <li>
                            <a href='#'>Linkedin</a>
                        </li>
                        <li>
                            <a href='#'>Github</a>
                        </li>
                    </ul>
                </div>
            </div>



        )
    }
}

export default Profile;