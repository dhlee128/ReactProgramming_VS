import React from 'react';

class StateDescription extends React.Component {
    constructor() {
        super();
        this.state = {
            title : "React",
            msg : "state 개체를 사용하여 클래스 컴포넌트에서 상태 관리",
        };
    }
    render() {
        return (<h3>{this.state.title} - {this.state.msg}</h3>);
    }
}

export default StateDescription;