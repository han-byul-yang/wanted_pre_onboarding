import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
position: relative;
width: 25rem;
height: 4.2rem;
background: whitesmoke;
`
const Tabs = styled.div`
position: relative;
display: flex;
width: 100%;
height: 2.2rem;
padding-top: 1rem;
`
const TabOne = styled.div`
color: ${props => props.act === 'active' ? 'black' : 'gray'};
width: calc(100%/3);
height: 100%;
font-weight: bold;
font-size: 15px;
cursor: pointer;
`
const TabTwo = styled(TabOne)``

const TabThree = styled(TabOne)``

const Slide = styled.div`
position: relative;
width: 100%;
height: 3px;
background: #d9dad7;
`
const Bar = styled.div`
position: absolute;
width: calc(100%/3);
height: 3px;
left: ${props => `calc(calc(100%/3) * ${props.idx})`};
transition: all .5s ;
background: #347474;
`

export default function Tab () {
  const [idx, setIdx] = useState(0)

  return (
    <Box>
      <Tabs>
      <TabOne act={idx===0 ? 'active' : null} onClick={() => setIdx(0)}>감자</TabOne>
      <TabTwo act={idx===1 ? 'active' : null} onClick={() => setIdx(1)}>고구마</TabTwo>
      <TabThree act={idx===2 ? 'active' : null} onClick={() => setIdx(2)}>카레라이스</TabThree>
      </Tabs>
      <Slide>
        <Bar idx={idx}></Bar>
      </Slide>
    </Box>
  )
}