import React from 'react'
import styled from 'styled-components'
import Body from '../../common/main'
import Banner from '../../common/banner'
import Footer from '../../common/footer'

class WelcomeEdit extends React.Component{

  constructor(props) {
    super(props)
    this.textareaInput = React.createRef()
    this.state = {
      content: 'Please write an essay about your favorite DOM element.'
    }
  }

  // TODO:  跟後端拿系統簡介
  componentDidMount() {
  }

  handleChange = e => {
    this.setState({
      content: e.target.value
    })
  }

  render() {
    const Main = styled.div`
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

    const Form = styled.div`
      display: flex;
      flex-direction: column;
    `

    const Title = styled.h1`
      margin: 0;
      margin-top: 20px;
      margin-bottom: 10px;
      font-size: 36px;
      font-weight: normal;
      color: #000000;
    `

    const Edit = styled.textarea`
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      width: 80%;
      height: 281px;
      resize: none;
    `

    const Submit = styled.input`
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      width: 70px;
      height: 46px;
      color: rgb(255, 255, 255);
      background-color: rgb(65, 90, 111);
      border-color: rgb(56, 77, 95);
      border-radius: 6px;
      font-size: 18px;
      border-width: 1px;
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
      <Body>
        <Banner />
        <Main>
          <Form>
            <Title>編輯系統說明</Title>
            <Edit ref={this.textareaInput} defaultValue={this.state.content} />
            <Submit type='submit' value='儲存' onClick={() => {
              console.log(this.textareaInput.current.value)
            }} />
          </Form>
        </Main>
        <Footer />
      </Body>
    )
  }
}

export default WelcomeEdit
