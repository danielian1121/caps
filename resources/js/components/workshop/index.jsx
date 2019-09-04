import React, { Component, useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const Submit = styled.button`
    margin-top: 20px;
    margin-left: 10px;
    width: min-width;
    height: 34px;
    color: rgb(255, 255, 255);
    background-color: #337ab7;
    border-color: #2e6da4;
    border-radius: 6px;
    font-size: 18px;
    border-width: 1px;
    cursor: pointer;
    :hover {
        background-color: #286090;
        border-color: #204d74;
    }
    :active {
        background-color: #204d74;
        border-color: #122b40;
    }
`

function Teacher() {
    const [id, setId] = useState('')
    const [question, setQuestion] = useState([])
    const [output, setOutput] = useState()
    useEffect(() => {
        const array = location.pathname.split('/')
        const fileId = array[array.length - 1]
        const getData = (() => {
            axios.get(`/api/workshop/${fileId}`).then(res => {
                setQuestion(res.data.result)
            })
        })()
    }, [])
    const show_title = () => {
        const title = question.find(element => element.id === id)
        if (title) {
            setOutput((
                <div>
                    <h2 style={{width: '70%', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.5'}}>答案：{title.answer}</h2>
                    <h2 style={{width: '70%', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.5'}}>概念：{title.concept}</h2>
                </div>
            ))
        } else {
            setOutput((
                <div>
                    <h1>查無此題號</h1>
                </div>
            ))
        }
    }
    return (
        <div>
            <h1>題目查詢系統</h1>
            <input value={id} onChange={(e) => setId(e.target.value)} />
            <Submit onClick={show_title}>查詢</Submit>
            {output}
        </div>
    )
}

const Student = () =>{
    const [id, setId] = useState('')
    const [noQuestion, setNoQuestion] = useState(false)
    const [question, setQuestion] = useState([])
    const [output, setOutput] = useState()
    useEffect(() => {
        const array = location.pathname.split('/')
        const fileId = array[array.length - 1]
        const getData = (() => {
            axios.get(`/api/workshop/${fileId}`).then(res => {
                if (res.data.status)
                    setQuestion(res.data.result)
                else
                    setNoQuestion(true)
            })
        })()
    }, [])
    const show_title = () => {
        const title = question.find(element => element.id === id)
        if (title) {
            setOutput((
                <div>
                    <h2 style={{width: '70%', textAlign: 'left', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.5'}}>{title.question}</h2>
                    <h2 style={{width: '70%', textAlign: 'left', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.5'}}>{title.options}</h2>
                </div>
            ))
        } else if (noQuestion) {
            setOutput((
                <div>
                    <h1>題目編號輸入有誤，請再次確認</h1>
                </div>
            ))
        } else {
            setOutput((
                <div>
                    <h1>查無此題號</h1>
                </div>
            ))
        }
    }
    return (
        <div>
            <h1>題目查詢系統</h1>
            <input value={id} onChange={(e) => setId(e.target.value)} />
            <Submit onClick={show_title}>查詢</Submit>
            {output}
        </div>
    )
}

function NotFound() {
    return (
        <div>
            <h3>Page Not Found !!</h3>
        </div>
    )
}
class Workshop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            problems: []
        }
    }

    componentDidMount() {}

    render() {
        return (
            <Switch>
                <Route path={`${this.props.match.path}/student`} component={Student} />
                <Route path={`${this.props.match.path}/teacher`} component={Teacher} />
                <Route component={NotFound} />
            </Switch>
        )
    }
}

export default Workshop
