import React, {Component} from 'react';


class App extends Component{
    // constructor(props){
    //     super(props);
    //     this.count = 5;
    //     this.state = {
    //         count: 0
    //     }
    // }
    state = {
        count: 0
    };



    render(){
        // console.log(this.count);

        return (
            <div className='App'>
                <h1>Why do we need state</h1>
                <h1>Count = {this.state.count}</h1>
                <button onClick={()=> {
                    // this.count++;
                    // this.setState({ count: this.state.count +1});
                    this.setState(prev => {
                        return {
                            count: prev.count + 1
                        };
                    }, () => {
                        console.log('Clicked...', this.state.count);

                    });
                }}>ADD +1</button>
            </div>
        );
    }
}
export default App;