import React from 'react';
import "./Contacts.css";

const Contact = () => {
    return (
        <div>
            <h1>Contact Us:</h1>
            <div class="row">
                <div class="col s4">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                        <i class="large material-icons">location_on</i>
                        <div></div>
                            <span class="card-title">Location</span>
                            <h5>The Mandarin Shopping Arcade #02-08 Singapore, Singapore</h5>
                        </div>
                    </div>
                </div>
                <div class="col s4">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                        <i class="large material-icons">contacts</i>
                        <div></div>
                            <span class="card-title">Contact Number</span>
                            <h5>(629) 937-9259</h5>
                        </div>
                    </div>
                </div>
                <div class="col s4">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                        <i class="large material-icons">email</i>
                        <div></div>
                            <span class="card-title">Email</span>
                            <h5>main@brewery.co</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Contact;