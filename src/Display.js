import React, { Component } from 'react';
import UpdateEmp from './UpdateEmp';
import UpdateFunc from './UpdateFunc';

class Display extends Component {
    render() {
        return (
            <div>
                <UpdateEmp />
                <UpdateFunc />
            </div>
        );
    }
}

export default Display;