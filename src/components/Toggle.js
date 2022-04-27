import { useRef, useState } from "react";
import styled from "styled-components";

const Form = styled.div`
position: relative;
width: 19rem;
height: 3rem;
background: #ececec;
border-radius: 3rem;
`
const Box = styled.div`
position: relative;
width: 100%;
height: 2.9rem;
`
const Bar = styled.div`
position: absolute;
width: 9rem;
height: 2.5rem;
margin: 0.3rem;
background: white;
border-radius: 3rem;
left: ${props => props.status === 'basic' ? '0' : 'calc(100%/2)'};
transition: all .5s;
`
const TabOne = styled.div`
position: absolute;
display: flex;
align-items: center;
width: calc(100%/2);
height: 100%;
justify-content: center ;
left: 0;
color: gray;
font-weight: bold;
cursor: pointer;
`
const TabTwo = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
width: calc(100%/2);
height: 100%;
text-align: center;
right: 0;
font-weight: bold;
cursor: pointer;`

export default function Toggle() {
  const [tabState, setTabState] = useState('basic')
  const targetBasic = useRef()
  const targetDetail = useRef()

  const clickTab = (target) => {
    if (target === targetBasic) {
      target.current.style.color = 'black'
      targetDetail.current.style.color = 'gray'
      setTabState('basic')
    } else {
      target.current.style.color = 'black'
      targetBasic.current.style.color = 'gray'
      setTabState('detail')
    }
  }

  return (
    <Form>
      <Box>
        <Bar status={tabState}></Bar>
        <TabOne ref={targetBasic} onClick={() => clickTab(targetBasic)}>기본</TabOne>
        <TabTwo ref={targetDetail} onClick={() => clickTab(targetDetail)}>상세</TabTwo>
      </Box>
    </Form>
  )
}