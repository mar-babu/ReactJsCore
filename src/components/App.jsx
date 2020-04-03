import React, {Component} from 'react';


class App extends Component{
    // constructor(props){
    //     super(props);
    //     this.count = 5;
    // }

    count = 0;


    render(){
        // console.log(this.count);

        return (
            <div className='App'>
                <h1>Why do we need state</h1>
                <h1>Count = {this.count}</h1>
                <button onClick={()=> {
                    this.count++;
                    console.log('Clicked...', this.count);
                }}>ADD +1</button>
            </div>
        );
    }
}
export default App;