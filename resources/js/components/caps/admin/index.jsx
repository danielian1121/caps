import React from 'react'
import styled from 'styled-components'
import {
	Route,
} from 'react-router-dom'

import Edit from './welcomePage/edit'

class Index extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
    const Main = styled.div`
      display: flex;
      flex-direction: column;
      margin-left: auto;
      margin-right: auto;
			margin-top: 34px;
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
		const List = styled.div`
			display: flex;
			flex-direction: column;
			margin-top: 20px;
			width: 100%;
		`
		const Row = styled.a`
			display: flex;
			align-items: center;
			margin: 0;
			margin-bottom: -1px;
			padding: 10px 15px;
			color: ${props => props.color};
			background-color: ${props => props.backgroundColor};
			border-color: ${props => props.borderColor};
			border-style: solid;
			border-width: 1px;
			width: 100%;
			height: 20px;
			text-align: left;
			text-decoration: none;
			font-size: 14px;
			cursor: ${props => props.cursor};
		`
		return (
			<Main>
				<List>
					<Row style={{borderTopRightRadius: '4px', borderTopLeftRadius: '4px'}} color='rgb(255, 255, 255)' backgroundColor='rgb(14, 95, 172)' borderColor='rgb(14, 95, 172)'>使用者管理</Row>
					<Row href='#' color='rgb(85, 85, 85)' backgroundColor='rgb(255, 255, 255)' borderColor='rgb(221, 221, 221)' cursor='pointer'>查看使用者</Row>
					<Row href='#' color='rgb(85, 85, 85)' backgroundColor='rgb(255, 255, 255)' borderColor='rgb(221, 221, 221)' cursor='pointer'>匯入使用者</Row>
					<Row href='#' color='rgb(85, 85, 85)' backgroundColor='rgb(255, 255, 255)' borderColor='rgb(221, 221, 221)' cursor='pointer'>查看所有班別</Row>
					<Row href='#' color='rgb(85, 85, 85)' backgroundColor='rgb(255, 255, 255)' borderColor='rgb(221, 221, 221)' cursor='pointer'>查看所有組別</Row>
					<Row href='#' color='rgb(85, 85, 85)' backgroundColor='rgb(255, 255, 255)' borderColor='rgb(221, 221, 221)' cursor='pointer'>查看所有聊天室</Row>
				</List>
				<List>
					<Row style={{borderTopRightRadius: '4px', borderTopLeftRadius: '4px'}} color='rgb(255, 255, 255)' backgroundColor='rgb(14, 95, 172)' borderColor='rgb(14, 95, 172)'>系統功能</Row>
					<Row href='admin/welcome' color='rgb(85, 85, 85)' backgroundColor='rgb(255, 255, 255)' borderColor='rgb(221, 221, 221)' cursor='pointer'>更改系統說明</Row>
				</List>
				<List>
					<Row style={{borderTopRightRadius: '4px', borderTopLeftRadius: '4px'}} color='rgb(255, 255, 255)' backgroundColor='rgb(14, 95, 172)' borderColor='rgb(14, 95, 172)'>出題系統管理</Row>
					<Row href='#' color='rgb(85, 85, 85)' backgroundColor='rgb(255, 255, 255)' borderColor='rgb(221, 221, 221)' cursor='pointer'>查看所有主題</Row>
					<Row href='#' color='rgb(85, 85, 85)' backgroundColor='rgb(255, 255, 255)' borderColor='rgb(221, 221, 221)' cursor='pointer'>查看所有題目</Row>
					<Row href='#' color='rgb(85, 85, 85)' backgroundColor='rgb(255, 255, 255)' borderColor='rgb(221, 221, 221)' cursor='pointer'>查看學生解題紀錄</Row>
					<Row href='#' color='rgb(85, 85, 85)' backgroundColor='rgb(255, 255, 255)' borderColor='rgb(221, 221, 221)' cursor='pointer'>優良題目標準設定</Row>
					<Row href='#' color='rgb(85, 85, 85)' backgroundColor='rgb(255, 255, 255)' borderColor='rgb(221, 221, 221)' cursor='pointer'>出題提示語設定</Row>
					<Row href='#' color='rgb(85, 85, 85)' backgroundColor='rgb(255, 255, 255)' borderColor='rgb(221, 221, 221)' cursor='pointer'>優良出題標準設定</Row>
				</List>
				<List>
					<Row style={{borderTopRightRadius: '4px', borderTopLeftRadius: '4px'}} color='rgb(255, 255, 255)' backgroundColor='rgb(14, 95, 172)' borderColor='rgb(14, 95, 172)'>出題系統教師評分區</Row>
					<Row href='#' color='rgb(85, 85, 85)' backgroundColor='rgb(255, 255, 255)' borderColor='rgb(221, 221, 221)' cursor='pointer'>查看所有題目等級</Row>
					<Row href='#' color='rgb(85, 85, 85)' backgroundColor='rgb(255, 255, 255)' borderColor='rgb(221, 221, 221)' cursor='pointer'>輸出出題Excel</Row>
					<Row href='#' color='rgb(85, 85, 85)' backgroundColor='rgb(255, 255, 255)' borderColor='rgb(221, 221, 221)' cursor='pointer'>輸出題目卷Excel</Row>
				</List>
				<List>
					<Row style={{borderTopRightRadius: '4px', borderTopLeftRadius: '4px'}} color='rgb(255, 255, 255)' backgroundColor='rgb(14, 95, 172)' borderColor='rgb(14, 95, 172)'>評題系統管理</Row>
					<Row href='#' color='rgb(85, 85, 85)' backgroundColor='rgb(255, 255, 255)' borderColor='rgb(221, 221, 221)' cursor='pointer'>使用者評論涵蓋概念</Row>
					<Row href='#' color='rgb(85, 85, 85)' backgroundColor='rgb(255, 255, 255)' borderColor='rgb(221, 221, 221)' cursor='pointer'>查看所有評論題目</Row>
					<Row href='#' color='rgb(85, 85, 85)' backgroundColor='rgb(255, 255, 255)' borderColor='rgb(221, 221, 221)' cursor='pointer'>指定使用者對使用者評題</Row>
					<Row href='#' color='rgb(85, 85, 85)' backgroundColor='rgb(255, 255, 255)' borderColor='rgb(221, 221, 221)' cursor='pointer'>指定組別對組別評題</Row>
					<Row href='#' color='rgb(85, 85, 85)' backgroundColor='rgb(255, 255, 255)' borderColor='rgb(221, 221, 221)' cursor='pointer'>查看評題指派資料</Row>
					<Row href='#' color='rgb(85, 85, 85)' backgroundColor='rgb(255, 255, 255)' borderColor='rgb(221, 221, 221)' cursor='pointer'>輸出評題Excel</Row>
					<Row href='#' color='rgb(85, 85, 85)' backgroundColor='rgb(255, 255, 255)' borderColor='rgb(221, 221, 221)' cursor='pointer'>輸出出題人回應回饋Excel</Row>
				</List>
				<List>
					<Row style={{borderTopRightRadius: '4px', borderTopLeftRadius: '4px'}} color='rgb(255, 255, 255)' backgroundColor='rgb(14, 95, 172)' borderColor='rgb(14, 95, 172)'>筆記系統管理</Row>
					<Row href='#' color='rgb(85, 85, 85)' backgroundColor='rgb(255, 255, 255)' borderColor='rgb(221, 221, 221)' cursor='pointer'>查看所有筆記</Row>
				</List>
				<List>
					<Row style={{borderTopRightRadius: '4px', borderTopLeftRadius: '4px'}} color='rgb(255, 255, 255)' backgroundColor='rgb(14, 95, 172)' borderColor='rgb(14, 95, 172)'>心製圖系統管理</Row>
					<Row href='#' color='rgb(85, 85, 85)' backgroundColor='rgb(255, 255, 255)' borderColor='rgb(221, 221, 221)' cursor='pointer'>查看所有心製圖</Row>
				</List>
			</Main>
		)
	}
}

export default ({ match }) =>{
	return (
    <div style={{height: '75%', overflowX: 'auto'} }>
      <Route exact path={match.path} component={Index}/>
      <Route path={`${match.url}/welcome`} component={Edit}/>
    </div>
	)
}