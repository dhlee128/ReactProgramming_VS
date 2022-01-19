import React, { Component } from "react";
import { ContactDetails } from  "./contact-details/ContactDetails";

export class Contact extends Component {
    render() {
        return (
            <div>
                <h1>010-1234-5678</h1>
                <p>연락처 정보</p>
                <ContactDetails/>
            </div>
        );
    }
}