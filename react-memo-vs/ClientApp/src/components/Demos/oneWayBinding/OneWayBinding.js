import React, { Component } from "react";

export class OneWayBinding extends Component {

    constructor(props) {
        super(props);
        this.state = {
            msg : "안녕하세요?",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState(
            { msg : e.target.value }
        );
    }

    render() {
        return (
            <>
                <div>{this.state.msg}</div>
                <hr />
                <input type="text" value={this.state.msg} onChange={this.handleChange }></input>
            </>
        );
    }
}