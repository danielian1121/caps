import React from 'react'
import styled from 'styled-components'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { Route } from 'react-router-dom'
import axios from 'axios'
import Body from './common/main'
import Banner from './common/banner'
import Footer from './common/footer'
import Admin from './admin/index'
import Question from './question/index'

import 'react-notifications/lib/notifications.css'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ''
        }
    }

    componentDidMount() {
        //TODO: 顯示修改成功放到設定主業
        if (this.props.location.state) {
            NotificationManager.success(this.props.location.state.message, this.props.location.state.title)
        }
        this.props.history.replace('/caps', null)

        axios.get('/api/welcome/1').then(res =>
            this.setState({
                content: res.data.content
            })
        )
    }

    render() {
        const Main = styled.div`
            display: flex;
            flex-direction: column;
            margin-left: auto;
            margin-right: auto;
            @media screen and (min-width: 768px) {
                width: 750px;
            }
            @media screen and (min-width: 992px) {
                width: 970px;
            }
            @media screen and (min-width: 1200px) {
                width: 1170px;
            }
        `

        const Title = styled.h1`
            margin: 0;
            margin-top: 20px;
            margin-bottom: 10px;
            font-size: 36px;
            font-weight: normal;
            color: #000000;
        `

        const Content = styled.pre`
            margin-top: 10px;
            margin-bottom: 10px;
            text-align: left;
            font-size: 18px;
            line-height: 45px;
            letter-spacing: 3px;
            color: #000000;
        `
        return (
            <Main>
                <Title>系統簡介</Title>
                <Content>{this.state.content}</Content>
            </Main>
        )
    }
}

class Index extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Body>
                <Banner />
                <Route exact path={this.props.match.path} component={Home} />
                <Route path={`${this.props.match.path}/admin`} component={Admin} />
                <Route path={`${this.props.match.path}/question`} component={Question} />
                <Footer />
                <NotificationContainer />
            </Body>
        )
    }
}

export default Index
