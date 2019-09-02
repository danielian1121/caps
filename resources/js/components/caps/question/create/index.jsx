import React from 'react'
import styled from 'styled-components'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import axios from 'axios'

const Main = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 55%;
    margin-left: auto;
    margin-right: auto;
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    position: relative;
`

const MainTitle = styled.h3`
    margin: 0;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: unset;
    color: rgb(51, 51, 51);
`

const SubTitle = styled.p`
    margin: 0 0;
    color: rgb(51, 51, 51);
`

const WeekButton = styled.button`
    background-color: #a52323;
    border-color: #901f1f;
    color: #fff;
    font-size: 14px;
    margin-top: 20px;
    padding: 6px 12px;
    height: 34px;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    :hover {
        background-color: #7b1a1a;
        border-color: #5d1414;
    }
    :active {
        background-color: #5d1414;
        border-color: #270808;
    }
`

const WeekList = styled.ul`
    position: absolute;
    width: 100%;
    margin: 5px 0;
    padding: 5px 0;
    width: 160px;
    background-color: #fff;
    top: 100%;
    z-index: 1000;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
`

const WeekElement = styled.li`
    width: 100%;
    height: 26px;
    list-style: none;
    text-align: left;
`

const WeekLink = styled.a`
    display: block;
    padding: 3px 20px;
    text-decoration: none;
    color: #333;
    :hover {
        color: #262626;
        background-color: #f5f5f5;
    }
`

const Edit = styled.div`
    display: flex;
    width: 100%;
`

const Input = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 50%;
`

const Week = styled.div``

const Label = styled.label`
    margin-top: 10px;
    font-weight: bold;
    color: rgb(51, 51, 51);
`

const TextInput = styled.textarea`
    margin-top: 10px;
    width: 100%;
    height: 200px;
    resize: none;
`

const Photo = styled.input`
    margin-top: 10px;
`

const Select = styled.div`
    margin-top: 30px;
    margin-left: 50px;
`

const Select_Row = styled.div`
    display: flex;
    align-items: center;
`

const Button = styled.button`
    margin-top: 20px;
    width: 82px;
    height: 34px;
    color: #fff;
    background-color: #476e32;
    border-color: #3c5c2a;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
`

const Output = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 50%;
`

const Result = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
    height: max-content;
    border: 3px solid #000000;
`

class Create extends React.Component {
    constructor(props) {
        super(props)
        let table = []
        let content = []
        let answer = []
        let check = []
        for (let i = 0; i < 4; i++) {
            content.push('')
            table.push({
                id: i,
                value: (index) => (
                    <Select key={i}>
                        <Select_Row>
                            <input
                                type='checkbox'
                                checked={this.state.check[index]}
                                onChange={() => {
                                    let check = this.state.check
                                    check = check.map((element, position) => {
                                        if (position === index) return !element
                                        return false
                                    })
                                    this.setState({
                                        check
                                    })
                                }}
                            />
                            <label style={{ fontWeight: 'bold' }}>{index + 1}</label>
                            <input
                                value={this.state.content[index]}
                                onChange={(evt) => this.changeValue(evt, index)}
                                type='text'
                                style={{
                                    width: '100%',
                                    height: '18px',
                                    padding: '6px 12px',
                                    marginLeft: '20px',
                                    backgroundColor: 'rgba(255,255,255)',
                                    border: '1px solid #ccc'
                                }}
                                placeholder='請輸入選項'
                            />
                            <button
                                style={{
                                    height: '32px',
                                    width: '38px',
                                    backgroundColor: '#ffffff',
                                    border: '1px solid #ccc',
                                    fontWeight: 'bold'
                                }}
                                onClick={() => this.deleteValue(i, index)}
                            >
                                X
                            </button>
                        </Select_Row>
                        <Select_Row>
                            <Label>上傳圖片</Label>
                            <Photo
                                style={{ marginLeft: '20px' }}
                                type='file'
                                onChange={(evt) => {
                                    const answerPhoto = this.state.answerPhoto
                                    answerPhoto[index] = {
                                        file: evt.target.files[0],
                                        path: URL.createObjectURL(evt.target.files[0])
                                    }
                                    this.setState({
                                        answerPhoto
                                    })
                                }}
                            />
                        </Select_Row>
                    </Select>
                )
            })
            answer.push({
                id: i,
                value: (index) => (
                    <Select style={{ marginLeft: '5px', marginBottom: '60px' }} key={i}>
                        <Select_Row>
                            <input type='checkbox' checked={this.state.check[index]} />
                            <label style={{ fontWeight: 'bold', color: '#000000' }}>{`(${index + 1})`}</label>
                            <label style={{ fontWeight: 'bold', color: '#000000', marginLeft: '5px' }}>
                                {this.state.content[index]}
                            </label>
                        </Select_Row>
                        <Select_Row>
                            <img
                                style={{ width: '100%', marginTop: '20px' }}
                                src={this.state.answerPhoto[index] ? this.state.answerPhoto[index].path : ''}
                            />
                        </Select_Row>
                    </Select>
                )
            })
            check.push(false)
        }
        this.state = {
            weekTitle: {
                title: '請選擇週次主題',
                id: null
            },
            weekShow: false,
            weekContent: [],
            select: table,
            count: 4,
            content,
            question: '',
            concept: '',
            questionPhoto: {
                file: null,
                path: null
            },
            answerPhoto: [],
            answer,
            check
        }
    }

    componentDidMount() {
        axios.get('/api/subject').then((res) =>
            this.setState({
                weekContent: res.data
            })
        )
    }

    changeValue(evt, id) {
        evt.preventDefault()
        const temp = this.state.content.map((element, index) => {
            if (index === id) element = evt.target.value
            return element
        })
        this.setState({
            content: temp
        })
    }

    deleteValue(id, index) {
        const content = this.state.content
        if (content.length < 5) {
            NotificationManager.error('答案不能少於4個', '警告', 2000)
            return
        }
        const select = this.state.select.filter((element) => element.id !== id)
        const answer = this.state.answer
        const answerPhoto = this.state.answerPhoto
        const check = this.state.check
        answer.splice(index, 1)
        answerPhoto.splice(index, 1)
        content.splice(index, 1)
        check.splice(index, 1)
        this.setState({
            select,
            content,
            answer,
            answerPhoto,
            check
        })
    }

    handleSubmit = () => {
        const answer = this.state.check.findIndex((element) => element === true) + 1
        if (answer === 0) {
            NotificationManager.error('記得設定解答～！', '警告', 2000)
            return
        }
        if (this.state.weekTitle.id === null) {
            NotificationManager.error('記得選擇週次～！', '警告', 2000)
            return
        }
        const fd = new FormData()
        fd.append('addition_ref_text', this.state.concept)
        fd.append('description', this.state.question)
        fd.append('description_file', this.state.questionPhoto.file)
        fd.append('answer', `["${answer}"]`)
        //TODO: change to weekly topic
        fd.append('subject_id', this.state.weekTitle.id)
        fd.append('options', this.state.content)
        fd.append('count', this.state.count)
        for (let i = 0; i < this.state.answerPhoto.length; i++) {
            if (this.state.answerPhoto[i]) fd.append(`option_file${i + 1}`, this.state.answerPhoto[i].file)
        }
        axios
            .post('/api/question', fd)
            .then((res) => console.log(res.data))
            .catch((e) => console.log(e))
    }

    render() {
        return (
            <Main>
                <Title>
                    <MainTitle>新增選擇題</MainTitle>
                    <SubTitle>請選擇周次主題後才輸入題目文字</SubTitle>
                    <WeekButton
                        onFocus={() =>
                            this.setState({
                                weekShow: true
                            })
                        }
                    >
                        {this.state.weekTitle.title}
                        <span
                            style={{
                                display: 'inline-block',
                                borderTop: '4px dashed',
                                borderRight: '4px solid transparent',
                                borderLeft: '4px solid transparent',
                                verticalAlign: 'middle',
                                marginLeft: '5px'
                            }}
                        />
                    </WeekButton>
                    <WeekList style={{display: `${this.state.weekShow ? '' : 'none'}`}}>
                        {this.state.weekContent.map((element) => (
                            <WeekElement key={element.id}>
                                <WeekLink
                                    href='#'
                                    onClick={() =>
                                        this.setState({
                                            weekTitle: {
                                                title: element.subject_name,
                                                id: element.id
                                            },
                                            weekShow: false
                                        })
                                    }
                                >
                                    {element.subject_name}
                                </WeekLink>
                            </WeekElement>
                        ))}
                    </WeekList>
                </Title>
                <Edit>
                    <Input>
                        <Week />
                        <Label>題目內容</Label>
                        <TextInput
                            value={this.state.question}
                            onChange={(evt) => {
                                this.setState({ question: evt.target.value })
                            }}
                            placeholder='Who is the most handsome?'
                        />
                        <Label>上傳圖片</Label>
                        <Photo
                            type='file'
                            onChange={(event) =>
                                this.setState({
                                    questionPhoto: {
                                        file: event.target.files[0],
                                        path: URL.createObjectURL(event.target.files[0])
                                    }
                                })
                            }
                        />
                        <Label>題目選項</Label>
                        <div>{this.state.select.map((element, index) => element.value(index))}</div>
                        <Button
                            onClick={() => {
                                const id = this.state.count
                                const content = this.state.content
                                content.push('')
                                const temp = {
                                    id,
                                    value: (index) => (
                                        <Select key={id}>
                                            <Select_Row>
                                                <input
                                                    type='checkbox'
                                                    checked={this.state.check[index]}
                                                    onChange={() => {
                                                        let check = this.state.check
                                                        check = check.map((element, position) => {
                                                            if (position === index) return !element
                                                            return false
                                                        })
                                                        this.setState({
                                                            check
                                                        })
                                                    }}
                                                />
                                                <label style={{ fontWeight: 'bold' }}>{index + 1}</label>
                                                <input
                                                    value={this.state.content[index]}
                                                    onChange={(evt) => this.changeValue(evt, index)}
                                                    type='text'
                                                    style={{
                                                        width: '100%',
                                                        height: '18px',
                                                        padding: '6px 12px',
                                                        marginLeft: '20px',
                                                        backgroundColor: 'rgba(255,255,255)',
                                                        border: '1px solid #ccc'
                                                    }}
                                                    placeholder='請輸入選項'
                                                />
                                                <button
                                                    style={{
                                                        height: '32px',
                                                        width: '38px',
                                                        backgroundColor: '#ffffff',
                                                        border: '1px solid #ccc',
                                                        fontWeight: 'bold'
                                                    }}
                                                    onClick={() => this.deleteValue(id, index)}
                                                >
                                                    X
                                                </button>
                                            </Select_Row>
                                            <Select_Row>
                                                <Label>上傳圖片</Label>
                                                <Photo
                                                    style={{ marginLeft: '20px' }}
                                                    type='file'
                                                    onChange={(evt) => {
                                                        const answerPhoto = this.state.answerPhoto
                                                        answerPhoto[index] = {
                                                            file: evt.target.files[0],
                                                            path: URL.createObjectURL(evt.target.files[0])
                                                        }
                                                        this.setState({
                                                            answerPhoto
                                                        })
                                                    }}
                                                />
                                            </Select_Row>
                                        </Select>
                                    )
                                }
                                const answer = this.state.answer
                                answer.push({
                                    id,
                                    value: (index) => (
                                        <Select style={{ marginLeft: '5px', marginBottom: '60px' }} key={id}>
                                            <Select_Row>
                                                <input type='checkbox' checked={this.state.check[index]} />
                                                <label style={{ fontWeight: 'bold', color: '#000000' }}>{`(${index +
                                                    1})`}</label>
                                                <label
                                                    style={{ fontWeight: 'bold', color: '#000000', marginLeft: '5px' }}
                                                >
                                                    {this.state.content[index]}
                                                </label>
                                            </Select_Row>
                                            <Select_Row>
                                                <img
                                                    style={{ width: '100%', marginTop: '20px' }}
                                                    src={
                                                        this.state.answerPhoto[index]
                                                            ? this.state.answerPhoto[index].path
                                                            : ''
                                                    }
                                                />
                                            </Select_Row>
                                        </Select>
                                    )
                                })
                                const check = this.state.check
                                check.push(false)
                                this.setState({
                                    select: [...this.state.select, temp],
                                    count: id + 1,
                                    content,
                                    answer,
                                    check
                                })
                            }}
                        >
                            新增選項
                        </Button>
                        <Label>參考概念</Label>
                        <input
                            value={this.state.concept}
                            onChange={(evt) => {
                                this.setState({ concept: evt.target.value })
                            }}
                            type='text'
                            style={{
                                width: '80%',
                                height: '18px',
                                padding: '6px 12px',
                                marginTop: '10px',
                                backgroundColor: 'rgba(255,255,255)',
                                border: '1px solid #ccc'
                            }}
                            placeholder='參考概念'
                        />
                        <Button style={{ width: '60px' }} onClick={this.handleSubmit}>
                            提交
                        </Button>
                    </Input>
                    <Output>
                        <Result>
                            <Label>題目:</Label>
                            <Label>{this.state.question}</Label>
                            <img style={{ width: '100%', marginTop: '20px' }} src={this.state.questionPhoto.path} />
                            <Label style={{ marginTop: '30px' }}>解答:</Label>
                            <Select style={{ marginLeft: '5px', marginTop: '10px' }}>
                                {this.state.answer.map((element, index) => element.value(index))}
                            </Select>
                            <Label>參考概念:</Label>
                            <Label>{this.state.concept}</Label>
                        </Result>
                    </Output>
                </Edit>
            </Main>
        )
    }
}

export default Create
