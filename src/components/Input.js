import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"

const Form = styled.form`
display: flex;
flex-direction: column;
width: 23rem;
min-height: 10rem;
height: auto;
background: #fafafa;
`
const EmailForm = styled.div`
position: relative;
margin-top: 0.7rem;
height: calc(100%/2);
`
const Title = styled.div`
font-size: 14px;
text-align: start;
margin-left: 25px;
margin-bottom: 4px;
`
const Write = styled.input`
border: solid 1px #9ba6a5;
width: 19rem;
height: 2rem;
outline: none;
background: #f2f2f2;
padding-left: 10px;
:focus{
  border: 1px solid #575151;
}
::-ms-reveal{
  display: none;
}
`
const ValidMessage = styled.div`
color: red;
font-size: 13px;
text-align: start;
margin-left: 23px;
`
const PasswordForm = styled.div`
position: relative;
margin-top: 1rem;
margin-bottom: 0.7rem;
height: calc(100%/2);
`
const Font = styled.span`
position: absolute;
color: ${props => props.check ? 'green' : 'gray'};
right: 36px;
top: 50%;
`

export default function Input() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [valid, setValid] = useState(true)
  const [checking, setChecking] = useState(false)
  const [show, setShow] = useState(false)

  const checkEmail = (e) => {
    const emailval = e.target.value
    setEmail(emailval)
    setValid(true)
    if ((/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/).test(emailval)){
      setChecking(true)
    } else {
      setChecking(false)}
  }

  const checkValid = () => {
    setValid(checking)
  }

  const toggleEye = () => {
    show ? setShow(false) : setShow(true)
  }


  return (
    <Form>
      <EmailForm onSubmit={(e) => e.preventDefault()}>
        <Title>E-mail</Title>
        <Write type="email" placeholder='E-mail' value={email} onChange={(e) => checkEmail(e)} onBlur={checkValid}></Write>
        <Font check={checking}><FontAwesomeIcon icon={faCircleCheck} /></Font>
      </EmailForm>
      <ValidMessage>{!valid && 'invalid email address'}</ValidMessage>
      <PasswordForm onSubmit={(e) => e.preventDefault()}>
        <Title>Password</Title>
        <Write type={show ? "text" : "password"} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></Write>
        <Font onClick={toggleEye}><FontAwesomeIcon icon={show ? faEye : faEyeSlash} /></Font>
      </PasswordForm>
    </Form>
  )
}
//정규표현식 확인