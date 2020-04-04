import React, {Component} from 'react';

// import './button.style.css';
import './app.css';
import './button.module.css';


import Button from './button';
import BoxA from './box_a';
import BoxB from './box_b';

const myHeader = {
    color: 'blue',
    fontWeight: 300,
    fontFamily: 'Arial',
    fontSize: '30px'
};

class App extends  Component {
    render() {
        return (
            <div>
                <h1 style={myHeader}>How to Style React App</h1>
                <h1 style={myHeader}>Another Header Tag</h1>
                <h1 style={{
                    color: 'blue',
                    fontWeight: 300,
                    fontFamily: 'Arial',
                    fontSize: '30px'}}>One Another Header Tag</h1>
                <Button> Click Me! </Button>
                <BoxA/>
                <BoxB/>
            </div>
        );
    }
}

export default App



// https://styled-components.com/ (jss for 'stayle in js'
//     (hover, psuedo, mediaquery) easy// )