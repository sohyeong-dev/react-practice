# 프로 디지털 아카데미 - 리액트 수업 실습
[신한투자증권 주식 이벤트 페이지](https://digitalshinhansec.com/stock) 클론 코딩

## 폴더 구성
- pages: 페이지 단위 컴포넌트
- components: 컴포넌트
- utils: 공통 함수들
- styles: 스타일 관련
- assets: 소스 파일 외의 파일들
- apis: api 관련

## 임시 서버
json-server

### 설치
```zsh
npm i json-server
```

### 구동
```zsh
cd src/data
npx json-server --watch db.json --port 3001
```