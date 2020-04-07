import React from 'react';

class Inputs extends React.Component {

    state = {
      name: '',
      country: '',
      bio: '',
      birthDay: '',
        gender: '',
        skills: [],
        agree: false
    };

    handleChange = event => {
        // console.log(event.target.name)
        this.setState({
           [event.target.name]: event.target.value
        });
    };

    handleCheckBox = event => {
        this.setState({
           agree: event.target.checked
        });
    };

    handleSkillsChange = event => {
        if (event.target.checked) {
            this.setState({
                skills: [... this.state.skills, event.target.value]
            });
        } else {
            const skills = this.state.skills.filter(skill => skill !== event.target.value);
            this.setState({ skills});

        }
    };

    render() {
        const {name, country, bio, birthDay, agree, skills} = this.state;
        return (
            <div>
                <input className='form-control my-2' type='text' name='name' placeholder='Your Name'
                       value={name}
                       onChange={this.handleChange}/>

                <select className='form-control my-2' name='country'
                        value={country}
                        onChange={this.handleChange}>
                    <option value='Bangladesh'>Bangladesh</option>
                    <option value='India'>India</option>
                    <option value='Pakistan'>Pakistan</option>
                    <option value='China'>China</option>
                </select>

                <textarea className='form-control my-2' name='bio' placeholder='Tell Me About Yourself'
                          value={bio}
                          onChange={this.handleChange}></textarea>
                <input className='form-control my-2' type='date' name='birthDay' placeholder='Your Birthday'
                       value={birthDay}
                       onChange={this.handleChange}/>

                <div>
                    <input type='radio'
                           name='gender' value='Male' onChange={this.handleChange}
                    />
                    Male
                    <input type='radio'
                           name='gender' value='Female' onChange={this.handleChange}
                    />
                    Female
                    <input type='radio'
                           name='gender' value='Other' onChange={this.handleChange}
                    />
                    Other
                </div>

                <div>
                    Skills: <br/>
                    <input type='checkbox'
                           name='skills'
                           value='Java'
                           checked={skills.includes('Java')}
                           onChange={this.handleSkillsChange}
                    />
                    Java
                    <input type='checkbox'
                           name='skills'
                           value='JavaScript'
                           checked={skills.includes('JavaScript')}
                           onChange={this.handleSkillsChange}
                    />
                    JavaScript
                    <input type='checkbox'
                           name='skills'
                           value='Python'
                           checked={skills.includes('Python')}
                           onChange={this.handleSkillsChange}
                    />
                    Python
                    <input type='checkbox'
                           name='skills'
                           value='Golang'
                           checked={skills.includes('Golang')}
                           onChange={this.handleSkillsChange}
                    />
                    Golang
                </div>
                <input type='checkbox'
                       name='agree'
                       checked={agree}
                       onChange={this.handleCheckBox}
                />
                  I agree to all terms and conditions!!
                <br/>
            <button onClick={() => console.log(this.state)}>
                Show Data
            </button>
            </div>
        );

    };
};
export default Inputs;
