import React, { Component } from 'react';
import { getParticularData } from '../assets/services';
import withRouter from './withRouter';
import axios from 'axios';

class Post extends Component {

    state ={
        brewData: []
    }

    componentDidMount = () => {
        console.log(this.props.params.post_id);
        let id = this.props.params.post_id;
        axios.get(getParticularData + id).then((res) => {
            console.log(res.data);
            this.setState({
                brewData: res.data
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {
        const data = this.state.brewData.length ? (this.state.brewData.map((data) => {
            return (
                <React.Fragment key={data.id}>
                    <p>{data.name}</p>
                    <p>{data.brewery_type}</p>
                    <p>{data.city}</p>
                </React.Fragment>
            )
        })) : (<p>No Post Yet</p>)
        return (
            <div>
                {data}
            </div>
        );
    }
}

export default withRouter(Post);