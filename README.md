# 박주원 포트폴리오

React와 Vite로 만든 정적 포트폴리오 사이트입니다. Notion 포트폴리오 내용을 웹 포트폴리오로 옮겨 배포하기 쉽게 구성했습니다.

## 구조

- `frontend/`: Vite 기반 React 앱
- `frontend/src/data.ts`: 포트폴리오 데이터
- `frontend/src/main.tsx`: React 화면 구성
- `frontend/src/styles.css`: 화면 스타일

## 실행

```bash
npm --prefix frontend install
npm run dev:frontend
```

접속 주소:

- React 앱: http://localhost:5173

## 빌드

```bash
npm run build
```

빌드 결과물은 `frontend/dist`에 생성됩니다.

## 배포

Vercel 기준 설정:

- Framework Preset: `Vite`
- Root Directory: `frontend`
- Build Command: `npm run build`
- Output Directory: `dist`

Netlify 기준 설정:

- Base directory: `frontend`
- Build command: `npm run build`
- Publish directory: `frontend/dist`
