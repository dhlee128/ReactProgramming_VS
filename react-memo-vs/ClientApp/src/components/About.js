import React, { Component } from "react";
import { TechList } from './shared/techList/TechList';
import { SiteList } from './shared/siteList/SiteList';

export class About extends Component {
    render() {
        const title = "정보";
        const msg = "안녕하세요?";
        return (
            <>
                <h2>{title}</h2>
                <h3>{msg}</h3>

                <p>React 학습을 위한 데모 사이트입니다.</p>

                <div className="row">
                    <div className="col-md-6">
                        <h3><i className="fa fa-wrench">기술 리스트</i></h3>
                        <TechList />
                    </div>
                    <div className="col-md-6">
                        <h3><i className="fa fa-wrench">추천 사이트</i></h3>
                        <SiteList />
                    </div>
                </div>
            </>
        );
    }
}