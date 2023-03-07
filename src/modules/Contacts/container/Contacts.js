import React, { Component } from 'react';
import CardContact from '../component/CardContact';
import CardEmail from '../component/CardEmail';
import CardLocation from '../component/CardLocation';
import ContactForm from '../component/ContactForm';



class Contact extends Component {
    render() {
        return (
            <div>
               <p><CardLocation /></p>
               <p><CardContact /></p>
               <p><CardEmail /></p>
               <p><ContactForm /></p>
            </div>
        );
    }
}

export default Contact;