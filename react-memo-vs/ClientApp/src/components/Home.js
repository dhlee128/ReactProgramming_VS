import React, { Component } from 'react';
import { TechList } from './shared/techList/TechList';
import { SiteList } from './shared/siteList/SiteList';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <>
                <div>
                    <h1>안녕하세요?</h1>
                </div>
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
