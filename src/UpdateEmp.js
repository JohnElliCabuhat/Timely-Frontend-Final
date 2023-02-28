import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onUpdate } from './action';
class UpdateEmp extends Component {

    handleUpt = () => {
        this.props.onUpt({ id: 3, name: "Rose", gender: "female"});
    }

    render() {
        console.log(this.props);
        return (
            <>
            <h3>Class Component</h3>
            <p>
                {this.props.empInfo.map((e) => {
                    return (
                        <div key={e.id}>
                            <p>{e.name}</p>
                            <p>{e.gender}</p>
                        </div>
                    )
                })}
            </p>
                <button onClick={this.handleUpt}>Update</button>
            <p>
            </p>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        empInfo: state.empData
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpt: (val) => dispatch(onUpdate(val))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateEmp);