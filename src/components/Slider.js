import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
width: 26rem;
height: 11rem;
background: #fafafa;
z-index: -1; 
`
const Contain = styled.div`
display: flex;
flex-direction: column;
width: 24rem;
margin-left: auto;
margin-right: auto;
`
const Board = styled.div`
position: relative;
display: flex;
flex-direction: row;
height: 3.7rem;
border: 1px solid #9ba6a5;
border-radius: 5px;
align-items: center;
justify-content: center;
margin-top: 1rem;
`
const Value = styled.div`
font-weight: bolder;
position: absolute;
right: 65px;
`
const Percentage = styled.div`
position: absolute;
right: 25px;
`
const Slide = styled.div`
margin-left: 4px;
display: flex;
width: 23.5rem;
margin-top: 20px;
margin-bottom: 20px;
position: relative;
`
const Range = styled.input`
-webkit-appearance: none;
  width: 23.5rem;
  height: 6px;
  outline: none;
  background: transparent;
  border-radius: 3px;
  z-index: 7;
  ::-webkit-slider-thumb{
    -webkit-appearance: none;
    width: 22px;
    height: 22px;
    cursor: pointer;
    z-index: 5;
    position: relative;
  }
`
const RangeBar = styled.div`
width: 23rem;
height: 6px;
top: 50%;
transform: translateY(-50%);
position: absolute;
background: #e5e4e3;
z-index: 0;
`
const CircleLine = styled.div`
width: 23.5rem;
position: absolute;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
bottom: 50%;
transform: translateY(50%);
z-index: 1;
`
const Circle = styled.div`
border: 1px solid ${props => props.state ? '#42b883' : '#e5e4e3'};
border-radius: 50%;
width: 16px;
height: 16px;
z-index: 1;
background: ${props => props.state ? '#42b883' : '#e5e4e3'};
`
const Selector = styled.div`
height: 22px;
width: 22px;
border-radius: 50%;
position: absolute;;
z-index: 4;
top: 0;
left: ${props => props.inputcss && `calc(calc(22rem/99)*${props.inputcss-1})`};
`
const MoveBtn = styled.div`
position: absolute;
top: 25%;
transform: translateY(-50%);
height: 22px;
width: 22px;
border: 3px solid white;
border-radius: 50%;
background: #42b883;
cursor: pointer;
`
const Bar = styled.div`
width: ${props => props.inputcss && `calc(calc(22rem/99)*${props.inputcss-1})`};
height: 6px;
background: #42b883;
border-radius: 3px;
top: 50%;
transform: translateY(-50%);
left: 0;
z-index: 4;
position: absolute;
`
const PercentBox = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 3rem;
justify-content: space-between;
`
const Percent = styled.div`
width: 45px;
height: 20px;
font-size: 13px;
border-radius: 10rem;
border: 1px solid #e3e3e3;
background: #e3e3e3;
cursor: pointer;
transition: all 0.4s;
:hover{
background: #42b883;
}`

export default function Slider () {
  const [percentValue, setPercentValue] = useState(1)

  const onClick = (num) => {
    setPercentValue(num)
  }

  return (
    <Box>
      <Contain>
      <Board>
        <Value>{percentValue}</Value>
        <Percentage>%</Percentage>
      </Board>
      <Slide onInput={() => setPercentValue(percentValue)}>
        <Range type="range" min="1" max="100" value={percentValue} onChange={(e) => setPercentValue(e.target.value)}></Range>
        <RangeBar></RangeBar>
        <CircleLine>
        <Circle state={1 <= percentValue}></Circle>
        <Circle state={25 <= percentValue}></Circle>
        <Circle state={50 <= percentValue}></Circle>
        <Circle state={75 <= percentValue}></Circle>
        <Circle state={100 <= percentValue}></Circle>
        </CircleLine>
        <Selector inputcss={percentValue}>
          <MoveBtn></MoveBtn>
        </Selector>
        <Bar inputcss={percentValue}></Bar>
      </Slide>
      <PercentBox>
      <Percent onClick={() => onClick(1)}>1%</Percent>
      <Percent onClick={() => onClick(25)}>25%</Percent>
      <Percent onClick={() => onClick(50)}>50%</Percent>
      <Percent onClick={() => onClick(75)}>75%</Percent>
      <Percent onClick={() => onClick(100)}>100%</Percent>
      </PercentBox>
      </Contain>
    </Box>
  )
}