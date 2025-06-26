# react-gift-login

## 구현할 기능 목록

- [ ] 홈과 로그인 - 리액트 기초, 라우팅

  - [o] 1단계 : 프로젝트 초기 세팅  
    - [o] 홈과 로그인(WIP) 레포지토리 클론하기  
    - [o] 불필요한 파일, 코드 정리하기  
        - assets/react.svg, App.css 같은 기본 템플릿 파일 삭제  
        - App.tsx 수정 (import 삭제, className 삭제)  
    - [o] 절대경로 alias 설정  
        - vite.config.ts에서 path 설정 (Node.js 설치 필요)  
        - 절대 경로 설정 완료  
    - [o] Prettier 설정  
        - Prettier 설치 및 .prettierrc 파일 작성  
        - 코드 스타일 자동 포매팅 설정  
    - [o] emotion 스타일 라이브러리 추가 및 reset css 적용  
        - Emotion 설치  
        - styles/GlobalStyle.tsx 생성 후 Reset CSS 적용  
    - [o] Pretendard 기본 폰트 적용  
        - index.html에 Pretendard link 추가  
        - GlobalStyle.tsx의 font-family 설정  
    - [o] 기능 단위로 나누어 커밋하기  

  - [o] 2단계 : 선물하기 메인 페이지 UI 구현  
    - [o] 화면의 max-width를 720px으로 제한  
        - GlobalStyle.tsx에 #root 추가  
        - max-width: 720px, margin: 0 auto로 중앙 정렬  
    - [o] 디자인 토큰 설정 (emotion 기반 Color, Typography 설정)  
        - styles 폴더에 color.ts, typography.ts 생성  
        - theme.ts로 통합 후 Emotion ThemeProvider 적용  
    - [o] Mobile First Design 기반 레이아웃 구조 설계  
        - 전체 화면 최대 폭 720px로 제한  

    - [o] 화면 UI 컴포넌트 구성  
      - [o] 상단 네비게이션 바 구현  
          - react-icons 설치  
          - NavBar.tsx 생성 (아이콘과 텍스트 포함)  
          - App.tsx에 <NavBar /> 적용  
      - [o] 카테고리 섹션 구현  
          - CategorySection.tsx 생성 (grid 5열 3행)  
          - data/categories.ts 작성  
          - App.tsx에 <CategorySection /> 적용  
      - [o] 기타 섹션 구현 (선물한 친구 선택, 카테캠 화이팅)  
          - FriendSelector.tsx, Banner.tsx 생성  
          - App.tsx에 각 컴포넌트 적용  
      - [o] 실시간 급상승 선물 랭킹 구현  
          - RankingSection.tsx 생성  
          - App.tsx에 <RankingSection /> 적용  

  - [ ] 3단계 : 로그인 페이지 및 기능 고도화  

    - [ ] 로그인 기능 구현  
        - [ ] `/login` 경로 접속 시 로그인 페이지 렌더링  
        - [ ] 로그인 화면 UI 구성  
        - [ ] 로그인 버튼 클릭 시 이전 페이지로 Redirect  
        - [ ] 이전 페이지가 없으면 `/` 홈으로 이동  

    - [ ] 네비게이션 바 기능 개선  
        - [ ] 로그인 여부에 따라 로그인 버튼 조건부 렌더링  
        - [ ] 뒤로가기 버튼 추가 및 기능 구현 (`window.history.back()`)  
        - [ ] NavBar 컴포넌트 내 조건부 렌더링 처리  

    - [ ] Not Found 페이지 구현  
        - [ ] 존재하지 않는 경로 접근 시 NotFound 페이지로 이동  
        - [ ] 404 에러 메시지와 UI 구성  

    - [ ] 실시간 급상승 선물 랭킹 기능 개선  
        - [ ] 선택된 필터(성별, 주제)를 새로고침 후에도 유지  
        - [ ] URL 쿼리스트링 또는 localStorage 사용  

    - [ ] 공통 컴포넌트 추출 및 리팩터링  
        - [ ] 반복적으로 사용되는 UI 컴포넌트 분리  
        - [ ] Button, Card, Tab 등 재사용 가능 컴포넌트 구성  

    - [ ] (선택) 스토리북 문서화  
        - [ ] Storybook 설치 및 기본 환경 구성  
        - [ ] 추출한 컴포넌트 문서 작성 및 미리보기 구성  
