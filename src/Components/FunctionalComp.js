import React, { useState } from 'react';
import Form from './Form';

const FunctionalComp = () => {

    const [userInfo, setUserInfo] = useState([{
        id: 0,
        name: "Elli",
        email: "elli@gmail.com",
        contact: "1234567890",
    },])

    const updateInfo = (props) => {
        let userCopy = [...userInfo];
        userCopy[0].name = props.name;
        userCopy[0].email = props.email;
        userCopy[0].contact = props.contact;
        setUserInfo(userCopy);
    }

    return (
        <div>
            <Form addData={updateInfo} />

            <p>
                {userInfo.map((user) => {
                    return (
                        <div key={user.id} class="row">
                            <div class="col s4">
                                <div class="card blue-grey darken-1">
                                    <div class="card-content white-text">
                                        <h5>Name: {user.name}</h5>
                                        <h5>Email: {user.email}</h5>
                                        <h5>Contact: {user.contact}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </p>
        </div>
    );
};

export default FunctionalComp;