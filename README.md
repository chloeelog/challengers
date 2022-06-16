# challengers
Challengers App clone with React-Native

## 기능 명세 및 구현 과정에서의 고민 메모

> 🟢 Done: 구현한 것
> 
> 🟡 Mandatory Todo: 꼭 해야할 것
> 
> 🟠 Voluntary Todo: 고도화하면 좋을 것
> 
> 🔴 Undone: 구현하지 못한 것

### 네비게이션
- 🟢 전체 앱 Bottom Navigation 구현
- 🟡 Bottom Navigation 아이콘 스타일링
- 🟡 Bottom Navigation이 제공하는 Screen Title 부분 스타일링
  - 각 상세 탭 타이틀이 노출되는 대신 앱 타이틀과 (챌린지 스크린의 경우) 장바구니가 노출되도록 할 것!
- 🟠 Bottom Tab 배지 구현
  
### 홈 탭
- 🟢 상단 챌린지 카테고리 탭 구현 - Material Top Tab 이용
- 🟢 챌린지 카테고리 데이터 페치 구현 - React Query 이용
  - 🟠 렌더링 최적화를 위한 memoization을 어떻게 도입하면 좋을까? 고민해보자
  - 🟠 Suspense를 이용하는 것이 적절할까? 
    - 기존 React Query가 제공하는 것이 있다면 이용해보는 방법을 찾아볼 것!
    - Image에서도 defaultImage를 이용해 로딩 UI를 만들 수 있는 것 같은데, 그렇다면 Suspense의 사용은 불필요한 엔지니어링이 아닐까? 우선 주어진 기능들을 충실하게 활용할 수 있도록 해보자.
- 🟢 챌린지 목록 그리드 스타일링 - FlatListView 이용


#### 챌린지 컴포넌트 
- 🟠 챌린지 컴포넌트 스타일링
- 🟠 챌린지 컴포넌트 정보 고도화
  - 🟠 시작 날짜까지 디데이 카운팅
  - 🟠 마감 날짜까지 카운팅



## 진행 과정에서의 어려움들
1. M1 맥북에서 React Native 개발환경 설정 세팅 과정에서 어려움을 겪었다.
   > 작성한 블로그: https://velog.io/@chloeelog/React-Native-M1-Mac-맥북-개발환경-설정-팁
2. 앱 빌드 과정, 특히 ios 빌드 과정에서 예상하지 못한 에러를 많이 겪었다.
   * React Native에서 새로운 패키지를 설치하는 것은 아주 보수적으로, 신중하게 생각하고 최소화 해야 한다는 깨달음을 얻었다! 
3. 바퀴를 새롭게 발명할 필요가 없다지만, 이것을 바퀴라고 부른다는 것을 모른다면 어떡하지?
   * 웹 개발을 할 때 익숙했던 개념들을 그대로 접목해서는 안 된다. 앱에는 앱의 언어와 문법이 있다.
     * 예를 들어, Flex와 Grid로 스타일링하는 대신 FlatList를 쓰도록 제공하고 있다. 그러나 이 FlatList의 존재를 몰랐기에, 웹처럼 스타일링했다가 전부 들어내고 다시 고쳐 썼다.
   * 이렇게 앱의 UI 로직에 맞춰 주어진 것들이 있는데, 아직 무엇이 있는지 파악하지 못해서 다시 개발하는 과정에서 시간을 오래 소모했다.