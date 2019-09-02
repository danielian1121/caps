import React, { Component, useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Swal from 'sweetalert2'

import './index.css'

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
        const getData = (() => {
            axios.get('/api/edpsygame').then(res => {
                setQuestion(res.data.result)
            })
        })()
    }, [])
    const show_answer= () => {
        const title = question.find(element => element.id === id)
        if (title) {
            setOutput((
                <div>
                    <h2 style={{width: '70%', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.5'}}>答案：{title.answer}</h2>
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
    const show_one= () => {
        const title = question.find(element => element.id === id)
        if (title) {
            setOutput((
                <div>
                    <h2 style={{width: '70%', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.5'}}>{title.singletips}</h2>
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
    const show_four= () => {
        const title = question.find(element => element.id === id)
        if (title) {
            setOutput((
                <div>
                    <h2 style={{width: '70%', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.5'}}>{title.fourtips}</h2>
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
            <Submit onClick={show_answer}>查詢答案</Submit>
            <Submit onClick={show_one}>查詢一句提示</Submit>
            <Submit onClick={show_four}>查詢四個選項</Submit>
            {output}
        </div>
    )
}

const Student = () =>{
    const [id, setId] = useState('')
    const [question, setQuestion] = useState([])
    const [output, setOutput] = useState()
    const answer = [
        'knowledge', 'information', '發展連續論', '同化' , '調適',
        '感覺動作期', '前運思期', '具體運思期', '形式運思期', '專注現象', '遞移能力', '序列化', '守恆概念',
        '自我中心', '可/不可逆性', '基模', 'Zone of Proximal Development', '鷹架構築', '鷹架撤除', '古典制約', '操作制約',
        '正增強', '負增強', '呈現型懲罰', '撤離型懲罰', '原級增強物', '次級增強物', '內在增強物', '外在增強物',
        '普力馬原則', '代幣增強物', '固定比率增強', '不定比率增強', '固定時距增強', '不定時距增強', 'SkinnerBox', '楷模學習',
        '替代學習', '模仿階段：注意', '模仿階段：保留', '模仿階段：再生', '模仿階段：動機', '班杜拉Bandura'
    ]
    useEffect(() => {
        const getData = (() => {
            axios.get(`/api/edpsygame`).then(res => {
                setQuestion(res.data.result)
            })
        })()
    }, [])
    const show_title = () => {
        const title = question.find(element => element.id === id)
        if (title) {
            setOutput((
                <div>
                    <h2 style={{width: '70%', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.5'}}>{title.question}</h2>
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
    const showAnswer = () => {
        return (
            <div>
                {answer.map(element => (
                    <Submit onClick={() => {
                        Swal.fire({
                            text: `${element}`,
                            width: '60%',
                            showConfirmButton: false
                        })
                    }}>{element}</Submit>
                ))}
            </div>
        )
    }
    return (
        <div>
            <h1>題目查詢系統</h1>
            <input value={id} onChange={(e) => setId(e.target.value)} />
            <Submit onClick={show_title}>查詢</Submit>
            {output}
            {showAnswer()}
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
class Edpsygame extends Component {
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

export default Edpsygame
