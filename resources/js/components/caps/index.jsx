import React from 'react'
import styled from 'styled-components'
import Body from './common/main'
import Banner from './common/banner'
import Footer from './common/footer'
import {NotificationContainer, NotificationManager} from 'react-notifications'

import 'react-notifications/lib/notifications.css'

class Home extends React.Component{
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
    this.props.history.replace('/', null)


    fetch('/api/welcome/1')
      .then(response => {
        return response.json()
      })
      .then(myJson => {
        this.setState({
          content: myJson.content
        })
      })
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
      <Body>
        <Banner />
        <Main>
          <Title>系統簡介</Title>
          <Content>{this.state.content}</Content>
        </Main>
        <Footer />
        <NotificationContainer/>
      </Body>
    )
  }
}

export default Home
