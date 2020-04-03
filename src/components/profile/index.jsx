import React from 'react';

import './profile.style.css';

import Bio from './bio';
import Skills from './skills';
import Links from './links';


class Profile extends React.Component{

    me = {
        name: 'Md. Abdur Rahman',
        title: 'Software Engineer, Guitarist, Traveller',
        skillA: 'Php',
        skillB: 'Javascript',
        skillC: 'Laravel',
        skillD: 'React',
        linkA: 'Facebook',
        linkB: 'Twitter',
        linkC: 'Linkedin',
        linkD: 'Github'
    };

    render(){
        // console.log('Profile - ', this.props);
        return (
            <div className='Container'>

                <Bio name= {this.me.name} title= {this.me.title} />
                <Skills skillA={this.me.skillA}
                        skillB={this.me.skillB}
                        skillC={this.me.skillC}
                        skillD={this.me.skillD}

                />
                <Links linkA={this.me.linkA}
                       linkB={this.me.linkB}
                       linkC={this.me.linkC}
                       linkD={this.me.linkD}
                />


            </div>



        )
    }
}

export default Profile;