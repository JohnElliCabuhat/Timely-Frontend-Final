import React, { Component } from 'react';
import axios from 'axios';
import { getDataApi } from '../assets/services';
import { Link } from 'react-router-dom';
import "./Home.css"
class Home extends Component {

    state = {
        dataInfo: []
    }

    componentDidMount = () => {
        axios.get(getDataApi).then(res => {
            console.log(res.data);
            this.setState({
                dataInfo: res.data,
            })
        }).catch(err => {
            console.log(err);
        });
    }
    render() {
        const dataInfo = this.state.dataInfo.length ? (this.state.dataInfo.map((data => {
            return (
                <React.Fragment key={data.id}>
                    <p><Link to={'/home/' + data.id} >{data.name}</Link></p>
                    <p>{data.brewery_type}</p>
                    <p>{data.city}</p>
                    <hr></hr>
                </React.Fragment>
            )
        }))) : (<p>No post yet</p>)
        return (
            <div className='body'>
                {dataInfo}
            </div>
        );
    }
}

export default Home;
