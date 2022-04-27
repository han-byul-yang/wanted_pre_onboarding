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

export default function Tab() {
  const [idx, setIdx] = useState(0)
  const tabList = ['감자', '고구마', '카레라이스']

  return (
    <Box>
      <Tabs>
        {tabList.map((word, id) => <TabOne key={word} act={idx === id ? 'active' : null} onClick={() => setIdx(id)}>{word}</TabOne>)}
      </Tabs>
      <Slide>
        <Bar idx={idx}></Bar>
      </Slide>
    </Box>
  )
}