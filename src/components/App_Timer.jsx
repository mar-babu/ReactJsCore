import React, {Component} from 'react';


class App extends Component{
    state = {
        count: 0
    };


    intervalId = null;



    increamentCount = () => {
        this.setState({ count: this.state.count + 1});
    };

    decreamentCount = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1});
        }
    };

    startTimer = () => {
        if (this.state.count > 0 && !this.intervalId) {
            this.intervalId = setInterval(() => {
                this.setState({count: this.state.count -1}, () => {
                    if (this.state.count == 0) {
                        alert('Timer Finished');
                        clearInterval(this.intervalId);
                        this.intervalId = null;
                    }
                });
            }, 1000);
        }

    };

    stopTimer = () => {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    };

    resetTimer = () => {
        this.setState({ count: 0});
        clearInterval(this.intervalId);
        this.intervalId = null;
    };

    render(){

        return (
            <div className='App'>
                <h1 className='Heading'>Simple Timer</h1>
                <div className="'Container">
                    <button className='Btn' onClick={this.decreamentCount}>
                        -
                    </button>
                    <span className='Text'>{this.state.count}</span>
                    <button className='Btn' onClick={this.increamentCount}>
                        +
                    </button>

                </div>
                <div className='Container'>
                    <button onClick={this.startTimer} className='Btn'>Start</button>
                    <button onClick={this.stopTimer} className='Btn'>Stop</button>
                    <button onClick={this.resetTimer} className='Btn'>Reset</button>

                </div>
            </div>
        );
    }
}
export default App;