import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const Form = styled.div`
display: flex;
flex-direction: column;
position: relative;
background: #f4f4f4;
min-height: 20rem;
height: auto;
width: 16rem;
padding-bottom: 10px;
`
const TopForm = styled.div`
position: relative;
width: 14.7rem;
min-height: 19rem;
height: auto;
margin-top: 0.5rem;
margin-left: auto;
margin-right: auto;
box-sizing: border-box;
`
const Top = styled.div`
display: flex;
width: auto;
height: 2.3rem;
border: #9ba6a5 1px solid;
border-radius: 5px;
cursor: pointer;
align-items: center;
color: gray;
font-weight: bold;
padding-left: 20px;
`
const CarnetDownIcon = styled.span`
position: absolute;
right: 23px;
`
const DropForm = styled.form`
margin-top: 0.2rem;
width: 100%;
display: ${props => props.togglestyle ? "inline-block" : "none"};
border-radius: 5px;
border: 1px solid gray;
box-shadow: 1px 1px 8px 0px rgba(0,0,0,0.4);
`
const Input = styled.input`
width: 12.3rem;
height: 2.2rem;
outline: none;
border: none;
padding-left: 35px;
background: #f1f1f1;
`
const MagnifyingGlassIcon = styled.div`
position: absolute;
top: 50px;
color: gray;
margin-left: 10px;
`
const DropWords = styled.div`
border: none;
border-top: 1px solid gray;
`
const Word = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 2.5rem;
background: #f1f1f1;
color: gray;
font-weight: bold;
cursor: pointer;
:hover{
  background: whitesmoke;
}
`

export default function Dropdown() {
  const [select, setSelect] = useState('red')
  const [inputValue, setInputValue] = useState('')
  const [toggle, setToggle] = useState(false)

  const words = ['red', 'yellow', 'green', 'blue', 'brown', 'purple', 'pink', 'black']

  const onClick = () => {
    toggle ? setToggle(false) : setToggle(true)
  }

  return (
    <Form>
      <TopForm>
        <Top onClick={onClick}>{select}
          <CarnetDownIcon><FontAwesomeIcon icon={faCaretDown} /></CarnetDownIcon>
        </Top>
        <DropForm togglestyle={toggle}>
          <Input type="text" placeholder="Search Color" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></Input>
          <MagnifyingGlassIcon><FontAwesomeIcon icon={faMagnifyingGlass} /></MagnifyingGlassIcon>
          <DropWords>
            {words.map((word) => word.indexOf(inputValue) !== -1 && <Word key={word} onClick={(e) => setSelect(e.target.innerHTML)}>{word}</Word>)}
          </DropWords>
        </DropForm>
      </TopForm>
    </Form>
  )
}