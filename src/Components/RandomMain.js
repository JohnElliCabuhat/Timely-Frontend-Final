import React, { Component } from 'react';
import RandomOne from './RandomOne';
import RandomTwo from './RandomTwo';

class RandomMain extends Component {
    render() {
        return (
            <div>
                <RandomOne />
                <RandomTwo />
            </div>
        );
    }
}

export default RandomMain;