import React from 'react'
import styled from 'styled-components'
import {
	Route,
} from 'react-router-dom'

class Index extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
    const Main = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: auto;
      margin-right: auto;
			margin-top: 17px;
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
      margin-bottom: 10px;
      font-size: 30px;
      font-weight: normal;
      color: #000000;
    `


    const Button = styled.a`
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      width: 100%;
      height: 70px;
      color: #fff;
      background-color: #415a6f;
      border-color: #384d5f;
      font-size: 24px;
      text-decoration: none;
      cursor: pointer;
      :hover {
        background-color: rgb(46, 64, 79);
        border-color: rgb(33, 46, 56);
      }
      :active {
        background-color: rgb(33, 46, 56);
        border-color: rgb(8, 12, 15);
      }
    `

		return (
			<Main>
        <Title>出題系統</Title>
        <Button href='#'>新增題目</Button>
        <Button href='#'>管理題目</Button>
        <Button href='#'>閱讀回饋</Button>
			</Main>
		)
	}
}
// <Route path={`${match.url}/create`} component={Edit}/>
export default ({ match }) =>{
	return (
    <div style={{height: '75%', overflowX: 'auto'} }>
      <Route exact path={match.path} component={Index}/>
      <Route path={match.path} component={Index}/>
    </div>
	)
}