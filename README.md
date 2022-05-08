# 원티드 프리온보딩 코스
## 원티드 프리온보딩 5월 8일 린트활용 과제 수정 url
https://github.com/han-byul-yang/wanted_pre_onboarding_update

## Toggle
### 구현 방법 및 이유 
> activate된 tab의 요소를 DOM에서 직접 가져와 색상을 바꿔주기 위해 react useRef Hook를 사용하였습니다. 두 개의 tab 밖에 없어 직접 activate 색상을 각각 달리 지정해주었습니다. 현재 activate된 tab 요소를 state에 저장하여 styled components에서 좌측에서 요소가 떨어진 정도를 달리하여 움직임을 구현하였습니다.  

## Tab
### 구현 방법 및 이유
> 클릭한 tab에 idx 번호를 부여하여 태그에 act 프로퍼티를 주었고, styled components에서 active가 부여된 태그 색상이 바뀌도록 props를 이용하였습니다. Bar 태그에는 클릭된 tab의 idx 값을 프로퍼티로 부여하여 한 탭의 width 곱하기 idx 값으로 좌측에서 해당 탭 위치만큼 이동할 수 있도록 하였습니다. 

## Slider
### 어려웠던 점과 해결 방법
> 사실 과제를 진행하면서 고민을 가장 많이 했던 기능이었습니다. 처음에는 input 태그의 range type을 부여해서 기능 구현은 쉽게 할 수 있었습니다. 하지만 디자인을 적용하려고 하니 슬라이드 버튼 이동 시 progress 막대를 구현하기 쉽지 않았습니다. 해당 기능을 구현할 수 있는 -moz-range-progress의 경우 firefox에서만 작동하기 때문에 크로스 브라우징 문제로 progress 막대를 직접 디자인 해야하는 상황이었습니다. 처음에 저는 문제를 해결하기위해 Slider 기능 구현 자체를 처음부터 다시 하려고 하였습니다. 이를 위해 onMouseDown과 onMouseUp 그리고 onMouseMove와 같은 이벤트를 사용하여 마우스 클릭 상태에서 이동할 때 e.nativeEvent.offsetX 로 구한 해당 요소 안에서의 위치만큼 요소를 이동시키도록 하였습니다. 하지만 이동시킬 때 끊임없는 렌더링이 일어나고 있는 것이 보였고, 버튼의 잔상이 계속 남아 깔끔하지 못했습니다. 또한 무슨 이유에서였는지 요소의 전체 width를 구해 100으로 나눈 값을 현재 위치에서 나누어 위치상의 비율을 구하려고 했는데 ref.current.clientWidth가 구해지질 않았습니다. 위와 같은 이유들 때문에 다시 input 태그를 이용한 range type에서 문제를 해결하고자 하였습니다. 
결과적으로, 검색 중 onInput 이라는 이벤트를 알게되었고 이를 이용해서 input value 가 변화할 때 마다 progress 막대의 width 값도 그만큼 늘려주는 방식으로 해결할 수 있게 되었습니다. 

## Input
### 구현 방법 및 이유
> 이메일 폼의 경우 실시간 이메일 유효성 검사를 위해 onChange 이벤트를 이용하여 정규표현식에 부합하면 checking state에 true를 주었습니다. checking state가 true일 경우 이메일의 체크 font는 초록색으로 전환됩니다. 다른 비밀번호 폼으로 넘어갔을 때 오류 메세지를 띄워주기 위해 onBlur 이벤트를 이용하였습니다. 비밀번호 폼의 경우 toggle을 이용해 눈 모양을 누르면 input의 type이 password에서 text 형식 또는 그 반대로 바뀌면서 비밀번호를 보여주고 숨겨주도록 구현 하였습니다. 

## Dropdown
### 구현 방법 및 이유
> React useState Hook을 사용하여 탑 폼을 클릭할 때마다 상태를 바꾸어 단어 항목 폼이 toggle될 수 있도록 하였습니다. 배열의 Map 함수를 이용해서 Input 태그에 입력한 문자가 각 배열의 요소 문자 안에 포함될 시에 띄워줄 수 있도록 하였습니다. 폼의 단어를 클릭하면 state에 업데이트가 되어 탑 폼에 띄워줄 수 있도록 하였습니다.  
